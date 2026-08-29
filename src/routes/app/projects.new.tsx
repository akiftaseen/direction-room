import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { extractContract } from "@/lib/ai";
import { useAppStore } from "@/lib/store";
import type { CreativeContract } from "@/lib/types";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/new")({ component: NewProject });

const prompts = [
  { key: "what", label: "What is being created, and why?" },
  { key: "who", label: "Who is it for?" },
  { key: "deliver", label: "What must be delivered?" },
  { key: "feel", label: "What should it feel like?" },
  { key: "avoid", label: "What must be preserved or avoided?" },
  { key: "approver", label: "Who gives final approval?" },
  { key: "rounds", label: "How many revision rounds are included?" },
];

function NewProject() {
  const navigate = useNavigate();
  const create = useAppStore((s) => s.createProjectFromIntake);
  const approve = useAppStore((s) => s.approveContract);
  const lead = useAppStore((s) => s.workspace.leadName);
  const [step, setStep] = useState(1);
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("Brand identity");
  const [targetDate, setTargetDate] = useState("2026-10-01");
  const [mode, setMode] = useState<"paste" | "form">("paste");
  const [brief, setBrief] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState<Omit<
    CreativeContract,
    "id" | "projectId" | "versionNumber" | "status" | "approvedBy" | "approvedAt" | "createdAt"
  > | null>(null);

  async function extract() {
    const text =
      mode === "paste"
        ? brief
        : prompts.map((p) => `${p.label}\n${answers[p.key] ?? ""}`).join("\n\n");
    if (!text.trim()) {
      toast.error("Add a brief first.");
      return;
    }
    setBusy(true);
    try {
      const result = await extractContract({ data: { brief: text } });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      setDraft(result.contract);
      setStep(3);
    } finally {
      setBusy(false);
    }
  }

  function save(andApprove: boolean) {
    if (!draft || !clientName.trim() || !projectName.trim()) {
      toast.error("Client, project name, and contract are required.");
      return;
    }
    const projectId = create({
      clientName,
      projectName,
      projectType,
      targetDate,
      contract: draft,
    });
    if (andApprove) {
      const contractId = useAppStore.getState().projects.find((p) => p.id === projectId)
        ?.currentContractId;
      if (contractId) approve(contractId, lead);
    }
    toast.success(andApprove ? "Project aligned" : "Draft saved");
    void navigate({ to: "/app/projects/$projectId", params: { projectId } });
  }

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-xs tracking-wide text-muted uppercase">Step {step} of 4</p>
      <h1 className="mt-1 font-display text-3xl tracking-tight">New project</h1>

      {step === 1 ? (
        <div className="mt-8 space-y-4">
          <Field label="Client" value={clientName} onChange={setClientName} />
          <Field label="Project name" value={projectName} onChange={setProjectName} />
          <Field label="Type" value={projectType} onChange={setProjectType} />
          <div className="space-y-1.5">
            <Label>Target completion</Label>
            <Input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
          </div>
          <Button onClick={() => setStep(2)} disabled={!clientName || !projectName}>
            Continue
          </Button>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8">
          <div className="flex gap-2">
            <Button size="sm" variant={mode === "paste" ? "primary" : "ghost"} onClick={() => setMode("paste")}>
              Paste brief
            </Button>
            <Button size="sm" variant={mode === "form" ? "primary" : "ghost"} onClick={() => setMode("form")}>
              Seven prompts
            </Button>
          </div>
          {mode === "paste" ? (
            <div>
              <Textarea
                className="mt-4 min-h-48"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Paste the client brief…"
              />
              <button
                type="button"
                className="mt-2 text-xs text-muted hover:text-ink"
                onClick={() =>
                  setBrief(
                    "Kumo Coffee brand launch. Quiet neighborhood coffee and kitchen opening this autumn. Audience: design-aware locals 20s–40s who want a calm place to sit. Feel: quiet, warm, precise, contemporary — morning light on linen. Deliver: primary identity, launch poster, five social templates, menu cover. Avoid: generic Japanese clichés, red-sun motif, anime, rustic chalkboard cafes, bright red. Approver: Maya Chen, marketing lead. Two revision rounds included. Motion and interior signage are out of scope.",
                  )
                }
              >
                Load a sample brief
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {prompts.map((p) => (
                <div key={p.key} className="space-y-1.5">
                  <Label>{p.label}</Label>
                  <Textarea
                    value={answers[p.key] ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [p.key]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex gap-2">
            <Button variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button disabled={busy} onClick={() => void extract()}>
              {busy ? "Extracting…" : "Extract contract"}
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 && draft ? (
        <div className="mt-8 space-y-3">
          <p className="text-sm text-muted">
            Edit anything that looks invented. Drafts do not become project memory until you approve.
          </p>
          {(
            [
              ["objective", "Objective"],
              ["audience", "Audience"],
              ["thesis", "Thesis"],
              ["approverName", "Approver"],
            ] as const
          ).map(([k, label]) => (
            <div key={k} className="space-y-1.5">
              <Label>{label}</Label>
              <Textarea
                value={draft[k]}
                onChange={(e) => setDraft({ ...draft, [k]: e.target.value })}
              />
            </div>
          ))}
          <ListEditor
            label="Deliverables"
            items={draft.deliverablesSummary}
            onChange={(deliverablesSummary) => setDraft({ ...draft, deliverablesSummary })}
          />
          <ListEditor
            label="Must avoid"
            items={draft.avoid}
            onChange={(avoid) => setDraft({ ...draft, avoid })}
          />
          <ListEditor
            label="Missing"
            items={draft.missing}
            onChange={(missing) => setDraft({ ...draft, missing })}
          />
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button variant="secondary" onClick={() => setStep(4)}>
              Review & confirm
            </Button>
          </div>
        </div>
      ) : null}

      {step === 4 && draft ? (
        <div className="mt-8 space-y-4">
          <article className="rounded-lg bg-surface p-5 shadow-border">
            <h2 className="font-display text-xl tracking-tight">{projectName}</h2>
            <p className="mt-2 text-sm leading-relaxed">{draft.objective}</p>
            <p className="mt-3 text-sm text-muted">{draft.thesis}</p>
          </article>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" onClick={() => setStep(3)}>
              Back
            </Button>
            <Button variant="secondary" onClick={() => save(false)}>
              Save as draft
            </Button>
            <Button onClick={() => save(true)}>Approve contract v1</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Textarea
        value={items.join("\n")}
        onChange={(e) =>
          onChange(
            e.target.value
              .split("\n")
              .map((l) => l.trim())
              .filter(Boolean),
          )
        }
      />
    </div>
  );
}
