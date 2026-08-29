export type ProjectState =
  | "draft"
  | "aligned"
  | "active"
  | "final_review"
  | "delivered"
  | "archived";

export type DeliverableState =
  | "planned"
  | "in_production"
  | "in_review"
  | "changes_requested"
  | "approved"
  | "delivered";

export type ReviewState =
  | "draft"
  | "published"
  | "feedback_open"
  | "awaiting_decision"
  | "approved"
  | "changes_requested"
  | "cancelled";

export type FeedbackStatus =
  | "proposed"
  | "verified"
  | "included_in_change_set"
  | "answered"
  | "rejected"
  | "deferred";

export type FeedbackType =
  | "request"
  | "observation"
  | "question"
  | "approval_signal"
  | "praise";

export type ConflictType =
  | "none"
  | "ambiguous"
  | "brief_conflict"
  | "decision_conflict"
  | "inter_feedback"
  | "potential_scope";

export type ScopeSignal = "in_scope" | "potential_change" | "unknown";

export type ChangeSetState =
  | "draft"
  | "internally_confirmed"
  | "client_confirmed"
  | "superseded"
  | "completed";

export type DecisionState = "proposed" | "accepted" | "rejected" | "superseded";

export type ContractStatus = "draft" | "approved" | "superseded";

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  leadName: string;
  leadTitle: string;
  brandColor: string;
}

export interface Client {
  id: string;
  name: string;
  description: string;
  industry: string;
  status: "active" | "archived";
  createdAt: string;
}

export interface Contact {
  id: string;
  clientId: string;
  name: string;
  email: string;
  title: string;
  isDefaultApprover: boolean;
}

export interface Project {
  id: string;
  clientId: string;
  name: string;
  projectType: string;
  state: ProjectState;
  leadName: string;
  targetDate: string;
  revisionAllowance: number;
  revisionUsed: number;
  currentContractId: string | null;
  createdAt: string;
}

export interface ContractSection {
  id: string;
  title: string;
  body: string;
  source?: string;
  confidence?: number;
}

export interface CreativeContract {
  id: string;
  projectId: string;
  versionNumber: number;
  status: ContractStatus;
  objective: string;
  audience: string;
  thesis: string;
  principles: string[];
  avoid: string[];
  deliverablesSummary: string[];
  inScope: string[];
  outOfScope: string[];
  constraints: string[];
  inputs: string[];
  missing: string[];
  approverName: string;
  revisionAllowance: number;
  approvedBy: string | null;
  approvedAt: string | null;
  createdAt: string;
}

export interface Deliverable {
  id: string;
  projectId: string;
  name: string;
  category: string;
  description: string;
  scopeText: string;
  requirements: string;
  state: DeliverableState;
  ownerName: string;
  dueDate: string;
  isRequired: boolean;
  externalDependency: "none" | "suspected" | "confirmed";
  externalNote: string | null;
  currentVersionId: string | null;
}

export interface AssetVersion {
  id: string;
  deliverableId: string;
  projectId: string;
  versionNumber: number;
  name: string;
  imageUrl: string;
  mimeType: string;
  width: number;
  height: number;
  byteSize: number;
  checksum: string;
  createdAt: string;
  note: string;
}

export interface ReviewRound {
  id: string;
  projectId: string;
  roundNumber: number;
  title: string;
  contextText: string;
  state: ReviewState;
  dueAt: string;
  publishedAt: string | null;
  approverContactId: string;
  guestToken: string;
  cancelledReason: string | null;
}

export interface ReviewItem {
  id: string;
  reviewRoundId: string;
  deliverableId: string;
  assetVersionId: string;
  displayOrder: number;
  promptText: string;
}

export interface FeedbackSource {
  id: string;
  projectId: string;
  reviewRoundId: string;
  sourceType: "general_comment" | "pin_comment" | "reply" | "pasted_text";
  authorName: string;
  authorRole: "client" | "studio" | "imported";
  assetVersionId: string | null;
  pageNumber: number | null;
  x: number | null;
  y: number | null;
  rawText: string;
  sourceLabel: string;
  createdAt: string;
}

