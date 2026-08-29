import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/format";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/projects/")({ component: ProjectsPage });

function ProjectsPage() {
  const projects = useAppStore((s) => s.projects);
  const clients = useAppStore((s) => s.clients);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-wide text-muted uppercase">Work</p>
          <h1 className="mt-1 font-display text-3xl tracking-tight">Projects</h1>
        </div>
        <Button asChild>
          <Link to="/app/projects/new">New project</Link>
        </Button>
      </div>
      <ul className="mt-8 divide-y divide-line overflow-hidden rounded-lg bg-surface shadow-border">
        {projects.map((p) => {
          const client = clients.find((c) => c.id === p.clientId);
          return (
            <li key={p.id}>
              <Link
                to="/app/projects/$projectId"
                params={{ projectId: p.id }}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 hover:bg-surface-2"
              >
                <div>
                  <p className="text-xs text-muted">{client?.name}</p>
                  <p className="font-medium">{p.name}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{formatDate(p.targetDate)}</span>
                  <ProjectBadge state={p.state} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
