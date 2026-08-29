import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/decisions")({ component: DecisionsIndex });

function DecisionsPage() {
  const decisions = useAppStore((s) => s.decisions);
  const projects = useAppStore((s) => s.projects);
  const clients = useAppStore((s) => s.clients);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-3xl tracking-tight">Decisions</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        What did we decide, why, and does it still apply?
      </p>
      <ul className="mt-6 space-y-2">
        {decisions.map((d) => {
          const project = projects.find((p) => p.id === d.projectId);
          const client = clients.find((c) => c.id === d.clientId);
          return (
            <li key={d.id} className="rounded-lg bg-surface p-4 shadow-border">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={d.state === "accepted" ? "ok" : "neutral"}>{d.state}</Badge>
                <span className="text-xs text-muted">
                  {client?.name}
                  {project ? (
                    <>
                      {" · "}
                      <Link
                        to="/app/projects/$projectId/decisions"
                        params={{ projectId: d.projectId }}
                        className="hover:text-ink"
                      >
                        {project.name}
                      </Link>
                    </>
                  ) : null}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium">{d.statement}</p>
              <p className="mt-1 text-sm text-muted">{d.rationale}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DecisionsIndex() {
  return <DecisionsPage />;
}
