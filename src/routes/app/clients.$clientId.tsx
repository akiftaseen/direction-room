import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/clients/$clientId")({
  component: ClientDetail,
});

function ClientDetail() {
  const { clientId } = Route.useParams();
  const client = useAppStore((s) => s.clients.find((c) => c.id === clientId));
  const projects = useAppStore((s) => s.projects.filter((p) => p.clientId === clientId));
  const contacts = useAppStore((s) => s.contacts.filter((c) => c.clientId === clientId));
  const memory = useAppStore((s) => s.memory.filter((m) => m.clientId === clientId));
  const decisions = useAppStore((s) => s.decisions.filter((d) => d.clientId === clientId));

  if (!client) return <p className="text-muted">Client not found.</p>;

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-xs tracking-wide text-muted uppercase">{client.industry}</p>
      <h1 className="mt-1 font-display text-3xl tracking-tight">{client.name}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">{client.description}</p>

      <section className="mt-10">
        <h2 className="font-display text-xl tracking-tight">Projects</h2>
        <ul className="mt-3 space-y-2">
          {projects.map((p) => (
            <li key={p.id}>
              <Link
                to="/app/projects/$projectId"
                params={{ projectId: p.id }}
                className="flex items-center justify-between rounded-md bg-surface px-4 py-3 shadow-border"
              >
                <span className="text-sm font-medium">{p.name}</span>
                <ProjectBadge state={p.state} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl tracking-tight">Contacts</h2>
        <ul className="mt-3 divide-y divide-line rounded-md bg-surface shadow-border">
          {contacts.map((c) => (
            <li key={c.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-sm font-medium">{c.name}</p>
                <p className="text-xs text-muted">
                  {c.title} · {c.email}
                </p>
              </div>
              {c.isDefaultApprover ? <Badge tone="pine">Approver</Badge> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl tracking-tight">Brand memory</h2>
        <p className="mt-1 text-sm text-muted">
          Only human-confirmed facts. Conflicts are shown, never silently merged.
        </p>
        <ul className="mt-3 space-y-2">
          {memory.map((m) => (
            <li key={m.id} className="rounded-md bg-surface px-4 py-3 shadow-border">
              <div className="flex items-center gap-2">
                <Badge>{m.kind.replace("_", " ")}</Badge>
                <Badge tone={m.status === "current" ? "ok" : "neutral"}>{m.status}</Badge>
              </div>
              <p className="mt-2 text-sm">{m.statement}</p>
              <p className="mt-1 text-xs text-faint">{m.sourceLabel}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl tracking-tight">Decision history</h2>
        <ul className="mt-3 space-y-2">
          {decisions.map((d) => (
            <li key={d.id} className="rounded-md bg-surface px-4 py-3 shadow-border">
              <p className="text-sm font-medium">{d.statement}</p>
              <p className="mt-1 text-xs text-muted">{d.rationale}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
