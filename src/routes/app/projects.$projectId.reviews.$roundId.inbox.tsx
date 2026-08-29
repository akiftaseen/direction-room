import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/format";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/projects/$projectId/reviews/$roundId/inbox")({
  component: InboxPage,
});

function InboxPage() {
  const { roundId } = Route.useParams();
  const sources = useAppStore((s) =>
    s.sources
      .filter((x) => x.reviewRoundId === roundId)
      .slice()
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt)),
  );
  const versions = useAppStore((s) => s.versions);
  const importPasted = useAppStore((s) => s.importPastedFeedback);
  const [text, setText] = useState("");
  const [sender, setSender] = useState("");
  const [channel, setChannel] = useState("Email");

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
      <ul className="space-y-3">
        {sources.map((s) => {
          const ver = versions.find((v) => v.id === s.assetVersionId);
          return (
            <li key={s.id} className="rounded-lg bg-surface p-4 shadow-border">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium">{s.authorName}</p>
                <Badge tone={s.authorRole === "imported" ? "warn" : "neutral"}>
                  {s.sourceLabel}
                </Badge>
                <span className="text-xs text-faint">{formatDateTime(s.createdAt)}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed">{s.rawText}</p>
              {ver ? <p className="mt-2 text-xs text-muted">On {ver.name}</p> : null}
              {s.x != null && s.y != null ? (
                <p className="text-xs text-faint">
                  Pin {Math.round(s.x * 100)}%, {Math.round(s.y * 100)}%
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
      <aside className="rounded-lg bg-surface p-4 shadow-border">
        <h3 className="font-display text-lg tracking-tight">Import feedback</h3>
        <p className="mt-1 text-xs text-muted">
          Paste from email, WhatsApp, or Slack. The original text stays labeled as imported.
        </p>
        <div className="mt-3 space-y-2">
          <div className="space-y-1">
            <Label>Sender</Label>
            <Input value={sender} onChange={(e) => setSender(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label>Channel</Label>
            <Input value={channel} onChange={(e) => setChannel(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label>Original text</Label>
            <Textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <Button
            size="sm"
            disabled={!text.trim() || !sender.trim()}
            onClick={() => {
              importPasted({ roundId, text, sender, channel });
              toast.success("Imported. Run synthesis to extract items.");
              setText("");
            }}
          >
            Import
          </Button>
        </div>
      </aside>
    </div>
  );
}
