import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeedbackBadge } from "@/components/status-badge";
import { useAppStore } from "@/lib/store";
import { synthesizeFeedback } from "@/lib/ai";
import type { FeedbackItem } from "@/lib/types";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/app/projects/$projectId/reviews/$roundId/synthesis")({
  component: SynthesisPage,
});

function SynthesisPage() {
  const { projectId, roundId } = Route.useParams();
  const items = useAppStore((s) => s.feedback.filter((f) => f.reviewRoundId === roundId));
  const sources = useAppStore((s) => s.sources.filter((x) => x.reviewRoundId === roundId));
  const versions = useAppStore((s) => s.versions);
  const decisions = useAppStore((s) => s.decisions.filter((d) => d.projectId === projectId && d.state === "accepted"));
  const contract = useAppStore((s) => {
    const p = s.projects.find((x) => x.id === projectId);
    return s.contracts.find((c) => c.id === p?.currentContractId);
  });
  const verify = useAppStore((s) => s.verifyFeedback);
  const reject = useAppStore((s) => s.rejectFeedback);
  const defer = useAppStore((s) => s.deferFeedback);
  const apply = useAppStore((s) => s.applyExtractedFeedback);
  const lead = useAppStore((s) => s.workspace.leadName);
  const [busy, setBusy] = useState(false);

  const groups = {
    requests: items.filter((f) => f.type === "request" && f.conflictType === "none"),
    questions: items.filter((f) => f.type === "question" || f.conflictType === "ambiguous"),
    conflicts: items.filter(
      (f) =>
        f.conflictType === "inter_feedback" ||
        f.conflictType === "decision_conflict" ||
        f.conflictType === "brief_conflict",
    ),
    scope: items.filter((f) => f.conflictType === "potential_scope" || f.scopeSignal === "potential_change"),
    praise: items.filter((f) => f.type === "praise" || f.type === "approval_signal"),
  };

  async function rerun() {
    setBusy(true);
    try {
      const result = await synthesizeFeedback({
        data: {
          sources: sources.map((s) => ({
            id: s.id,
            author: s.authorName,
            text: s.rawText,
            target: versions.find((v) => v.id === s.assetVersionId)?.name ?? null,
          })),
          contract: contract
            ? {
                thesis: contract.thesis,
                avoid: contract.avoid,
                inScope: contract.inScope,
                outOfScope: contract.outOfScope,
              }
            : null,
          decisions: decisions.map((d) => d.statement),
        },
      });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      apply(roundId, result.items as FeedbackItem[]);
      toast.success("Synthesis updated. Human commit still required.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-xl text-sm text-muted">
          AI grouped the raw comments. This is a draft — not the client’s verbatim words.
          Verify, reject, or defer before anything enters a Change Set.
        </p>
        <Button variant="secondary" size="sm" disabled={busy} onClick={() => void rerun()}>
          {busy ? "Synthesizing…" : "Re-run synthesis"}
        </Button>
      </div>

      <Group title="Clear requested changes" items={groups.requests} versions={versions} sources={sources} lead={lead} verify={verify} reject={reject} defer={defer} />
      <Group title="Needs interpretation" items={groups.questions} versions={versions} sources={sources} lead={lead} verify={verify} reject={reject} defer={defer} />
      <Group title="Conflicts" items={groups.conflicts} versions={versions} sources={sources} lead={lead} verify={verify} reject={reject} defer={defer} />
      <Group title="Potential scope changes" items={groups.scope} versions={versions} sources={sources} lead={lead} verify={verify} reject={reject} defer={defer} />
      <Group title="Approvals and praise" items={groups.praise} versions={versions} sources={sources} lead={lead} verify={verify} reject={reject} defer={defer} />

      <div className="rounded-lg bg-pine px-5 py-4 text-pine-fg">
        <p className="font-display text-lg tracking-tight">Ready to compile?</p>
        <p className="mt-1 text-sm text-pine-fg/80">
          Verified items become the production brief for the next version.
        </p>
        <Button className="mt-3 bg-pine-fg text-pine hover:bg-surface" asChild>
          <Link
            to="/app/projects/$projectId/reviews/$roundId/changeset"
            params={{ projectId, roundId }}
          >
            Build change set
          </Link>
        </Button>
      </div>
    </div>
  );
}

function Group({
  title,
  items,
  versions,
  sources,
  lead,
  verify,
  reject,
  defer,
}: {
  title: string;
  items: FeedbackItem[];
  versions: { id: string; name: string }[];
  sources: { id: string; rawText: string; authorName: string }[];
  lead: string;
  verify: (id: string, actor: string) => void;
  reject: (id: string, reason: string, actor: string) => void;
  defer: (id: string, actor: string) => void;
}) {
  if (!items.length) return null;
  return (
    <section>
      <h3 className="font-display text-xl tracking-tight">{title}</h3>
      <ul className="mt-3 space-y-3">
        {items.map((f) => {
          const ver = versions.find((v) => v.id === f.assetVersionId);
          return (
            <li key={f.id} className="rounded-lg bg-surface p-4 shadow-border">
              <div className="flex flex-wrap items-center gap-2">
                <FeedbackBadge status={f.status} />
                {f.conflictType !== "none" ? (
                  <Badge tone={f.conflictType === "potential_scope" ? "scope" : "warn"}>
                    {f.conflictType.replaceAll("_", " ")}
                  </Badge>
                ) : null}
                {f.scopeSignal === "potential_change" ? (
                  <Badge tone="scope">Internal scope flag</Badge>
                ) : null}
                <span className="text-xs text-faint">
                  {Math.round(f.confidence * 100)}% confidence
                </span>
              </div>
              <p className="mt-2 text-sm font-medium">{f.summary}</p>
              {f.clarifyingQuestion ? (
                <p className="mt-2 rounded-md bg-warn-bg px-3 py-2 text-sm text-warn">
                  Ask the client: {f.clarifyingQuestion}
                </p>
              ) : null}
              <div className="mt-3 space-y-1">
                {f.evidence.map((e) => {
                  const src = sources.find((s) => s.id === e.sourceId);
                  return (
                    <p key={e.sourceId + e.excerpt} className="text-xs text-muted">
                      <span className="font-medium text-ink-soft">{src?.authorName ?? "Source"}:</span>{" "}
                      “{e.excerpt}”
                    </p>
                  );
                })}
              </div>
              {ver ? <p className="mt-2 text-xs text-faint">Target · {ver.name}</p> : null}
              {f.status === "proposed" ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button size="sm" onClick={() => verify(f.id, lead)}>
                    Verify
                  </Button>
                  <Button size="sm" variant="secondary" onClick={() => defer(f.id, lead)}>
                    Defer
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => reject(f.id, "Not taking this forward", lead)}
                  >
                    Reject
                  </Button>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
