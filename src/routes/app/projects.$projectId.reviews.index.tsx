import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ReviewBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDate } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/reviews/")({
  component: ReviewsPage,
});

function ReviewsPage() {
  const { projectId } = Route.useParams();
  const reviews = useAppStore((s) => s.reviews.filter((r) => r.projectId === projectId));
  const versions = useAppStore((s) => s.versions.filter((v) => v.projectId === projectId));
  const contacts = useAppStore((s) => {
    const clientId = s.projects.find((p) => p.id === projectId)?.clientId;
    return s.contacts.filter((c) => c.clientId === clientId);
  });
  const publish = useAppStore((s) => s.publishReview);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Round 1");
  const [context, setContext] = useState("");
  const [due, setDue] = useState("2026-09-05");
  const [selected, setSelected] = useState<string[]>([]);
  const approver = contacts.find((c) => c.isDefaultApprover) ?? contacts[0];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl tracking-tight">Reviews</h2>
        <Button size="sm" onClick={() => setOpen(true)}>
          Compose
        </Button>
      </div>
      {reviews.length === 0 ? (
        <p className="mt-6 text-sm text-muted">
          No review published yet. Compose a package from current versions.
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {reviews.map((r) => (
            <li key={r.id}>
              <Link
                to="/app/projects/$projectId/reviews/$roundId"
                params={{ projectId, roundId: r.id }}
                className="flex items-center justify-between rounded-lg bg-surface px-4 py-4 shadow-border hover:shadow-lift"
              >
                <div>
                  <p className="font-medium">{r.title}</p>
                  <p className="text-xs text-muted">Due {formatDate(r.dueAt)}</p>
                </div>
                <ReviewBadge state={r.state} />
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-screen overflow-y-auto">
          <DialogTitle>Compose review</DialogTitle>
          <DialogDescription>
            Published packages are immutable. Corrections require a new round.
          </DialogDescription>
          <div className="mt-4 space-y-3">
            <div className="space-y-1.5">
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Context for the client</Label>
              <Textarea value={context} onChange={(e) => setContext(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Due</Label>
              <Input type="date" value={due} onChange={(e) => setDue(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Versions</Label>
              <ul className="space-y-1">
                {versions.map((v) => (
                  <li key={v.id}>
                    <label className="flex min-h-11 items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={selected.includes(v.id)}
                        onChange={(e) =>
                          setSelected((cur) =>
                            e.target.checked ? [...cur, v.id] : cur.filter((id) => id !== v.id),
                          )
                        }
                      />
                      {v.name}
                    </label>
                  </li>
                ))}
              </ul>
              {versions.length === 0 ? (
                <p className="text-sm text-muted">Upload a version first.</p>
              ) : null}
            </div>
            <p className="text-xs text-muted">
              Approver: {approver?.name ?? "None assigned"}
            </p>
            <Button
              disabled={!approver || selected.length === 0}
              onClick={() => {
                const token = publish({
                  projectId,
                  title,
                  contextText: context,
                  versionIds: selected,
                  approverContactId: approver.id,
                  dueAt: new Date(due).toISOString(),
                });
                toast.success("Review published");
                setOpen(false);
                navigator.clipboard?.writeText(`${window.location.origin}/r/${token}`).catch(
                  () => {},
                );
              }}
            >
              Publish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
