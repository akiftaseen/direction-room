import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/direction")({
  component: DirectionPage,
});

function DirectionPage() {
  const { projectId } = Route.useParams();
  const project = useAppStore((s) => s.projects.find((p) => p.id === projectId));
  const contract = useAppStore((s) =>
    s.contracts.find((c) => c.id === project?.currentContractId),
  );
  const approve = useAppStore((s) => s.approveContract);
  const lead = useAppStore((s) => s.workspace.leadName);

  if (!contract) {
    return <p className="text-muted">No Creative Contract yet.</p>;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs text-muted">Creative Contract · v{contract.versionNumber}</p>
          <h2 className="mt-1 font-display text-2xl tracking-tight">Agreed project truth</h2>
        </div>
        {contract.status === "draft" ? (
          <Button
            onClick={() => {
              approve(contract.id, lead);
              toast.success("Contract approved");
            }}
          >
            Approve v{contract.versionNumber}
          </Button>
        ) : (
          <Badge tone="ok">
            Approved {contract.approvedAt ? formatDateTime(contract.approvedAt) : ""}
          </Badge>
        )}
      </div>

      <Section title="Objective" body={contract.objective} source="Intake brief" />
      <Section title="Audience" body={contract.audience} source="Intake brief" />
      <Section title="Creative thesis" body={contract.thesis} source="Intake brief" />

      <List title="Principles" items={contract.principles} />
      <List title="Must avoid" items={contract.avoid} />
      <List title="Deliverables" items={contract.deliverablesSummary} />
      <List title="In scope" items={contract.inScope} />
      <List title="Out of scope" items={contract.outOfScope} />
      <List title="Constraints" items={contract.constraints} />
      <List title="Supplied inputs" items={contract.inputs} />
      {contract.missing.length ? (
        <List title="Missing from the client" items={contract.missing} />
      ) : null}

      <div className="mt-8 rounded-lg bg-surface p-5 shadow-border">
        <p className="text-xs text-muted">Process</p>
        <p className="mt-2 text-sm">
          Final approver {contract.approverName}. {contract.revisionAllowance} revision
          rounds included.
        </p>
      </div>
    </div>
  );
}

function Section({ title, body, source }: { title: string; body: string; source: string }) {
  return (
    <section className="mt-8">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl tracking-tight">{title}</h3>
        <span className="text-xs text-faint">{source}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-8">
      <h3 className="font-display text-xl tracking-tight">{title}</h3>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-ink-soft">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-pine" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
