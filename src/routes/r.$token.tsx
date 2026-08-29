import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatDate } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/r/$token")({ component: GuestReview });

function GuestReview() {
  const { token } = Route.useParams();
  const round = useAppStore((s) => s.reviews.find((r) => r.guestToken === token));
  const project = useAppStore((s) => s.projects.find((p) => p.id === round?.projectId));
  const client = useAppStore((s) => s.clients.find((c) => c.id === project?.clientId));
  const workspace = useAppStore((s) => s.workspace);
  const items = useAppStore((s) =>
    s.reviewItems
      .filter((i) => i.reviewRoundId === round?.id)
      .slice()
      .sort((a, b) => a.displayOrder - b.displayOrder),
  );
  const versions = useAppStore((s) => s.versions);
  const sources = useAppStore((s) => s.sources.filter((x) => x.reviewRoundId === round?.id));
  const contacts = useAppStore((s) => s.contacts);
  const approvals = useAppStore((s) => s.approvals.filter((a) => a.reviewRoundId === round?.id));
  const addComment = useAppStore((s) => s.addComment);
  const submit = useAppStore((s) => s.submitReviewDecision);

  const [idx, setIdx] = useState(0);
  const [comment, setComment] = useState("");
  const [pinMode, setPinMode] = useState(false);
  const [pendingPin, setPendingPin] = useState<{ x: number; y: number } | null>(null);
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [decisions, setDecisions] = useState<Record<string, "approved" | "changes_requested">>({});
  const [done, setDone] = useState(false);

  const current = items[idx];
  const ver = versions.find((v) => v.id === current?.assetVersionId);
  const pins = sources.filter((s) => s.assetVersionId === ver?.id && s.x != null);
  const itemComments = sources.filter((s) => s.assetVersionId === ver?.id);
  const approver = contacts.find((c) => c.id === round?.approverContactId);
  const locked = round?.state === "approved" || round?.state === "cancelled" || approvals.length > 0;

  const progress = useMemo(() => {
    const n = Object.keys(decisions).length;
    return items.length ? n / items.length : 0;
  }, [decisions, items.length]);

  if (!round || !project || !client || !current || !ver) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg px-6 text-center">
        <div>
          <h1 className="font-display text-2xl">This review link is not active</h1>
          <p className="mt-2 text-sm text-muted">Ask the studio to send a new one.</p>
        </div>
      </div>
    );
  }

  function postComment() {
    if (!comment.trim() || !author.trim()) {
      toast.error("Add your name and a comment.");
      return;
    }
    addComment({
      token,
      text: comment,
      authorName: author.trim(),
      assetVersionId: ver.id,
      x: pendingPin?.x ?? null,
      y: pendingPin?.y ?? null,
    });
    setComment("");
    setPendingPin(null);
    setPinMode(false);
    toast.success("Comment sent");
  }

  function finish() {
    if (!approver) return;
    if (author.trim() !== approver.name) {
      toast.error(`Only ${approver.name} can record the final decision.`);
      return;
    }
    const missing = items.filter((i) => !decisions[i.id]);
    if (missing.length) {
      toast.error("Decide on every item before submitting.");
      return;
    }
    const err = submit({
      token,
      approverName: author.trim(),
      approverEmail: email.trim() || approver.email,
      decisions: items.map((i) => ({ reviewItemId: i.id, decision: decisions[i.id] })),
    });
    if (err) {
      toast.error(err);
      return;
    }
    setDone(true);
  }

  const approvedAll =
    round.state === "approved" ||
    (done && Object.values(decisions).every((d) => d === "approved"));

  if (done || locked) {
    return (
      <div className="flex min-h-dvh flex-col bg-bg">
        <GuestHeader studio={workspace.name} project={client.name} />
        <div className="mx-auto flex max-w-lg flex-1 flex-col justify-center px-5 py-16 text-center">
          <Check className="mx-auto size-8 text-ok" />
          <h1 className="mt-4 font-display text-3xl tracking-tight">
            {approvedAll ? "Approval recorded" : "Changes requested"}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {workspace.name} has an immutable snapshot of the exact versions you saw.
            You can close this page.
          </p>
          <Button className="mt-6" variant="secondary" asChild>
            <Link to="/">About Direction Room</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <GuestHeader studio={workspace.name} project={`${client.name} · ${project.name}`} />
      <div className="border-b border-line bg-surface-2/80 px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs text-muted">Due {formatDate(round.dueAt)}</p>
            <h1 className="font-display text-xl tracking-tight md:text-2xl">{round.title}</h1>
          </div>
          <p className="text-xs text-muted">
            {idx + 1} of {items.length}
          </p>
        </div>
        <div className="mx-auto mt-3 h-1 max-w-6xl overflow-hidden rounded-full bg-line">
          <div className="h-full bg-pine" style={{ width: `${((idx + 1) / items.length) * 100}%` }} />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-0 lg:grid-cols-[1fr_340px]">
        <section className="px-4 py-4 md:px-6">
          <p className="text-sm text-muted">{round.contextText}</p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <h2 className="font-display text-lg tracking-tight">{ver.name}</h2>
            <div className="flex gap-1">
              <Button
                size="icon-sm"
                variant="ghost"
                disabled={idx === 0}
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                aria-label="Previous"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                size="icon-sm"
                variant="ghost"
                disabled={idx === items.length - 1}
                onClick={() => setIdx((i) => Math.min(items.length - 1, i + 1))}
                aria-label="Next"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
          {current.promptText ? (
            <p className="mt-1 text-sm text-ink-soft">{current.promptText}</p>
          ) : null}

          <div
            className={cn(
              "relative mt-4 overflow-hidden rounded-lg bg-surface shadow-border",
              pinMode ? "cursor-crosshair" : "cursor-default",
            )}
            onClick={(e) => {
              if (!pinMode) return;
              const img = e.currentTarget.querySelector("img");
              const box = img?.getBoundingClientRect();
              if (!box) return;
              const x = (e.clientX - box.left) / box.width;
              const y = (e.clientY - box.top) / box.height;
              if (x < 0 || y < 0 || x > 1 || y > 1) return;
              setPendingPin({ x, y });
            }}
          >
            <img
              src={ver.imageUrl}
              alt={ver.name}
              className="mx-auto max-h-screen w-full object-contain outline outline-1 -outline-offset-1 outline-ink/10"
            />
            {pins.map((p, i) => (
              <span
                key={p.id}
                className="absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pine text-xs font-medium text-pine-fg"
                style={{ left: `${(p.x ?? 0) * 100}%`, top: `${(p.y ?? 0) * 100}%` }}
              >
                {i + 1}
              </span>
            ))}
            {pendingPin ? (
              <span
                className="absolute size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warn"
                style={{ left: `${pendingPin.x * 100}%`, top: `${pendingPin.y * 100}%` }}
              />
            ) : null}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {items.map((it, i) => {
              const v = versions.find((x) => x.id === it.assetVersionId);
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={cn(
                    "size-14 overflow-hidden rounded-sm outline outline-1 -outline-offset-1",
                    i === idx ? "outline-pine" : "outline-ink/10 opacity-80",
                  )}
                >
                  <img src={v?.imageUrl} alt="" className="size-full object-cover" />
                </button>
              );
            })}
          </div>
        </section>

        <aside className="border-t border-line bg-surface lg:border-t-0 lg:border-l">
          <div className="flex h-full flex-col p-4">
            <div className="space-y-2">
              <Label>Your name</Label>
              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder={approver ? `e.g. ${approver.name}` : "Name"}
              />
              <p className="text-xs text-faint">
                Final approval can only be recorded by {approver?.name}. Commenters may use their own name.
              </p>
            </div>

            <div className="mt-4 flex-1 space-y-3 overflow-y-auto">
              <p className="text-xs tracking-wide text-muted uppercase">Comments on this item</p>
              {itemComments.length === 0 ? (
                <p className="text-sm text-muted">No comments yet.</p>
              ) : (
                itemComments.map((s) => (
                  <div key={s.id} className="rounded-md bg-surface-2 px-3 py-2">
                    <p className="text-xs font-medium">
                      {s.authorName}
                      {s.x != null ? " · pin" : ""}
                    </p>
                    <p className="mt-1 text-sm">{s.rawText}</p>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 space-y-2 border-t border-line pt-4">
              <Button
                size="sm"
                variant={pinMode ? "primary" : "secondary"}
                onClick={() => setPinMode((v) => !v)}
              >
                <MapPin className="size-3.5" />
                {pinMode ? "Click the image" : "Pin"}
              </Button>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={pendingPin ? "Comment on this pin…" : "Comment on this item…"}
              />
              <Button className="w-full" variant="secondary" onClick={postComment}>
                <Send className="size-3.5" />
                Send comment
              </Button>
            </div>

            <div className="mt-4 space-y-2 border-t border-line pt-4">
              <p className="text-xs tracking-wide text-muted uppercase">Your decision on this item</p>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={decisions[current.id] === "approved" ? "primary" : "secondary"}
                  onClick={() => setDecisions((d) => ({ ...d, [current.id]: "approved" }))}
                >
                  Approve
                </Button>
                <Button
                  variant={decisions[current.id] === "changes_requested" ? "primary" : "outline"}
                  onClick={() =>
                    setDecisions((d) => ({ ...d, [current.id]: "changes_requested" }))
                  }
                >
                  Request changes
                </Button>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-line">
                <div className="h-full bg-pine" style={{ width: `${progress * 100}%` }} />
              </div>
              <div className="space-y-1">
                <Label>Email (approver)</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={approver?.email}
                />
              </div>
              <Button className="w-full" onClick={finish}>
                Submit decisions
              </Button>
              <p className="text-xs text-faint">
                Submitting records the exact versions on this page. You cannot silently edit them later.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function GuestHeader({ studio, project }: { studio: string; project: string }) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-line bg-surface px-4 py-3">
      <div>
        <p className="text-xs tracking-wide text-muted uppercase">{studio}</p>
        <p className="text-sm font-medium">{project}</p>
      </div>
      <p className="text-xs text-faint">Secure review</p>
    </header>
  );
}
