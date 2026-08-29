import { createFileRoute, Link } from "@tanstack/react-router";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/clients/")({ component: ClientsPage });

function ClientsPage() {
  const clients = useAppStore((s) => s.clients);
  const projects = useAppStore((s) => s.projects);
  const memory = useAppStore((s) => s.memory);
  const contacts = useAppStore((s) => s.contacts);

  return (
    <div className="mx-auto max-w-5xl">
      <p className="text-xs tracking-wide text-muted uppercase">Directory</p>
      <h1 className="mt-1 font-display text-3xl tracking-tight">Clients</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {clients.map((c) => {
          const ps = projects.filter((p) => p.clientId === c.id);
          const mem = memory.filter((m) => m.clientId === c.id && m.status === "current");
          const contact = contacts.find((x) => x.clientId === c.id && x.isDefaultApprover);
          return (
            <Link
              key={c.id}
              to="/app/clients/$clientId"
              params={{ clientId: c.id }}
              className="rounded-lg bg-surface p-5 shadow-border transition-[box-shadow] duration-150 hover:shadow-lift"
            >
              <h2 className="font-display text-2xl tracking-tight">{c.name}</h2>
              <p className="mt-1 text-sm text-muted">{c.description}</p>
              <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div>
                  <dt className="text-faint">Projects</dt>
                  <dd className="mt-0.5 font-medium">{ps.length}</dd>
                </div>
                <div>
                  <dt className="text-faint">Memory</dt>
                  <dd className="mt-0.5 font-medium">{mem.length}</dd>
                </div>
                <div>
                  <dt className="text-faint">Approver</dt>
                  <dd className="mt-0.5 font-medium">{contact?.name ?? "—"}</dd>
                </div>
              </dl>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
