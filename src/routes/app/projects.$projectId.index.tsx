import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DeliverableBadge, ReviewBadge } from "@/components/status-badge";
import { selectNeeds, useAppStore } from "@/lib/store";

export const Route = createFileRoute("/app/projects/$projectId/")({
  component: ProjectOverview,
});

function ProjectOverview() {
  const { projectId } = Route.useParams();
  const data = useAppStore();
  const project = data.projects.find((p) => p.id === projectId);
  const contract = data.contracts.find((c) => c.id === project?.currentContractId);
  const dels = data.deliverables.filter((d) => d.projectId === projectId);
  const reviews = data.reviews.filter((r) => r.projectId === projectId);
  const latest = reviews[0];
  const cs = data.changeSets.find((c) => c.projectId === projectId);
  const decisions = data.decisions.filter((d) => d.projectId === projectId).slice(0, 3);
  const need = selectNeeds(data).find((n) => n.projectId === projectId);

  if (!project) return null;

  const next =
    need?.title ??
    (project.state === "draft"
      ? "Approve the Creative Contract"
      : "Nothing blocked");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <section className="rounded-lg bg-surface p-5 shadow-border">
          <p className="text-xs tracking-wide text-muted uppercase">Next decision</p>
          <h2 className="mt-2 font-display text-2xl tracking-tight">{next}</h2>
          {need ? (
            <a
              href={need.href}
              className="mt-4 inline-flex items-center gap-1 text-sm text-pine hover:underline"
            >
              Continue <ArrowRight className="size-3.5" />
            </a>
          ) : null}
          <p className="mt-4 text-sm text-muted">
            Revision allowance {project.revisionUsed}/{project.revisionAllowance}
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl tracking-tight">Deliverables</h3>
          <ul className="mt-3 space-y-2">
            {dels.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between rounded-md bg-surface px-4 py-3 shadow-border"
              >
                <span className="text-sm">{d.name}</span>
                <DeliverableBadge state={d.state} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="space-y-6">
        {latest ? (
          <section className="rounded-lg bg-surface p-5 shadow-border">
            <p className="text-xs text-muted">Latest review</p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <h3 className="font-medium">{latest.title}</h3>
              <ReviewBadge state={latest.state} />
            </div>
            <Link
              to="/app/projects/$projectId/reviews/$roundId"
              params={{ projectId, roundId: latest.id }}
              className="mt-3 inline-flex text-sm text-pine hover:underline"
            >
              Open round
            </Link>
          </section>
        ) : null}

        {cs ? (
          <section className="rounded-lg bg-surface p-5 shadow-border">
            <p className="text-xs text-muted">Change set</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cs.clientSafeSummary}</p>
            <p className="mt-2 text-xs text-faint">{cs.state.replaceAll("_", " ")}</p>
          </section>
        ) : null}

        {contract ? (
          <section className="rounded-lg bg-surface p-5 shadow-border">
            <p className="text-xs text-muted">Creative thesis</p>
            <p className="mt-2 text-sm leading-relaxed">{contract.thesis}</p>
          </section>
        ) : null}

        <section>
          <h3 className="font-display text-xl tracking-tight">Recent decisions</h3>
          <ul className="mt-3 space-y-2">
            {decisions.map((d) => (
              <li key={d.id} className="rounded-md bg-surface px-4 py-3 shadow-border">
                <p className="text-sm">{d.statement}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
