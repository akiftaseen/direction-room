import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/app/settings")({ component: SettingsPage });

function SettingsPage() {
  const workspace = useAppStore((s) => s.workspace);
  const reset = useAppStore((s) => s.resetDemo);

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-display text-3xl tracking-tight">Settings</h1>
      <section className="mt-8 rounded-lg bg-surface p-5 shadow-border">
        <h2 className="font-display text-xl tracking-tight">Studio</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Workspace</dt>
            <dd>{workspace.name}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Lead</dt>
            <dd>
              {workspace.leadName}, {workspace.leadTitle}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Review branding</dt>
            <dd>Pine on paper</dd>
          </div>
        </dl>
      </section>
      <section className="mt-6 rounded-lg bg-surface p-5 shadow-border">
        <h2 className="font-display text-xl tracking-tight">Demo data</h2>
        <p className="mt-2 text-sm text-muted">
          Restore the Kumo Coffee brand launch, including round 1 comments and the
          unverified synthesis.
        </p>
        <Button
          className="mt-4"
          variant="secondary"
          onClick={() => {
            reset();
            toast.success("Demo restored");
          }}
        >
          Reset demo
        </Button>
      </section>
      <section className="mt-6 rounded-lg bg-surface p-5 shadow-border">
        <h2 className="font-display text-xl tracking-tight">AI & privacy</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Synthesis and brief extraction run only when you ask. Uploaded work is not used
          to train shared models. AI cannot approve, reject, change scope, or publish.
        </p>
      </section>
    </div>
  );
}
