import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeliverableBadge } from "@/components/status-badge";
import { formatDateTime } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/delivery")({
  component: DeliveryPage,
});

function DeliveryPage() {
  const { projectId } = Route.useParams();
  const dels = useAppStore((s) => s.deliverables.filter((d) => d.projectId === projectId));
  const versions = useAppStore((s) => s.versions);
  const approvals = useAppStore((s) => s.approvals.filter((a) => a.projectId === projectId));
  const manifests = useAppStore((s) => s.manifests.filter((m) => m.projectId === projectId));
  const publish = useAppStore((s) => s.publishDelivery);
  const lead = useAppStore((s) => s.workspace.leadName);
  const required = dels.filter((d) => d.isRequired);
  const unapproved = required.filter((d) => d.state !== "approved" && d.state !== "delivered");
  const latest = manifests[0];

  return (
    <div>
      <h2 className="font-display text-2xl tracking-tight">Delivery</h2>
      <p className="mt-1 max-w-xl text-sm text-muted">
        A manifest may only reference approved versions. The client gets one page and an
        acknowledgment — it does not alter approval.
      </p>

      <ul className="mt-6 space-y-2">
        {required.map((d) => {
          const ver = versions.find((v) => v.id === d.currentVersionId);
          const ap = approvals.find((a) => a.deliverableId === d.id);
          return (
            <li
              key={d.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-surface px-4 py-3 shadow-border"
            >
              <div>
                <p className="text-sm font-medium">{d.name}</p>
                <p className="text-xs text-muted">
                  {ver?.name ?? "No version"}
                  {ap ? ` · ${ap.decision} by ${ap.approverName}` : ""}
                </p>
              </div>
              <DeliverableBadge state={d.state} />
            </li>
          );
        })}
      </ul>

      {unapproved.length ? (
        <p className="mt-4 text-sm text-warn">
          {unapproved.length} required deliverable{unapproved.length === 1 ? "" : "s"} still
          unapproved.
        </p>
      ) : (
        <Button
          className="mt-6"
          onClick={() => {
            const token = publish(projectId, lead);
            if (!token) {
              toast.error("Cannot publish until every required item is approved.");
              return;
            }
            toast.success("Manifest published");
          }}
        >
          Publish delivery manifest
        </Button>
      )}

      {latest ? (
        <section className="mt-8 rounded-lg bg-surface p-5 shadow-border">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-xl tracking-tight">Manifest v{latest.versionNumber}</h3>
            <Badge tone="ok">{latest.state}</Badge>
          </div>
          <p className="mt-2 text-sm text-muted">
            Published {latest.publishedAt ? formatDateTime(latest.publishedAt) : "—"}
          </p>
          <p className="mt-1 text-sm text-muted">
            {latest.acknowledgedAt
              ? `Acknowledged ${formatDateTime(latest.acknowledgedAt)}`
              : "Awaiting client acknowledgment"}
          </p>
          <Button className="mt-4" variant="secondary" asChild>
            <Link to="/d/$token" params={{ token: latest.guestToken }}>
              Open client delivery page
            </Link>
          </Button>
        </section>
      ) : null}
    </div>
  );
}
