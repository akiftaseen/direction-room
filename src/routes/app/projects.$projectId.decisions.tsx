import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/decisions")({
  component: DecisionsPage,
});

function DecisionsPage() {
  const { projectId } = Route.useParams();
  const decisions = useAppStore((s) => s.decisions.filter((d) => d.projectId === projectId));
  const accept = useAppStore((s) => s.acceptDecision);
  const propose = useAppStore((s) => s.proposeDecision);
  const lead = useAppStore((s) => s.workspace.leadName);
  const [statement, setStatement] = useState("");
  const [rationale, setRationale] = useState("");

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <ul className="space-y-3">
        {decisions.map((d) => (
          <li key={d.id} className="rounded-lg bg-surface p-4 shadow-border">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                tone={
                  d.state === "accepted" ? "ok" : d.state === "rejected" ? "danger" : "warn"
                }
              >
                {d.state}
              </Badge>
              <Badge>{d.scope}</Badge>
            </div>
            <p className="mt-2 text-sm font-medium">{d.statement}</p>
            <p className="mt-1 text-sm text-muted">{d.rationale}</p>
            <p className="mt-2 text-xs text-faint">
              {d.sourceLabel}
              {d.confirmedAt ? ` · ${formatDate(d.confirmedAt)}` : ""}
            </p>
            {d.state === "proposed" ? (
              <Button className="mt-3" size="sm" onClick={() => accept(d.id, lead)}>
                Accept
              </Button>
            ) : null}
          </li>
        ))}
      </ul>
      <aside className="rounded-lg bg-surface p-5 shadow-border">
        <h3 className="font-display text-xl tracking-tight">Record a decision</h3>
        <p className="mt-1 text-sm text-muted">Human confirmation required. History is never rewritten.</p>
        <div className="mt-4 space-y-3">
          <div className="space-y-1.5">
            <Label>Statement</Label>
            <Input value={statement} onChange={(e) => setStatement(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label>Rationale</Label>
            <Textarea value={rationale} onChange={(e) => setRationale(e.target.value)} />
          </div>
          <Button
            disabled={!statement.trim()}
            onClick={() => {
              propose({ projectId, statement, rationale, scope: "project" });
              toast.success("Proposed. Accept to commit.");
              setStatement("");
              setRationale("");
            }}
          >
            Propose
          </Button>
        </div>
      </aside>
    </div>
  );
}
