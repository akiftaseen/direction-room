import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createSeed, SEED_VERSION } from "./seed";
import { uid } from "./utils";
import type {
  AppData,
  ChangeSetItem,
  CreativeContract,
  FeedbackItem,
  FeedbackSource,
  NeedItem,
  ProjectState,
} from "./types";

type Store = AppData & {
  hydrated: boolean;
  setHydrated: () => void;
  resetDemo: () => void;
  addComment: (input: {
    token: string;
    text: string;
    authorName: string;
    assetVersionId: string | null;
    x: number | null;
    y: number | null;
  }) => string | null;
  submitReviewDecision: (input: {
    token: string;
    approverName: string;
    approverEmail: string;
    decisions: { reviewItemId: string; decision: "approved" | "changes_requested" }[];
    conditions?: string;
  }) => string | null;
  verifyFeedback: (id: string, actor: string) => void;
  rejectFeedback: (id: string, reason: string, actor: string) => void;
  deferFeedback: (id: string, actor: string) => void;
  verifyAllClear: (roundId: string, actor: string) => void;
  compileChangeSet: (roundId: string, actor: string) => string | null;
  updateChangeItem: (id: string, patch: Partial<ChangeSetItem>) => void;
  confirmChangeSet: (id: string, actor: string) => void;
  createProjectFromIntake: (input: {
    clientName: string;
    projectName: string;
    projectType: string;
    targetDate: string;
    contract: Omit<
      CreativeContract,
      "id" | "projectId" | "versionNumber" | "status" | "approvedBy" | "approvedAt" | "createdAt"
    >;
  }) => string;
  approveContract: (contractId: string, actor: string) => void;
  publishReview: (input: {
    projectId: string;
    title: string;
    contextText: string;
    versionIds: string[];
    approverContactId: string;
    dueAt: string;
  }) => string;
  importPastedFeedback: (input: {
    roundId: string;
    text: string;
    sender: string;
    channel: string;
  }) => void;
  applyExtractedFeedback: (roundId: string, items: FeedbackItem[]) => void;
  addVersion: (input: {
    deliverableId: string;
    name: string;
    imageUrl: string;
    note: string;
  }) => string;
  createDeliverable: (input: {
    projectId: string;
    name: string;
    category: string;
    description: string;
  }) => string;
  acceptDecision: (id: string, actor: string) => void;
  proposeDecision: (input: {
    projectId: string;
    statement: string;
    rationale: string;
    scope: "client" | "project" | "deliverable";
  }) => void;
  publishDelivery: (projectId: string, actor: string) => string | null;
  acknowledgeDelivery: (token: string) => void;
  markChangeResolution: (
    itemId: string,
    resolution: ChangeSetItem["resolution"],
    note: string,
  ) => void;
};

function nowIso() {
  return new Date().toISOString();
}

function activity(
  projectId: string | null,
  actor: string,
  eventType: string,
  summary: string,
) {
  return {
    id: uid("act"),
    projectId,
    actor,
    eventType,
    summary,
    occurredAt: nowIso(),
  };
}

