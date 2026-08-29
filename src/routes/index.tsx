import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, GitMerge, Lock, Quote } from "lucide-react";
import { Wordmark } from "@/components/mark";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg paper-grain">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <Wordmark />
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/app">Open studio</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/r/$token" params={{ token: "kumo-r1" }}>
              Review as the client
            </Link>
          </Button>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-10 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pt-16">
          <div className="stagger-in">
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
              For independent studios
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Turn scattered client feedback into one approved revision plan.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Direction Room keeps the brief, files, comments, decisions, and
              approvals connected — so your studio spends less time decoding
              feedback and fewer hours on unplanned revisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/app">
                  Run the Kumo review
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/r/$token" params={{ token: "kumo-r1" }}>
                  Open the client room
                </Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-xl bg-surface p-4 shadow-lift sm:p-5">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">
              Round 1 · Kumo Coffee
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight">
              What the client actually asked
            </h2>
            <ul className="mt-4 space-y-2.5">
              <Flag
                tone="ok"
                label="Approval"
                text="Take Concept B forward."
              />
              <Flag
                tone="warn"
                label="Ambiguous"
                text="Warmer, but not childish."
              />
              <Flag
                tone="danger"
                label="Conflict"
                text="Brighter red vs. the approved palette."
              />
              <Flag
                tone="scope"
                label="Scope"
                text="Animated stories — out of contract."
              />
              <Flag
                tone="info"
                label="In scope"
                text="Menu headline contrast."
              />
            </ul>
            <p className="mt-4 text-xs text-faint">
              Every flag links to the original comment. AI drafts. You commit.
            </p>
          </aside>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-3">
            <Outcome
              n="01"
              title="One version, one place to respond"
              body="Clients review a curated package without learning your internal tools. No account. No training."
            />
            <Outcome
              n="02"
              title="Feedback the team can execute"
              body="Duplicates grouped, conflicts surfaced, a finite Change Set drafted — each suggestion tied to its source."
            />
            <Outcome
              n="03"
              title="A record of what was decided"
              body="Know which version was approved, why a direction changed, and when a request moved beyond scope."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            The loop
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
            Brief, review, change set, approval. Nothing else in the way.
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Align", d: "Turn a messy brief into a versioned Creative Contract." },
              { t: "Review", d: "Publish a curated package. The client comments on exact versions." },
              { t: "Reconcile", d: "Verify atomic feedback. Confirm one Change Set for the next round." },
              { t: "Close", d: "Immutable approval snapshot and a delivery manifest." },
            ].map((s, i) => (
              <li key={s.t} className="rounded-lg bg-surface p-5 shadow-border">
                <p className="font-mono text-xs text-faint">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid gap-6 rounded-xl bg-pine px-6 py-10 text-pine-fg md:grid-cols-[1.2fr_0.8fr] md:px-10">
            <div>
              <Quote className="size-6 opacity-60" />
              <p className="mt-4 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                Creation stays in Figma, Adobe, Affinity. Direction Room owns
                what was asked, what changed, and what was signed.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-pine-fg/80">
                {[
                  "No visual generation. No canvas.",
                  "AI cannot approve, reject, or change scope.",
                  "Published reviews and approvals are immutable.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <div className="flex items-center gap-2 text-sm">
                <GitMerge className="size-4" />
                One round, one agreed change set
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Lock className="size-4" />
                Guest links. No client seats.
              </div>
              <Button
                variant="secondary"
                className="mt-4 bg-pine-fg text-pine hover:bg-surface"
                asChild
              >
                <Link to="/app">
                  Open Hearth Studio
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="text-ink-soft" />
          <p>The decision layer for client creative work.</p>
        </div>
      </footer>
    </div>
  );
}

function Flag({
  tone,
  label,
  text,
}: {
  tone: "ok" | "warn" | "danger" | "scope" | "info";
  label: string;
  text: string;
}) {
  const map = {
    ok: "bg-ok-bg text-ok",
    warn: "bg-warn-bg text-warn",
    danger: "bg-danger-bg text-danger",
    scope: "bg-scope-bg text-scope",
    info: "bg-info-bg text-info",
  };
  return (
    <li className="flex items-start gap-3 rounded-md bg-surface-2 px-3 py-2.5">
      <span className={`mt-0.5 rounded-full px-2 py-0.5 text-xs font-medium tracking-wide ${map[tone]}`}>
        {label}
      </span>
      <span className="text-sm text-ink-soft">{text}</span>
    </li>
  );
}

function Outcome({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article className="bg-bg px-6 py-10 md:px-8">
      <p className="font-mono text-xs text-faint">{n}</p>
      <h3 className="mt-4 font-display text-2xl tracking-tight">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}
