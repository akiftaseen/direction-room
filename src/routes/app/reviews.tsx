import { createFileRoute, Link } from "@tanstack/react-router";
import { ReviewBadge } from "@/components/status-badge";
import { formatDate } from "@/lib/format";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/reviews")({ component: ReviewsIndex });

function ReviewsIndex() {
  const reviews = useAppStore((s) => s.reviews);
  const projects = useAppStore((s) => s.projects);
  const clients = useAppStore((s) => s.clients);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-3xl tracking-tight">Reviews</h1>
      <ul className="mt-6 space-y-2">
        {reviews.map((r) => {
          const project = projects.find((p) => p.id === r.projectId);
          const client = clients.find((c) => c.id === project?.clientId);
          return (
            <li key={r.id}>
              <Link
                to="/app/projects/$projectId/reviews/$roundId"
                params={{ projectId: r.projectId, roundId: r.id }}
                className="flex items-center justify-between rounded-lg bg-surface px-4 py-4 shadow-border"
              >
                <div>
                  <p className="text-xs text-muted">
                    {client?.name} · {project?.name}
                  </p>
                  <p className="font-medium">{r.title}</p>
                  <p className="text-xs text-faint">Due {formatDate(r.dueAt)}</p>
                </div>
                <ReviewBadge state={r.state} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