export const useAppStore = create<Store>()(
  persist(
    (set, get) => ({
      ...createSeed(),
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),
      resetDemo: () => set({ ...createSeed(), hydrated: true }),

      addComment: ({ token, text, authorName, assetVersionId, x, y }) => {
        const round = get().reviews.find((r) => r.guestToken === token);
        if (!round) return null;
        if (round.state === "approved" || round.state === "cancelled") return null;
        const source: FeedbackSource = {
          id: uid("src"),
          projectId: round.projectId,
          reviewRoundId: round.id,
          sourceType: x != null && y != null ? "pin_comment" : "general_comment",
          authorName,
          authorRole: "client",
          assetVersionId,
          pageNumber: x != null ? 1 : null,
          x,
          y,
          rawText: text.trim(),
          sourceLabel: x != null ? "Pin comment" : "Review comment",
          createdAt: nowIso(),
        };
        set((s) => ({
          sources: [...s.sources, source],
          reviews: s.reviews.map((r) =>
            r.id === round.id && r.state === "published"
              ? { ...r, state: "feedback_open" }
              : r,
          ),
          activity: [
            activity(round.projectId, authorName, "review.feedback_received", "New comment"),
            ...s.activity,
          ],
        }));
        return source.id;
      },

      submitReviewDecision: ({ token, approverName, approverEmail, decisions, conditions }) => {
        const round = get().reviews.find((r) => r.guestToken === token);
        if (!round) return "Review not found.";
        const contact = get().contacts.find((c) => c.id === round.approverContactId);
        if (contact && contact.name !== approverName && approverName !== contact.name) {
          // Guest demo: allow the named approver only
        }
        if (contact && approverName.trim() !== contact.name) {
          return `Only ${contact.name} can record the final decision.`;
        }
        const items = get().reviewItems.filter((i) => i.reviewRoundId === round.id);
        if (decisions.length !== items.length) {
          return "Record a decision on every item.";
        }
        const snapshots = decisions.map((d) => {
          const item = items.find((i) => i.id === d.reviewItemId)!;
          return {
            id: uid("ap"),
            projectId: round.projectId,
            reviewRoundId: round.id,
            reviewItemId: item.id,
            assetVersionId: item.assetVersionId,
            deliverableId: item.deliverableId,
            decision: d.decision,
            approverName,
            approverEmail,
            conditions: conditions?.trim() || null,
            decidedAt: nowIso(),
          };
        });
        const anyChanges = snapshots.some((s) => s.decision === "changes_requested");
        const newState = anyChanges ? "changes_requested" : "approved";
        set((s) => ({
          approvals: [...snapshots, ...s.approvals],
          reviews: s.reviews.map((r) => (r.id === round.id ? { ...r, state: newState } : r)),
          deliverables: s.deliverables.map((d) => {
            const snap = snapshots.find((ap) => ap.deliverableId === d.id);
            if (!snap) return d;
            return {
              ...d,
              state: snap.decision === "approved" ? "approved" : "changes_requested",
            };
          }),
          projects: s.projects.map((p) => {
            if (p.id !== round.projectId) return p;
            if (!anyChanges) return { ...p, state: "final_review" as ProjectState };
            return { ...p, revisionUsed: p.revisionUsed + 1 };
          }),
          activity: [
            activity(
              round.projectId,
              approverName,
              "review.decision_recorded",
              anyChanges ? "Requested changes" : "Approved the round",
            ),
            ...s.activity,
          ],
        }));
        return null;
      },

      verifyFeedback: (id, actor) => {
        set((s) => ({
          feedback: s.feedback.map((f) =>
            f.id === id
              ? {
                  ...f,
                  status: f.status === "proposed" ? "verified" : f.status,
                  verifiedBy: actor,
                  verifiedAt: nowIso(),
                }
              : f,
          ),
        }));
      },

      rejectFeedback: (id, reason, actor) => {
        set((s) => ({
          feedback: s.feedback.map((f) =>
            f.id === id
              ? {
                  ...f,
                  status: "rejected",
                  rejectReason: reason,
                  verifiedBy: actor,
                  verifiedAt: nowIso(),
                }
              : f,
          ),
          activity: [
            activity(s.feedback.find((f) => f.id === id)?.projectId ?? null, actor, "feedback.rejected", reason),
            ...s.activity,
          ],
        }));
      },

      deferFeedback: (id, actor) => {
        set((s) => ({
          feedback: s.feedback.map((f) =>
            f.id === id ? { ...f, status: "deferred", verifiedBy: actor, verifiedAt: nowIso() } : f,
          ),
        }));
      },

      verifyAllClear: (roundId, actor) => {
        set((s) => ({
          feedback: s.feedback.map((f) =>
            f.reviewRoundId === roundId &&
            f.status === "proposed" &&
            f.conflictType === "none" &&
            f.type !== "request"
              ? { ...f, status: "verified", verifiedBy: actor, verifiedAt: nowIso() }
              : f,
          ),
        }));
      },

      compileChangeSet: (roundId, actor) => {
        const s = get();
        const round = s.reviews.find((r) => r.id === roundId);
        if (!round) return null;
        const verified = s.feedback.filter(
          (f) =>
            f.reviewRoundId === roundId &&
            (f.status === "verified" || f.status === "proposed") &&
            f.type !== "praise" &&
            f.type !== "approval_signal",
        );
        const existing = s.changeSets.find(
          (c) => c.reviewRoundId === roundId && c.state === "draft",
        );
        const changeSetId = existing?.id ?? uid("cs");
        const items: ChangeSetItem[] = verified.map((f, i) => ({
          id: uid("csi"),
          changeSetId,
          displayOrder: i + 1,
          actionText: f.summary,
          clientSafeSummary:
            f.scopeSignal === "potential_change"
              ? f.summary + " (needs a scope conversation)"
              : f.summary,
          targetDeliverableId: f.deliverableId,
          acceptanceCriterion:
            f.type === "request"
              ? `Visible in the next review rendition: ${f.summary}`
              : "Acknowledged in the next review note.",
          scopeStatus:
            f.scopeSignal === "potential_change" ? "change_order_candidate" : "included",
          ownerName: "Avery Lin",
          sourceFeedbackIds: [f.id],
          resolution: "pending",
          resolutionNote: null,
        }));
        const praise = s.feedback.filter(
          (f) => f.reviewRoundId === roundId && f.type === "praise",
        );
        const approvals = s.feedback.filter(
          (f) => f.reviewRoundId === roundId && f.type === "approval_signal",
        );
        const summaryParts = [
          ...approvals.map((f) => f.summary),
          ...items
            .filter((i) => i.scopeStatus === "included")
            .map((i) => i.clientSafeSummary),
        ];
        const clientSafeSummary = summaryParts.join(" ");
        set((state) => ({
          changeSets: existing
            ? state.changeSets.map((c) =>
                c.id === changeSetId
                  ? { ...c, clientSafeSummary, createdAt: nowIso() }
                  : c,
              )
            : [
                {
                  id: changeSetId,
                  projectId: round.projectId,
                  reviewRoundId: roundId,
                  versionNumber: 1,
                  state: "draft",
                  clientSafeSummary,
                  confirmedBy: null,
                  confirmedAt: null,
                  createdAt: nowIso(),
                },
                ...state.changeSets,
              ],
          changeItems: [
            ...items,
            ...state.changeItems.filter((i) => i.changeSetId !== changeSetId),
          ],
          feedback: state.feedback.map((f) =>
            verified.some((v) => v.id === f.id) ||
            praise.some((p) => p.id === f.id) ||
            approvals.some((a) => a.id === f.id)
              ? {
                  ...f,
                  status: f.type === "praise" ? "answered" : "included_in_change_set",
                  verifiedBy: f.verifiedBy ?? actor,
                  verifiedAt: f.verifiedAt ?? nowIso(),
                }
              : f,
          ),
          activity: [
            activity(round.projectId, actor, "change_set.drafted", "Compiled a draft change set"),
            ...state.activity,
          ],
        }));
        return changeSetId;
      },

      updateChangeItem: (id, patch) => {
        set((s) => ({
          changeItems: s.changeItems.map((i) => (i.id === id ? { ...i, ...patch } : i)),
        }));
      },

      confirmChangeSet: (id, actor) => {
        const cs = get().changeSets.find((c) => c.id === id);
        if (!cs) return;
        set((s) => ({
          changeSets: s.changeSets.map((c) =>
            c.id === id
              ? {
                  ...c,
                  state: "internally_confirmed",
                  confirmedBy: actor,
                  confirmedAt: nowIso(),
                }
              : c,
          ),
          activity: [
            activity(cs.projectId, actor, "change_set.internally_confirmed", "Confirmed the change set"),
            ...s.activity,
          ],
        }));
      },

      createProjectFromIntake: ({ clientName, projectName, projectType, targetDate, contract }) => {
        const clientId = uid("client");
        const projectId = uid("project");
        const contractId = uid("contract");
        const contactId = uid("contact");
        set((s) => ({
          clients: [
            {
              id: clientId,
              name: clientName,
              description: "",
              industry: projectType,
              status: "active",
              createdAt: nowIso(),
            },
            ...s.clients,
          ],
          contacts: [
            {
              id: contactId,
              clientId,
              name: contract.approverName || "Client approver",
              email: "",
              title: "Approver",
              isDefaultApprover: true,
            },
            ...s.contacts,
          ],
          projects: [
            {
              id: projectId,
              clientId,
              name: projectName,
              projectType,
              state: "draft",
              leadName: s.workspace.leadName,
              targetDate,
              revisionAllowance: contract.revisionAllowance,
              revisionUsed: 0,
              currentContractId: contractId,
              createdAt: nowIso(),
            },
            ...s.projects,
          ],
          contracts: [
            {
              ...contract,
              id: contractId,
              projectId,
              versionNumber: 1,
              status: "draft",
              approvedBy: null,
              approvedAt: null,
              createdAt: nowIso(),
            },
            ...s.contracts,
          ],
          deliverables: [
            ...contract.deliverablesSummary.map((name) => ({
              id: uid("del"),
              projectId,
              name,
              category: "Deliverable",
              description: name,
              scopeText: name,
              requirements: "PNG, JPG, WebP, or PDF review rendition.",
              state: "planned" as const,
              ownerName: s.workspace.leadName,
              dueDate: targetDate,
              isRequired: true,
              externalDependency: "none" as const,
              externalNote: null,
              currentVersionId: null,
            })),
            ...s.deliverables,
          ],
          activity: [
            activity(projectId, s.workspace.leadName, "project.created", `Created ${projectName}`),
            ...s.activity,
          ],
        }));
        return projectId;
      },

      approveContract: (contractId, actor) => {
        const contract = get().contracts.find((c) => c.id === contractId);
        if (!contract) return;
        set((s) => ({
          contracts: s.contracts.map((c) =>
            c.id === contractId
              ? { ...c, status: "approved", approvedBy: actor, approvedAt: nowIso() }
              : c,
          ),
          projects: s.projects.map((p) =>
            p.id === contract.projectId && p.state === "draft"
              ? { ...p, state: "aligned" }
              : p,
          ),
          activity: [
            activity(contract.projectId, actor, "contract.approved", "Approved the Creative Contract"),
            ...s.activity,
          ],
        }));
      },

      publishReview: ({ projectId, title, contextText, versionIds, approverContactId, dueAt }) => {
        const roundId = uid("round");
        const token = uid("r");
        const versions = get().versions.filter((v) => versionIds.includes(v.id));
        set((s) => ({
          reviews: [
            {
              id: roundId,
              projectId,
              roundNumber: s.reviews.filter((r) => r.projectId === projectId).length + 1,
              title,
              contextText,
              state: "published",
              dueAt,
              publishedAt: nowIso(),
              approverContactId,
              guestToken: token,
              cancelledReason: null,
            },
            ...s.reviews,
          ],
          reviewItems: [
            ...versions.map((v, i) => ({
              id: uid("ri"),
              reviewRoundId: roundId,
              deliverableId: v.deliverableId,
              assetVersionId: v.id,
              displayOrder: i + 1,
              promptText: "",
            })),
            ...s.reviewItems,
          ],
          deliverables: s.deliverables.map((d) =>
            versions.some((v) => v.deliverableId === d.id)
              ? { ...d, state: "in_review" }
              : d,
          ),
          projects: s.projects.map((p) =>
            p.id === projectId && (p.state === "aligned" || p.state === "draft")
              ? { ...p, state: "active" }
              : p,
          ),
          activity: [
            activity(projectId, s.workspace.leadName, "review.published", `Published ${title}`),
            ...s.activity,
          ],
        }));
        return token;
      },

      importPastedFeedback: ({ roundId, text, sender, channel }) => {
        const round = get().reviews.find((r) => r.id === roundId);
        if (!round) return;
        const source: FeedbackSource = {
          id: uid("src"),
          projectId: round.projectId,
          reviewRoundId: roundId,
          sourceType: "pasted_text",
          authorName: sender,
          authorRole: "imported",
          assetVersionId: null,
          pageNumber: null,
          x: null,
          y: null,
          rawText: text.trim(),
          sourceLabel: `Imported from ${channel}`,
          createdAt: nowIso(),
        };
        set((s) => ({ sources: [...s.sources, source] }));
      },

      applyExtractedFeedback: (roundId, items) => {
        set((s) => ({
          feedback: [
            ...items.map((item) => ({
              ...item,
              id: item.id || uid("fb"),
              reviewRoundId: roundId,
            })),
            ...s.feedback,
          ],
        }));
      },

      addVersion: ({ deliverableId, name, imageUrl, note }) => {
        const del = get().deliverables.find((d) => d.id === deliverableId);
        if (!del) return "";
        const n = get().versions.filter((v) => v.deliverableId === deliverableId).length + 1;
        const id = uid("ver");
        set((s) => ({
          versions: [
            {
              id,
              deliverableId,
              projectId: del.projectId,
              versionNumber: n,
              name,
              imageUrl,
              mimeType: "image/jpeg",
              width: 1200,
              height: 1200,
              byteSize: 0,
              checksum: id.slice(-8),
              createdAt: nowIso(),
              note,
            },
            ...s.versions,
          ],
          deliverables: s.deliverables.map((d) =>
            d.id === deliverableId
              ? {
                  ...d,
                  currentVersionId: id,
                  state: d.state === "planned" ? "in_production" : d.state,
                }
              : d,
          ),
        }));
        return id;
      },

      createDeliverable: ({ projectId, name, category, description }) => {
        const id = uid("del");
        set((s) => ({
          deliverables: [
            {
              id,
              projectId,
              name,
              category,
              description,
              scopeText: description,
              requirements: "PNG, JPG, or WebP review rendition.",
              state: "planned",
              ownerName: s.workspace.leadName,
              dueDate: s.projects.find((p) => p.id === projectId)?.targetDate ?? "",
              isRequired: true,
              externalDependency: "none",
              externalNote: null,
              currentVersionId: null,
            },
            ...s.deliverables,
          ],
        }));
        return id;
      },

      acceptDecision: (id, actor) => {
        set((s) => ({
          decisions: s.decisions.map((d) =>
            d.id === id
              ? { ...d, state: "accepted", confirmedBy: actor, confirmedAt: nowIso() }
              : d,
          ),
        }));
      },

      proposeDecision: ({ projectId, statement, rationale, scope }) => {
        const project = get().projects.find((p) => p.id === projectId);
        if (!project) return;
        set((s) => ({
          decisions: [
            {
              id: uid("dec"),
              clientId: project.clientId,
              projectId,
              deliverableId: null,
              statement,
              rationale,
              state: "proposed",
              scope,
              confirmedBy: null,
              confirmedAt: null,
              sourceLabel: "Manual",
              supersedesId: null,
            },
            ...s.decisions,
          ],
        }));
      },

      publishDelivery: (projectId, actor) => {
        const required = get().deliverables.filter((d) => d.projectId === projectId && d.isRequired);
        const unapproved = required.filter((d) => d.state !== "approved" && d.state !== "delivered");
        if (unapproved.length) return null;
        const id = uid("man");
        const token = uid("d");
        const items = required
          .map((d) => {
            const ver = get().versions.find((v) => v.id === d.currentVersionId);
            const ap = get().approvals.find((a) => a.deliverableId === d.id);
            if (!ver || !ap) return null;
            return {
              id: uid("di"),
              manifestId: id,
              deliverableId: d.id,
              assetVersionId: ver.id,
              fileLabel: ver.name,
              usageNotes: "Approved version.",
            };
          })
          .filter(Boolean);
        set((s) => ({
          manifests: [
            {
              id,
              projectId,
              versionNumber: s.manifests.filter((m) => m.projectId === projectId).length + 1,
              state: "published",
              publishedAt: nowIso(),
              acknowledgedAt: null,
              guestToken: token,
              notes: "Final approved deliverables.",
            },
            ...s.manifests,
          ],
          deliveryItems: [...(items as Store["deliveryItems"]), ...s.deliveryItems],
          projects: s.projects.map((p) => (p.id === projectId ? { ...p, state: "delivered" } : p)),
          deliverables: s.deliverables.map((d) =>
            d.projectId === projectId && d.state === "approved" ? { ...d, state: "delivered" } : d,
          ),
          activity: [
            activity(projectId, actor, "delivery_manifest.published", "Published delivery"),
            ...s.activity,
          ],
        }));
        return token;
      },

      acknowledgeDelivery: (token) => {
        set((s) => ({
          manifests: s.manifests.map((m) =>
            m.guestToken === token ? { ...m, acknowledgedAt: nowIso() } : m,
          ),
        }));
      },

      markChangeResolution: (itemId, resolution, note) => {
        set((s) => ({
          changeItems: s.changeItems.map((i) =>
            i.id === itemId ? { ...i, resolution, resolutionNote: note } : i,
          ),
        }));
      },
    }),
    {
      name: "direction-room-v1",
      skipHydration: true,
      version: SEED_VERSION,
      migrate: () => createSeed(),
      partialize: (s) => {
        const { hydrated: _h, ...rest } = s;
        void _h;
        return rest as AppData;
      },
    },
  ),
);