export interface FeedbackEvidence {
  sourceId: string;
  excerpt: string;
}

export interface FeedbackItem {
  id: string;
  projectId: string;
  reviewRoundId: string;
  type: FeedbackType;
  summary: string;
  deliverableId: string | null;
  assetVersionId: string | null;
  status: FeedbackStatus;
  conflictType: ConflictType;
  scopeSignal: ScopeSignal;
  confidence: number;
  clarifyingQuestion: string | null;
  createdBy: "ai" | "human";
  evidence: FeedbackEvidence[];
  verifiedBy: string | null;
  verifiedAt: string | null;
  rejectReason: string | null;
}

export interface ChangeSet {
  id: string;
  projectId: string;
  reviewRoundId: string;
  versionNumber: number;
  state: ChangeSetState;
  clientSafeSummary: string;
  confirmedBy: string | null;
  confirmedAt: string | null;
  createdAt: string;
}

export interface ChangeSetItem {
  id: string;
  changeSetId: string;
  displayOrder: number;
  actionText: string;
  clientSafeSummary: string;
  targetDeliverableId: string | null;
  acceptanceCriterion: string;
  scopeStatus: "included" | "excluded" | "change_order_candidate";
  ownerName: string;
  sourceFeedbackIds: string[];
  resolution: "pending" | "addressed" | "declined" | "not_applicable";
  resolutionNote: string | null;
}

export interface Decision {
  id: string;
  clientId: string;
  projectId: string;
  deliverableId: string | null;
  statement: string;
  rationale: string;
  state: DecisionState;
  scope: "client" | "project" | "deliverable";
  confirmedBy: string | null;
  confirmedAt: string | null;
  sourceLabel: string;
  supersedesId: string | null;
}

export interface ApprovalSnapshot {
  id: string;
  projectId: string;
  reviewRoundId: string;
  reviewItemId: string;
  assetVersionId: string;
  deliverableId: string;
  decision: "approved" | "changes_requested";
  approverName: string;
  approverEmail: string;
  conditions: string | null;
  decidedAt: string;
}

export interface DeliveryManifest {
  id: string;
  projectId: string;
  versionNumber: number;
  state: "draft" | "published";
  publishedAt: string | null;
  acknowledgedAt: string | null;
  guestToken: string;
  notes: string;
}

export interface DeliveryItem {
  id: string;
  manifestId: string;
  deliverableId: string;
  assetVersionId: string;
  fileLabel: string;
  usageNotes: string;
}

export interface ActivityEvent {
  id: string;
  projectId: string | null;
  actor: string;
  eventType: string;
  summary: string;
  occurredAt: string;
}

export interface MemoryItem {
  id: string;
  clientId: string;
  projectId: string | null;
  kind: "fact" | "preference" | "constraint" | "creative_principle" | "scope_rule";
  statement: string;
  status: "proposed" | "current" | "outdated" | "rejected";
  sourceLabel: string;
}

export interface AppData {
  seedVersion: number;
  workspace: Workspace;
  clients: Client[];
  contacts: Contact[];
  projects: Project[];
  contracts: CreativeContract[];
  deliverables: Deliverable[];
  versions: AssetVersion[];
  reviews: ReviewRound[];
  reviewItems: ReviewItem[];
  sources: FeedbackSource[];
  feedback: FeedbackItem[];
  changeSets: ChangeSet[];
  changeItems: ChangeSetItem[];
  decisions: Decision[];
  approvals: ApprovalSnapshot[];
  manifests: DeliveryManifest[];
  deliveryItems: DeliveryItem[];
  activity: ActivityEvent[];
  memory: MemoryItem[];
}

export interface NeedItem {
  id: string;
  kind: "verify" | "changeset" | "review" | "decision" | "delivery" | "overdue";
  title: string;
  detail: string;
  href: string;
  projectId: string;
  tone: "warn" | "info" | "ok" | "danger";
}
