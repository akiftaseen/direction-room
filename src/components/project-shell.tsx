import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { ProjectBadge } from "@/components/status-badge";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

const tabs = [
  { suffix: "", label: "Overview" },
  { suffix: "/direction", label: "Direction" },
  { suffix: "/deliverables", label: "Deliverables" },
  { suffix: "/reviews", label: "Reviews" },
  { suffix: "/decisions", label: "Decisions" },
  { suffix: "/delivery", label: "Delivery" },
];

export function ProjectShell({
  projectId,
  children,
}: {
  projectId: string;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const project = useAppStore((s) => s.projects.find((p) => p.id === projectId));
  const client = useAppStore((s) =>
    s.clients.find((c) => c.id === project?.clientId),
  );
  if (!project || !client) {
    return <p className="text-muted">Project not found.</p>;
  }
  const base = `/app/projects/${projectId}`;

  return (
    <div>
      <Link
        to="/app/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft className="size-3.5" />
        Projects
      </Link>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-wide text-muted uppercase">{client.name}</p>
          <h1 className="mt-1 font-display text-3xl tracking-tight">{project.name}</h1>
        </div>
        <ProjectBadge state={project.state} />
      </div>
      <div className="mt-6 -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        <nav className="flex min-w-max gap-1 border-b border-line">
          {tabs.map((t) => {
            const href = `${base}${t.suffix}`;
            const active =
              t.suffix === ""
                ? pathname === base || pathname === base + "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={t.label}
                to={href}
                className={cn(
                  "relative h-11 px-3 text-sm transition-colors duration-150",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {t.label}
                {active ? (
                  <span className="absolute inset-x-2 bottom-0 h-0.5 bg-pine" />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="pt-6">{children}</div>
    </div>
  );
}