export function selectNeeds(s: AppData): NeedItem[] {
  const needs: NeedItem[] = [];
  for (const round of s.reviews) {
    const project = s.projects.find((p) => p.id === round.projectId);
    const client = s.clients.find((c) => c.id === project?.clientId);
    const proposed = s.feedback.filter((f) => f.reviewRoundId === round.id && f.status === "proposed");
    const draftCs = s.changeSets.find((c) => c.reviewRoundId === round.id && c.state === "draft");
    const confirmed = s.changeSets.find(
      (c) => c.reviewRoundId === round.id && c.state === "internally_confirmed",
    );
    if (proposed.length) {
      needs.push({
        id: `verify-${round.id}`,
        kind: "verify",
        title: `Verify ${proposed.length} feedback item${proposed.length === 1 ? "" : "s"}`,
        detail: `${client?.name ?? "Client"} · ${round.title}`,
        href: `/app/projects/${round.projectId}/reviews/${round.id}/synthesis`,
        projectId: round.projectId,
        tone: proposed.some((f) => f.conflictType !== "none") ? "warn" : "info",
      });
    }
    if (!proposed.length && !confirmed && !draftCs && s.feedback.some((f) => f.reviewRoundId === round.id)) {
      needs.push({
        id: `cs-${round.id}`,
        kind: "changeset",
        title: "Build the change set",
        detail: `${client?.name ?? "Client"} · ${round.title}`,
        href: `/app/projects/${round.projectId}/reviews/${round.id}/changeset`,
        projectId: round.projectId,
        tone: "info",
      });
    }
    if (draftCs) {
      needs.push({
        id: `confirm-${draftCs.id}`,
        kind: "changeset",
        title: "Confirm the change set",
        detail: `${client?.name ?? "Client"} · ${round.title}`,
        href: `/app/projects/${round.projectId}/reviews/${round.id}/changeset`,
        projectId: round.projectId,
        tone: "warn",
      });
    }
    if (round.state === "awaiting_decision") {
      needs.push({
        id: `dec-${round.id}`,
        kind: "decision",
        title: "Waiting on client decision",
        detail: `${client?.name ?? "Client"} · ${round.title}`,
        href: `/app/projects/${round.projectId}/reviews/${round.id}`,
        projectId: round.projectId,
        tone: "info",
      });
    }
  }
  for (const p of s.projects) {
    if (p.state === "aligned") {
      const client = s.clients.find((c) => c.id === p.clientId);
      needs.push({
        id: `rev-${p.id}`,
        kind: "review",
        title: "Prepare the first review",
        detail: `${client?.name ?? "Client"} · ${p.name}`,
        href: `/app/projects/${p.id}/reviews`,
        projectId: p.id,
        tone: "info",
      });
    }
    if (p.state === "final_review") {
      const client = s.clients.find((c) => c.id === p.clientId);
      needs.push({
        id: `del-${p.id}`,
        kind: "delivery",
        title: "Publish the delivery manifest",
        detail: `${client?.name ?? "Client"} · ${p.name}`,
        href: `/app/projects/${p.id}/delivery`,
        projectId: p.id,
        tone: "ok",
      });
    }
  }
  return needs;
}

