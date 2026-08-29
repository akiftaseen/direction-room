import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/reviews/$roundId/changeset")({
  component: ChangeSetPage,
});

function ChangeSetPage() {
  const { roundId } = Route.useParams();
  const compile = useAppStore((s) => s.compileChangeSet);
  const confirm = useAppStore((s) => s.confirmChangeSet);
  const update = useAppStore((s) => s.updateChangeItem);
  const lead = useAppStore((s) => s.workspace.leadName);
  const cs = useAppStore((s) =>
    s.changeSets.find((c) => c.reviewRoundId === roundId && c.state !== "superseded"),
  );
  const items = useAppStore((s) =>
    s.changeItems
      .filter((i) => i.changeSetId === cs?.id)
      .slice()
      .sort((a, b) => a.displayOrder - b.displayOrder),
  );
  const dels = useAppStore((s) => s.deliverables);
  const feedback = useAppStore((s) => s.feedback);

  if (!cs) {
    return (
      <div className="rounded-lg bg-surface p-6 shadow-border">
        <h3 className="font-display text-2xl tracking-tight">No change set yet</h3>
        <p className="mt-2 max-w-lg text-sm text-muted">
          Compile verified feedback into a finite production brief. Confirmation
          makes it immutable; later edits supersede rather than overwrite.
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            compile(roundId, lead);
            toast.success("Draft compiled from current feedback");
          }}
        >
          Compile from feedback
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl tracking-tight">
            Change set v{cs.versionNumber}
          </h3>
          <Badge tone={cs.state === "internally_confirmed" ? "ok" : "warn"}>
            {cs.state.replaceAll("_", " ")}
          </Badge>
        </div>
        <ul className="mt-4 space-y-3">
          {items.map((item) => {
            const del = dels.find((d) => d.id === item.targetDeliverableId);
            return (
              <li key={item.id} className="rounded-lg bg-surface p-4 shadow-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-faint">{item.displayOrder}</span>
                  <Badge
                    tone={
                      item.scopeStatus === "included"
                        ? "ok"
                        : item.scopeStatus === "excluded"
                          ? "neutral"
                          : "scope"
                    }
                  >
                    {item.scopeStatus.replaceAll("_", " ")}
                  </Badge>
                  {del ? <span className="text-xs text-muted">{del.name}</span> : null}
                </div>
                {cs.state === "draft" ? (
                  <Textarea
                    className="mt-2"
                    value={item.actionText}
                    onChange={(e) => update(item.id, { actionText: e.target.value })}
                  />
                ) : (
                  <p className="mt-2 text-sm font-medium">{item.actionText}</p>
                )}
                <p className="mt-2 text-xs text-muted">
                  Done when: {item.acceptanceCriterion}
                </p>
                {cs.state === "draft" ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(["included", "excluded", "change_order_candidate"] as const).map((st) => (
                      <Button
                        key={st}
                        size="sm"
                        variant={item.scopeStatus === st ? "primary" : "ghost"}
                        onClick={() => update(item.id, { scopeStatus: st })}
                      >
                        {st.replaceAll("_", " ")}
                      </Button>
                    ))}
                  </div>
                ) : null}
                <p className="mt-2 text-xs text-faint">
                  Sources: {item.sourceFeedbackIds
                    .map((id) => feedback.find((f) => f.id === id)?.summary)
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </li>
            );
          })}
        </ul>
        {cs.state === "draft" ? (
          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                compile(roundId, lead);
                toast.message("Recompiled from current verified items");
              }}
            >
              Recompile
            </Button>
            <Button
              onClick={() => {
                confirm(cs.id, lead);
                toast.success("Change set confirmed. It is now immutable.");
              }}
            >
              Confirm internally
            </Button>
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">
            Confirmed by {cs.confirmedBy}. Later edits will create a new version.
          </p>
        )}
      </div>
      <aside className="rounded-lg bg-surface p-5 shadow-border">
        <p className="text-xs tracking-wide text-muted uppercase">Client-facing summary</p>
        <p className="mt-3 text-sm leading-relaxed">{cs.clientSafeSummary}</p>
        <p className="mt-4 text-xs text-faint">
          Internal notes may be softened here, but material actions cannot be omitted.
        </p>
      </aside>
    </div>
  );
}
