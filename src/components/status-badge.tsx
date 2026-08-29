import { Badge } from "@/components/ui/badge";
import type {
  DeliverableState,
  FeedbackStatus,
  ProjectState,
  ReviewState,
} from "@/lib/types";

const projectTone: Record<ProjectState, { tone: "neutral" | "ok" | "warn" | "info" | "pine"; label: string }> = {
  draft: { tone: "neutral", label: "Draft" },
  aligned: { tone: "info", label: "Aligned" },
  active: { tone: "pine", label: "Active" },
  final_review: { tone: "warn", label: "Final review" },
  delivered: { tone: "ok", label: "Delivered" },
  archived: { tone: "neutral", label: "Archived" },
};

const delTone: Record<DeliverableState, { tone: "neutral" | "ok" | "warn" | "info" | "pine"; label: string }> = {
  planned: { tone: "neutral", label: "Planned" },
  in_production: { tone: "info", label: "In production" },
  in_review: { tone: "pine", label: "In review" },
  changes_requested: { tone: "warn", label: "Changes requested" },
  approved: { tone: "ok", label: "Approved" },
  delivered: { tone: "ok", label: "Delivered" },
};

const reviewTone: Record<ReviewState, { tone: "neutral" | "ok" | "warn" | "info" | "pine" | "danger"; label: string }> = {
  draft: { tone: "neutral", label: "Draft" },
  published: { tone: "info", label: "Published" },
  feedback_open: { tone: "warn", label: "Feedback open" },
  awaiting_decision: { tone: "pine", label: "Awaiting decision" },
  approved: { tone: "ok", label: "Approved" },
  changes_requested: { tone: "warn", label: "Changes requested" },
  cancelled: { tone: "danger", label: "Cancelled" },
};

const fbTone: Record<FeedbackStatus, { tone: "neutral" | "ok" | "warn" | "info" | "pine"; label: string }> = {
  proposed: { tone: "warn", label: "Verify" },
  verified: { tone: "info", label: "Verified" },
  included_in_change_set: { tone: "pine", label: "In change set" },
  answered: { tone: "ok", label: "Answered" },
  rejected: { tone: "neutral", label: "Rejected" },
  deferred: { tone: "neutral", label: "Deferred" },
};

export function ProjectBadge({ state }: { state: ProjectState }) {
  const t = projectTone[state];
  return <Badge tone={t.tone}>{t.label}</Badge>;
}

export function DeliverableBadge({ state }: { state: DeliverableState }) {
  const t = delTone[state];
  return <Badge tone={t.tone}>{t.label}</Badge>;
}

export function ReviewBadge({ state }: { state: ReviewState }) {
  const t = reviewTone[state];
  return <Badge tone={t.tone}>{t.label}</Badge>;
}

export function FeedbackBadge({ status }: { status: FeedbackStatus }) {
  const t = fbTone[status];
  return <Badge tone={t.tone}>{t.label}</Badge>;
}
