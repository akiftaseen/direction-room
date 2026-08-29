import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { ReviewBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/reviews/$roundId")({
  component: RoundLayout,
});

function RoundLayout() {
  const { projectId, roundId } = Route.useParams();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const round = useAppStore((s) => s.reviews.find((r) => r.id === roundId));
  const items = useAppStore((s) => s.reviewItems.filter((i) => i.reviewRoundId === roundId));
  const versions = useAppStore((s) => s.versions);
  const feedback = useAppStore((s) => s.feedback.filter((f) => f.reviewRoundId === roundId));
  const sources = useAppStore((s) => s.sources.filter((x) => x.reviewRoundId === roundId));

  if (!round) return <p className="text-muted">Round not found.</p>;

  const base = `/app/projects/${projectId}/reviews/${roundId}`;
  const tabs = [
    { href: base, label: "Package", exact: true },
    { href: `${base}/inbox`, label: `Inbox (${sources.length})` },
    { href: `${base}/synthesis`, label: `Synthesis (${feedback.length})` },
    { href: `${base}/changeset`, label: "Change set" },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted">Round {round.roundNumber}</p>
          <h2 className="font-display text-2xl tracking-tight">{round.title}</h2>
          <p className="mt-1 text-sm text-muted">Due {formatDate(round.dueAt)}</p>
        </div>
        <div className="flex items-center gap-2">
          <ReviewBadge state={round.state} />
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              const url = `${window.location.origin}/r/${round.guestToken}`;
              navigator.clipboard?.writeText(url).catch(() => {});
              toast.success("Guest link copied");
            }}
          >
            Copy guest link
          </Button>
          <Button size="sm" asChild>
            <Link to="/r/$token" params={{ token: round.guestToken }}>
              Open as client
              <ExternalLink className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      <nav className="mt-6 flex gap-1 overflow-x-auto border-b border-line">
        {tabs.map((t) => {
          const active = t.exact
            ? pathname === t.href || pathname === t.href + "/"
            : pathname === t.href || pathname.startsWith(t.href + "/");
          return (
            <Link
              key={t.href}
              to={t.href}
              className={cn(
                "relative h-11 shrink-0 px-3 text-sm",
                active ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {t.label}
              {active ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-pine" /> : null}
            </Link>
          );
        })}
      </nav>

      {pathname === base || pathname === base + "/" ? (
        <PackageView roundContext={round.contextText} items={items} versions={versions} />
      ) : (
        <div className="pt-6">
          <Outlet />
        </div>
      )}
    </div>
  );
}

function PackageView({
  roundContext,
  items,
  versions,
}: {
  roundContext: string;
  items: { id: string; assetVersionId: string; promptText: string; displayOrder: number }[];
  versions: { id: string; name: string; imageUrl: string }[];
}) {
  return (
    <div className="pt-6">
      <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{roundContext}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items
          .slice()
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((item) => {
            const ver = versions.find((v) => v.id === item.assetVersionId);
            if (!ver) return null;
            return (
              <figure key={item.id} className="overflow-hidden rounded-lg bg-surface shadow-border">
                <img
                  src={ver.imageUrl}
                  alt={ver.name}
                  className="aspect-square w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                />
                <figcaption className="p-3">
                  <p className="text-sm font-medium">{ver.name}</p>
                  {item.promptText ? (
                    <p className="mt-1 text-xs text-muted">{item.promptText}</p>
                  ) : null}
                </figcaption>
              </figure>
            );
          })}
      </div>
    </div>
  );
}
