import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";
import { ProjectBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { formatDate, formatRelative } from "@/lib/format";
import { selectNeeds, useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/")({ component: Dashboard });

function Dashboard() {
  const data = useAppStore();
  const needs = selectNeeds(data);
  const active = data.projects.filter((p) => p.state !== "archived");
  const recent = data.sources
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 4);

  return (
    <div className="stagger-in mx-auto max-w-5xl">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-wide text-muted uppercase">Studio home</p>
          <h1 className="mt-1 font-display text-3xl tracking-tight md:text-4xl">
            Needs you
          </h1>
        </div>
        <Button variant="secondary" asChild>
          <Link to="/r/$token" params={{ token: "kumo-r1" }}>
            Open client room
          </Link>
        </Button>
      </div>

      <section className="mt-8 space-y-2">
        {needs.length === 0 ? (
          <div className="rounded-lg bg-surface p-6 shadow-border">
            <p className="font-display text-xl">Nothing waiting.</p>
            <p className="mt-1 text-sm text-muted">
              When a review needs verification, a change set, or a delivery, it
              will sit here.
            </p>
          </div>
        ) : (
          needs.map((n) => (
            <a
              key={n.id}
              href={n.href}
              className="flex items-center justify-between gap-4 rounded-lg bg-surface px-4 py-4 shadow-border transition-[box-shadow] duration-150 hover:shadow-lift"
            >
              <div>
                <p className="text-sm font-medium text-ink">{n.title}</p>
                <p className="mt-0.5 text-sm text-muted">{n.detail}</p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-faint" />
            </a>
          ))
        )}
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl tracking-tight">Active projects</h2>
          <Link to="/app/projects" className="text-sm text-muted hover:text-ink">
            All
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {active.map((p) => {
            const client = data.clients.find((c) => c.id === p.clientId);
            const dels = data.deliverables.filter((d) => d.projectId === p.id);
            const approved = dels.filter((d) => d.state === "approved" || d.state === "delivered").length;
            return (
              <Link
                key={p.id}
                to="/app/projects/$projectId"
                params={{ projectId: p.id }}
                className="rounded-lg bg-surface p-5 shadow-border transition-[box-shadow] duration-150 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-muted">{client?.name}</p>
                    <h3 className="mt-1 font-display text-xl tracking-tight">{p.name}</h3>
                  </div>
                  <ProjectBadge state={p.state} />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <span>
                    {approved}/{dels.length || 0} approved
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="size-3" />
                    {formatDate(p.targetDate)}
                  </span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-bg-warm">
                  <div
                    className="h-full bg-pine"
                    style={{
                      width: `${dels.length ? (approved / dels.length) * 100 : 0}%`,
                    }}
                  />
                </div>
                <p className="mt-3 text-xs text-faint">
                  Revisions {p.revisionUsed}/{p.revisionAllowance}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight">Recent client responses</h2>
        <ul className="mt-4 divide-y divide-line rounded-lg bg-surface shadow-border">
          {recent.map((s) => (
            <li key={s.id} className="px-4 py-3">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium">{s.authorName}</p>
                <p className="text-xs text-faint">{formatRelative(s.createdAt)}</p>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{s.rawText}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
