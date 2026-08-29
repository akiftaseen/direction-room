import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/d/$token")({ component: DeliveryGuest });

function DeliveryGuest() {
  const { token } = Route.useParams();
  const manifest = useAppStore((s) => s.manifests.find((m) => m.guestToken === token));
  const project = useAppStore((s) => s.projects.find((p) => p.id === manifest?.projectId));
  const client = useAppStore((s) => s.clients.find((c) => c.id === project?.clientId));
  const items = useAppStore((s) => s.deliveryItems.filter((i) => i.manifestId === manifest?.id));
  const versions = useAppStore((s) => s.versions);
  const dels = useAppStore((s) => s.deliverables);
  const approvals = useAppStore((s) => s.approvals);
  const workspace = useAppStore((s) => s.workspace);
  const ack = useAppStore((s) => s.acknowledgeDelivery);

  if (!manifest || !project || !client) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg px-6 text-center">
        <p className="text-muted">This delivery link is not active.</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-bg">
      <header className="border-b border-line bg-surface px-4 py-3">
        <p className="text-xs tracking-wide text-muted uppercase">{workspace.name}</p>
        <p className="text-sm font-medium">
          {client.name} · {project.name}
        </p>
      </header>
      <main className="mx-auto max-w-2xl px-5 py-10">
        <h1 className="font-display text-3xl tracking-tight">Delivery</h1>
        <p className="mt-2 text-sm text-muted">
          Approved versions only. Acknowledging receipt does not change the approval record.
        </p>
        <ul className="mt-8 space-y-4">
          {items.map((item) => {
            const ver = versions.find((v) => v.id === item.assetVersionId);
            const del = dels.find((d) => d.id === item.deliverableId);
            const ap = approvals.find((a) => a.deliverableId === item.deliverableId);
            if (!ver) return null;
            return (
              <li key={item.id} className="overflow-hidden rounded-lg bg-surface shadow-border">
                <img
                  src={ver.imageUrl}
                  alt={ver.name}
                  className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                />
                <div className="p-4">
                  <p className="font-medium">{del?.name}</p>
                  <p className="text-xs text-muted">{item.fileLabel}</p>
                  <p className="mt-2 text-sm text-ink-soft">{item.usageNotes}</p>
                  {ap ? (
                    <p className="mt-2 text-xs text-faint">
                      Approved by {ap.approverName} · {formatDateTime(ap.decidedAt)}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
        {manifest.acknowledgedAt ? (
          <p className="mt-8 text-sm text-ok">
            Receipt acknowledged {formatDateTime(manifest.acknowledgedAt)}.
          </p>
        ) : (
          <Button
            className="mt-8"
            onClick={() => {
              ack(token);
              toast.success("Receipt acknowledged");
            }}
          >
            Acknowledge receipt
          </Button>
        )}
        <p className="mt-6 text-xs text-faint">
          <Link to="/" className="hover:text-ink">
            Direction Room
          </Link>
        </p>
      </main>
    </div>
  );
}
