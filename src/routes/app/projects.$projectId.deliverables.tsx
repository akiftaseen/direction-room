import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DeliverableBadge } from "@/components/status-badge";
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

export const Route = createFileRoute("/app/projects/$projectId/deliverables")({
  component: DeliverablesPage,
});

const samples = [
  { label: "Identity board", url: "/kumo/identity-b.jpg" },
  { label: "Poster", url: "/kumo/poster.jpg" },
  { label: "Social still", url: "/kumo/social-01.jpg" },
  { label: "Menu cover", url: "/kumo/menu.jpg" },
];

function DeliverablesPage() {
  const { projectId } = Route.useParams();
  const dels = useAppStore((s) => s.deliverables.filter((d) => d.projectId === projectId));
  const versions = useAppStore((s) => s.versions);
  const addVersion = useAppStore((s) => s.addVersion);
  const createDeliverable = useAppStore((s) => s.createDeliverable);
  const [open, setOpen] = useState<string | null>(null);
  const [newOpen, setNewOpen] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sample, setSample] = useState(samples[0].url);
  const [dName, setDName] = useState("");
  const [dCat, setDCat] = useState("Identity");
  const [dDesc, setDDesc] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl tracking-tight">Deliverables</h2>
        <Button variant="secondary" size="sm" onClick={() => setNewOpen(true)}>
          Add
        </Button>
      </div>
      <ul className="mt-4 space-y-3">
        {dels.map((d) => {
          const ver = versions.find((v) => v.id === d.currentVersionId);
          return (
            <li key={d.id} className="rounded-lg bg-surface p-4 shadow-border md:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-muted">{d.category}</p>
                  <h3 className="font-display text-xl tracking-tight">{d.name}</h3>
                  <p className="mt-1 max-w-xl text-sm text-muted">{d.description}</p>
                </div>
                <DeliverableBadge state={d.state} />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
                <span>{d.ownerName}</span>
                <span>Due {formatDate(d.dueDate)}</span>
                {ver ? <span>v{ver.versionNumber} · {ver.name}</span> : <span>No version yet</span>}
              </div>
              {ver ? (
                <img
                  src={ver.imageUrl}
                  alt={ver.name}
                  className="mt-4 max-h-48 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                />
              ) : null}
              <Button
                className="mt-4"
                size="sm"
                variant="secondary"
                onClick={() => {
                  setOpen(d.id);
                  setName(`${d.name} v${(ver?.versionNumber ?? 0) + 1}`);
                }}
              >
                Upload version
              </Button>
            </li>
          );
        })}
      </ul>

      <Dialog open={open != null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent>
          <DialogTitle>New version</DialogTitle>
          <DialogDescription>
            Review renditions only. Master files stay in your creation tool.
          </DialogDescription>
          <div className="mt-4 space-y-3">
            <div className="space-y-1.5">
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Sample rendition</Label>
              <div className="grid grid-cols-2 gap-2">
                {samples.map((s) => (
                  <button
                    key={s.url}
                    type="button"
                    onClick={() => setSample(s.url)}
                    className={`overflow-hidden rounded-md outline outline-1 -outline-offset-1 ${
                      sample === s.url ? "outline-pine" : "outline-ink/10"
                    }`}
                  >
                    <img src={s.url} alt={s.label} className="h-20 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Note</Label>
              <Textarea value={note} onChange={(e) => setNote(e.target.value)} />
            </div>
            <Button
              onClick={() => {
                if (!open) return;
                addVersion({ deliverableId: open, name, imageUrl: sample, note });
                toast.success("Version saved");
                setOpen(null);
                setNote("");
              }}
            >
              Save version
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={newOpen} onOpenChange={setNewOpen}>
        <DialogContent>
          <DialogTitle>Add deliverable</DialogTitle>
          <DialogDescription>A client-facing outcome, not an internal task.</DialogDescription>
          <div className="mt-4 space-y-3">
            <div className="space-y-1.5">
              <Label>Name</Label>
              <Input value={dName} onChange={(e) => setDName(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Category</Label>
              <Input value={dCat} onChange={(e) => setDCat(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Scope</Label>
              <Textarea value={dDesc} onChange={(e) => setDDesc(e.target.value)} />
            </div>
            <Button
              onClick={() => {
                if (!dName.trim()) return;
                createDeliverable({
                  projectId,
                  name: dName,
                  category: dCat,
                  description: dDesc,
                });
                toast.success("Deliverable added");
                setNewOpen(false);
                setDName("");
                setDDesc("");
              }}
            >
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
