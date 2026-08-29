# Creative Agent OS
## Refined strategy and detailed product specification — v0.1

**Document status:** Build-ready product specification  
**Date:** 27 August 2026  
**Company concept:** Creative Agent OS  
**First product working title:** Direction Room  
**Initial market:** Independent brand designers and 2–10 person visual design studios  
**Initial job:** Turn a client brief and scattered feedback into a traceable, approved revision plan and final sign-off  

---

## 0. Executive decision

The long-term Creative Agent OS vision remains credible, but the proposed first product has been narrowed substantially.

Do **not** begin by building a general visual creative workspace, a design generator, a digital asset manager, a broad agency operating system, or a freelancer marketplace. Those categories are already crowded and increasingly bundled by Figma, Adobe, Canva, Air, Frame.io, FLORA, Kive, Ziflow, Filestage, ManyRequests, and similar products.

Build the missing decision layer between the client's intention and the creative files:

> **Direction Room turns briefs, files, comments, messages, and approvals into one living record of what the client wants, what changed, why it changed, what is in scope, and what must happen next.**

The user continues designing in Figma, Adobe, Affinity, Blender, or whichever tool they already use. Direction Room owns:

1. the agreed brief and scope;
2. the review package shown to the client;
3. feedback captured against a specific version;
4. AI-assisted reconciliation of vague, duplicated, or conflicting feedback;
5. the confirmed change set for the next round;
6. the decision history and reasons;
7. the immutable approval record and delivery manifest.

The primary value proposition is not “AI creates more work.” It is:

> **Fewer ambiguous revisions, fewer lost decisions, less scope creep, and faster client approval.**

The long-term capability marketplace remains an **earned expansion**. It becomes sensible only after the product sees real, recurring project demand for outside production skills and can produce provider-ready briefs from trusted project state.

---

# Part I — Research and strategic refinement

## 1. What the original concept got right

The attached concept contains several durable insights that should be retained:

- Chat should not be the primary product surface.
- AI should operate on structured project state rather than a long transcript.
- Assets, deliverables, versions, comments, decisions, and approvals should be first-class objects.
- Approved and rejected creative directions should persist across the project.
- AI should propose and organize; humans should retain taste, judgment, and final authority.
- High-impact external actions should require explicit human approval.
- The marketplace should begin as concierge fulfillment, not an open two-sided market.
- The moat cannot be “our model is better”; it must come from workflow ownership, decision history, trusted context, integrations, and eventually transaction data.

These ideas are preserved, but their order and initial scope have changed.

## 2. What needed correction

### 2.1 “Creative project management” is not a sufficient wedge

Generic project boards, timelines, tasks, comments, asset libraries, client portals, and approvals are already available in many combinations. Rebuilding all of them produces a wide product with no clear reason to switch.

**Correction:** Direction Room is not the studio's full project-management system. It contains only the light deliverable tracking required to support review, revision, approval, and delivery. It should integrate with general project tools later.

### 2.2 AI generation is not the defensible center

Figma is opening its canvas to agents; Canva AI 2.0 combines agentic orchestration, editable design objects, campaign generation, and persistent memory; Adobe is expanding a creative agent across Firefly and major Creative Cloud applications. FLORA, Kive, Lovart, and others already focus on multi-model creation, consistent visual systems, and campaign output.

**Correction:** V0.1 performs no autonomous visual design and does not try to replace the canvas. Its AI reads, structures, compares, reconciles, explains, and checks.

### 2.3 “Project memory” is too vague by itself

Competitors increasingly claim brand context, creative memory, asset intelligence, and persistent context. A generic “Project Brain” is no longer distinctive.

**Correction:** Memory is divided into auditable, user-visible primitives with provenance:

- **Creative Contract:** the approved brief, deliverables, constraints, approvers, and revision allowance;
- **Decision:** a specific accepted, rejected, or superseded choice and its reasoning;
- **Feedback Item:** one atomic request or observation linked to its source;
- **Change Set:** the exact, confirmed work agreed for the next version;
- **Approval Snapshot:** the version, reviewer identity, decision, and timestamp that cannot be silently rewritten.

### 2.4 A persistent agent panel would encourage chat-first behavior

An always-present agent panel risks turning the product back into ChatGPT beside a task board.

**Correction:** AI appears as contextual actions: “Draft brief,” “Reconcile feedback,” “Find conflicts,” “Check scope,” “Build change set,” and “QA this version.” A secondary “Ask this project” command can exist later, but it is not the main navigation.

### 2.5 The proposed marketplace began with services that are hard to standardize

Photography, printing, fabrication, and location-based production have subjective matching, logistics, insurance, deposits, cancellations, and dispute risk.

**Correction:** If marketplace demand is validated, begin with digitally delivered, specifiable services such as production adaptation, localization, motion rollout, deck production, and asset cleanup. Add physical and location-dependent services later.

### 2.6 Small studios will not migrate their whole stack on day one

The risk that users do not want another workspace is real. File storage and creation tools have high switching costs.

**Correction:** The product begins as an integration-friendly review and decision layer. Original working files may stay in Figma, Drive, Dropbox, Adobe, or local storage; Direction Room stores review renditions, metadata, version links, decisions, and approvals.

## 3. Competitive landscape and implication

| Category | Representative products | What they already own | Implication for Direction Room |
|---|---|---|---|
| Design canvases and agents | Figma, Canva, Adobe | Creation, editing, generation, design-system context | Do not build a canvas or general design agent |
| Generative creative workspaces | FLORA, Kive, Lovart | Multi-model generation, campaign variants, visual consistency | Do not compete on generation breadth |
| Creative DAM and operations | Air, Bynder, Artwork Flow | Asset libraries, metadata, brand governance, review, scaling | Avoid becoming a DAM; store only project-critical renditions and context |
| Proofing and approvals | Frame.io, Ziflow, Filestage | Annotations, version compare, review routing, approvals | Basic proofing is required but not the differentiation |
| Agency operating systems | ManyRequests, Bonsai-like platforms | Client portals, requests, time tracking, billing, CRM | Do not build billing, CRM, or resource planning in V0.1 |
| General work management | Asana, ClickUp, Monday, Notion, Linear | Tasks, assignments, timelines, documentation | Keep deliverable tracking light and integrate later |

The opening is not an empty category. It is a specific workflow that current categories treat as a feature:

> **Convert messy human feedback into an agreed, traceable production contract for the next version, then verify the next version against it.**

### Direct competitive risk

Air is the closest strategic overlap because it combines creative context, asset organization, review, approvals, and scaling. Frame.io is also broadening from video review into multi-format creative management. Direction Room must therefore remain sharply focused on small client-service studios, client-facing decision quality, revision scope, and cross-project client memory—not asset storage volume or channel adaptation.

## 4. Evidence of user pain

Across practitioner discussions, the repeated problems are not simply “I need comments on an image.” They are:

- feedback arrives through email, messaging apps, calls, voice notes, PDFs, and design-tool comments;
- multiple stakeholders give contradictory instructions;
- vague comments such as “make it warmer” or “make it pop” require interpretation;
- clients send changes in fragments, creating extra rounds;
- teams lose track of which version received approval;
- a previously approved decision is reopened without acknowledging its cost;
- scope changes are disguised as small revisions;
- account managers or designers must manually consolidate everything into a workable list;
- final delivery lacks a durable record of what was approved.

Proofing tools solve the location of feedback. Direction Room must solve the **meaning, agreement, and downstream consequences** of feedback.

## 5. Refined company and product thesis

### 5.1 Long-term company thesis

> Creative Agent OS becomes the coordination and transaction layer through which humans and AI complete commercial creative work.

This remains a hypothesis, not a promise. The company earns this position only if it first owns trusted project state and repeated completion workflows.

### 5.2 Initial product thesis

> Independent visual studios will pay for a client-facing system that converts fragmented feedback into confirmed change sets, preserves creative decisions across versions and projects, and reduces unplanned revision work.

### 5.3 Product category

Use plain language in marketing. Avoid leading with “OS,” “multi-agent,” or “AI workspace.”

Recommended category language:

- creative review and revision intelligence;
- the decision layer for client creative work;
- client feedback, reconciled;
- brief-to-approval memory for design studios.

### 5.4 One-line positioning

> **Turn scattered client feedback into one approved revision plan.**

### 5.5 Product promise

For independent brand designers and small visual studios juggling client revisions, Direction Room consolidates every brief, file, comment, decision, and approval into a clear record. Unlike generic proofing or project-management tools, it explains conflicts, identifies likely scope changes, creates the agreed change set for the next version, and remembers the reasoning behind creative decisions.

## 6. Initial customer and exclusions

### 6.1 Primary ideal customer profile

An independent brand/graphic designer or a 2–10 person visual studio that:

- manages 3–15 active client projects;
- produces brand identity, campaign, social, packaging, presentation, or web visual deliverables;
- uses Figma and/or Adobe plus Drive/Dropbox and email/WhatsApp/Slack;
- has at least one client review round per week;
- charges fixed project fees, retainers, or capped revision packages;
- feels financial pain when revision rounds expand;
- works with non-designer client stakeholders;
- can pay roughly US$25–100 per month for a clear operational benefit.

### 6.2 Primary buyer

- Solo designer: buys to reduce unpaid administration and look more professional.
- Studio owner or creative director: buys to control revisions, protect margins, and preserve client knowledge.

### 6.3 Primary client-side user

The client reviewer should not need a paid seat or a complex account. They receive a secure review link, verify their email when required, review a curated package, comment, and approve or request changes.

### 6.4 Not initial customers

- traditional painters whose primary value is making the artwork themselves;
- product UI teams whose workflow lives almost entirely inside Figma;
- large enterprise brand operations requiring procurement, compliance, SSO, and complex approval routing;
- video-production teams that are already deeply served by Frame.io;
- design-subscription agencies whose core need is request queues, billing, and capacity planning;
- casual creators seeking one-click generated assets.

## 7. Jobs to be done

### Functional job

When a client reviews creative work, help me turn all their reactions into one actionable, agreed revision plan tied to the right version, so my team can execute confidently and obtain defensible approval.

### Emotional job

Help me feel in control of the project rather than trapped in endless, ambiguous revision loops.

### Social job

Help my small studio present a calm, professional client experience comparable to a larger agency.

## 8. Product principles

1. **The creation tool remains the creation tool.** Direction Room coordinates decisions around the work.
2. **Every important statement has provenance.** AI output links back to comments, brief clauses, assets, or decisions.
3. **AI drafts; humans commit.** AI cannot approve, reject, change scope, or publish externally on its own.
4. **No silent overwrites.** Briefs, files, change sets, and approvals are versioned.
5. **One round, one agreed change set.** Comments remain inputs until the owner and, when desired, the client confirm the revision plan.
6. **Client friction must be lower than email.** Review links are focused, responsive, and do not require product training.
7. **Protect the designer without antagonizing the client.** Scope flags are internal until the studio chooses how to present them.
8. **Make decisions visible, not AI impressive.** The interface prioritizes work state and evidence over agent theatrics.
9. **Avoid false authority.** AI quality or compliance checks are advisory unless backed by deterministic rules.
10. **Instrument the marketplace hypothesis without building it.** Record recurring external capability needs as data.

---

# Part II — Detailed product specification

## 9. Product goals and non-goals

### 9.1 V0.1 goals

1. A studio can turn an existing client brief into a structured Creative Contract in under 15 minutes.
2. A studio can publish a versioned review package without moving its master working files.
3. A client can review and respond from a link without learning a new project-management tool.
4. The system can convert raw comments and pasted feedback into atomic, source-linked feedback items.
5. The system can identify ambiguity, duplication, conflict, reopened decisions, and likely scope changes.
6. A studio can publish a confirmed Change Set that becomes the production brief for the next version.
7. The next version can be checked against the Change Set and deterministic file requirements.
8. Final approval creates an immutable record and a delivery manifest.
9. Accepted and rejected decisions remain searchable and reusable in later projects for the same client/brand.

### 9.2 V0.1 non-goals

- visual generation or image editing;
- a node-based creative canvas;
- full task/project management, Gantt charts, or resource planning;
- CRM, proposals, contracts, invoicing, time tracking, or subscriptions for the studio's clients;
- real-time Figma/Adobe editing;
- direct WhatsApp, email inbox, Slack, or social-publishing integrations;
- video/audio proofing beyond optional feedback audio transcription;
- a general-purpose DAM;
- an open provider marketplace;
- autonomous purchasing or provider messaging;
- custom model training;
- native mobile apps;
- enterprise SSO and complex sequential approval routing.

## 10. Success metrics

### 10.1 North-star metric

**Client-approved deliverables per active paid studio per month.**

This measures completed work, not prompts, comments, or AI runs.

### 10.2 Primary outcome metrics

- median time from review publication to recorded decision;
- median owner time spent consolidating feedback per review round;
- percentage of deliverables approved within the planned revision allowance;
- average revision rounds per approved deliverable;
- percentage of approved deliverables reopened after approval;
- percentage of review rounds completed entirely inside Direction Room.

### 10.3 Activation

A workspace activates when it:

1. creates a project;
2. approves a Creative Contract;
3. publishes a review package; and
4. records the first client approval or confirmed Change Set.

Target time to activation: less than seven days after signup, and less than 30 minutes of studio-side setup excluding client response time.

### 10.4 Retention

- studio creates or imports a second project within 60 days;
- studio runs at least two review rounds in a rolling 30-day period;
- at least one returning client/brand reuses prior approved decisions.

### 10.5 Guardrails

- AI synthesis correction rate;
- false-positive scope-change rate;
- client review abandonment rate;
- time to publish a review package;
- support tickets per activated workspace;
- percentage of AI claims without valid source links: must be zero in committed records.

## 11. Roles and permissions

### 11.1 Workspace roles

| Role | Core permissions |
|---|---|
| Owner | Billing, workspace settings, members, all projects, deletion/export |
| Internal member | Create/edit projects, upload versions, synthesize feedback, publish reviews if permitted |
| Internal viewer | View projects and decisions; cannot publish or change committed records |

### 11.2 Project/client roles

| Role | Core permissions |
|---|---|
| Project lead | Full project control, confirms scope and Change Sets |
| Contributor | Uploads versions, comments, resolves assigned feedback |
| Client commenter | Views assigned review package and comments |
| Client approver | Comments and records final approve/request-changes decision |
| Client observer | View-only access to assigned review package |

### 11.3 Approval rule for V0.1

Each review package has exactly one final client approver. It may have multiple commenters. Supporting multiple approvers with sequential/parallel rules is deferred because it substantially increases state complexity and often reproduces the conflict the product is meant to solve.

## 12. Core domain objects

### 12.1 Workspace

The paying studio account. Contains members, clients, projects, branding, plan, usage, and security settings.

### 12.2 Client

The company or individual commissioning work. Contains client contacts and cross-project Brand Memory.

### 12.3 Project

A bounded engagement such as “Kumo Coffee Brand Launch.” Contains a Creative Contract, deliverables, reviews, decisions, files, and delivery records.

### 12.4 Creative Contract

A versioned, explicitly approved project specification containing:

- objective and success definition;
- audience;
- creative direction and principles;
- deliverables and required formats;
- included and excluded scope;
- constraints and “must avoid” rules;
- supplied/missing inputs;
- client decision-maker;
- review stages and revision allowance;
- deadlines and dependencies.

The Creative Contract is a product object, not a legal services contract. It may be exported and attached to the studio's legal agreement, but Direction Room does not provide legal advice.

### 12.5 Deliverable

A client-facing outcome, not an internal task. Examples: primary logo system, launch poster, packaging concept, ten social templates, landing-page visual direction.

### 12.6 Asset and Asset Version

An Asset is a logical item; an Asset Version is one immutable file rendition or external-file snapshot. A version can be uploaded or linked. Review and approval always refer to the version ID, never only the mutable asset.

### 12.7 Review Package and Review Round

A Review Package is the curated set of deliverables/versions shown together. A Review Round is one published, immutable snapshot of that package and its review settings.

### 12.8 Raw Feedback Source

An original comment, annotation, pasted message, uploaded note, or transcript. It is preserved even after AI extracts structured feedback.

### 12.9 Feedback Item

One atomic request, observation, question, or approval signal. It includes source links, target asset/deliverable, classification, confidence, and resolution state.

### 12.10 Change Set

The finite, confirmed collection of changes agreed for the next version. It is compiled from feedback items but is a separate immutable object once confirmed.

### 12.11 Decision

An accepted, rejected, or superseded choice with scope, rationale, source, proposer, confirmer, and effective date.

### 12.12 Approval Snapshot

An immutable record of who approved or requested changes, which exact version(s) they saw, the decision, optional conditions, and timestamp.

### 12.13 Delivery Manifest

The final list of approved deliverables, exact versions, file names, formats, checksums, external links, usage notes, and approval references.

## 13. Information architecture

### 13.1 Studio navigation

- Home
- Clients
- Projects
- Reviews
- Decisions
- Settings

### 13.2 Project navigation

- Overview
- Direction
- Deliverables
- Reviews
- Decisions
- Delivery

### 13.3 Deliberate omissions

There is no general task inbox, timeline, calendar, chat room, or full asset-library section in V0.1. Files are surfaced through deliverables and reviews. These omissions keep the product centered on the review loop.

## 14. End-to-end primary workflow

### 14.1 Create and align

1. Studio creates a client and project.
2. Studio pastes a brief, uploads a PDF/DOCX/TXT, or fills a concise form.
3. AI extracts a draft Creative Contract with source citations and unresolved questions.
4. Project lead edits and approves Version 1.
5. Client optionally confirms the project-facing summary through a secure link.

### 14.2 Prepare a review

1. Studio creates or selects deliverables.
2. Studio uploads a PNG/JPG/WebP/PDF rendition or adds an external link.
3. System extracts deterministic metadata and creates a version.
4. Studio chooses items, writes review context, selects commenters and one approver, and sets a due date.
5. Studio previews the exact client view and publishes.
6. The published package becomes immutable; corrections require a replacement round.

### 14.3 Collect and reconcile feedback

1. Client opens the secure link and verifies identity if required.
2. Client comments on the whole item or places pin annotations on image/PDF pages.
3. Studio may paste feedback received elsewhere; the original text is visibly labeled as imported.
4. AI converts raw sources into atomic Feedback Items.
5. AI groups duplicates and flags ambiguous, conflicting, reopened, and likely out-of-scope requests.
6. Project lead reviews every flagged item and edits classifications as needed.
7. AI compiles a draft Change Set.
8. Project lead confirms it internally and optionally asks the client approver to confirm it.

### 14.4 Execute and verify

1. Contributors work in their existing creation tools.
2. Studio uploads or links a new version.
3. Deterministic QA checks file requirements.
4. AI advisory QA compares the new version and project context against the confirmed Change Set.
5. Contributor marks each Change Set item addressed, not addressed, or intentionally declined, with a note.
6. Studio publishes the next review round.

### 14.5 Approve and deliver

1. Client approver chooses Approve or Request changes on each required deliverable.
2. Approval creates an immutable Approval Snapshot.
3. When all required deliverables are approved, the project lead creates a Delivery Manifest.
4. Studio uploads final exports or links their external locations.
5. Client receives one delivery page and acknowledgment option.
6. Relevant client/brand decisions are proposed for promotion into cross-project Brand Memory; a human chooses what persists.

## 15. State models

### 15.1 Project state

`draft → aligned → active → final_review → delivered → archived`

- `draft`: no approved Creative Contract;
- `aligned`: Creative Contract approved, no review published;
- `active`: at least one deliverable in production/review;
- `final_review`: all required deliverables submitted for final approval;
- `delivered`: Delivery Manifest published;
- `archived`: read-only except owner restore.

### 15.2 Deliverable state

`planned → in_production → in_review → changes_requested → approved → delivered`

Rules:

- only a published review can enter `in_review`;
- only an Approval Snapshot can enter `approved`;
- uploading a new version after approval does not silently keep approval; it creates an unapproved version;
- changing an approved version requires an explicit reopen action and audit event.

### 15.3 Review Round state

`draft → published → feedback_open → awaiting_decision → approved | changes_requested | cancelled`

Published contents are immutable. Cancellation records a reason and never deletes received feedback.

### 15.4 Feedback Item state

`proposed → verified → included_in_change_set | answered | rejected | deferred`

AI creates `proposed`; only a human can move an item into a committed state.

### 15.5 Change Set state

`draft → internally_confirmed → client_confirmed | superseded → completed`

Client confirmation is configurable per project. Internally confirmed Change Sets are sufficient for teams that do not want an additional client step.

### 15.6 Decision state

`proposed → accepted | rejected → superseded`

A superseding decision links to the prior decision; history is never rewritten.

## 16. Detailed screen specification

### 16.1 Home / Studio dashboard

**Purpose:** Show work requiring a decision, not generic project activity.

**Primary regions:**

- “Needs you” queue: unresolved AI flags, reviews ready to publish, feedback awaiting verification, approvals overdue;
- Active projects: client, phase, next decision, due date, approval progress;
- Recent client responses;
- Compact outcome summary: pending approvals, average response time, revision allowance at risk.

**Primary actions:** New project, open review, reconcile feedback.

**Empty state:** Explain the brief → review → change set → approval loop and offer a sample project that can be deleted.

### 16.2 Clients

**Purpose:** Organize projects and durable client/brand memory.

**Client card fields:** Name, active projects, primary contact, last activity, approved deliverables, memory status.

**Client detail tabs:** Overview, projects, contacts, brand memory, decision history.

**Brand Memory rules:**

- only human-approved facts/decisions appear;
- every item shows its originating project and source;
- items can be marked current, outdated, client-specific, or project-only;
- conflicts are displayed rather than silently merged.

### 16.3 New Project

**Step 1 — Basics:** Client, project name, project type, target completion date, project lead.

**Step 2 — Intake:** Paste text, upload PDF/DOCX/TXT, or answer seven concise prompts:

1. What is being created and why?
2. Who is it for?
3. What must be delivered?
4. What should it feel like?
5. What must be preserved or avoided?
6. Who gives final approval?
7. How many revision rounds are included?

**Step 3 — Extract:** AI shows source-linked contract sections, missing information, and uncertainty.

**Step 4 — Confirm:** Project lead edits and approves Creative Contract V1.

**Acceptance target:** A normal brief should require no more than ten meaningful corrections before approval.

### 16.4 Project Overview

**Purpose:** Answer “Where is this project blocked?” in under ten seconds.

**Sections:**

- current phase and next required decision;
- deliverable progress;
- latest review/approval status;
- open Change Set;
- missing client inputs;
- scope/revision allowance indicator;
- recent accepted/superseded decisions.

Avoid a dense activity feed. Activity is available behind “View history.”

### 16.5 Direction / Creative Contract

**Purpose:** Maintain the current agreed project truth.

**Sections:** Objective, audience, creative thesis, principles, avoid list, deliverables, scope, constraints, inputs, reviewers, process.

**Behaviors:**

- read view emphasizes the current approved version;
- edit creates a draft new version;
- comparison highlights added, changed, and removed clauses;
- approval records who committed the new version;
- AI can propose edits but cannot publish them;
- each clause can display its source and related decisions.

### 16.6 Deliverables

**Purpose:** Track client-facing outcomes without becoming a full task manager.

**Views:** List by default; compact board optional after V0.1.

**Fields:** Name, category, owner, status, due date, latest version, current review, revision count, approval state, external dependency flag.

**Deliverable detail:** Scope, requirements, versions, review history, Change Set items, decisions, final approval.

**External dependency flag:** “Needs outside capability” with a simple category and note. It does not invoke a marketplace.

### 16.7 Review Composer

**Purpose:** Curate exactly what the client will see.

**Required fields:** Review title, context/question, selected versions, approver, due date.

**Optional fields:** Commenters, reference assets, password/email verification, item order, per-item questions.

**Preflight checks:**

- every selected item has a current immutable version;
- no item is already approved unless explicitly reopened;
- approver is assigned;
- missing deterministic requirements are shown;
- unpublished changes are clearly labeled.

**Preview mode:** Pixel-identical client preview before publication.

### 16.8 Client Review Room

**Purpose:** Let a non-technical client give useful feedback with minimal friction.

**Header:** Studio branding, project, review purpose, due date, progress.

**Main area:** Large item viewer with thumbnails/navigation.

**Supported V0.1 media:** PNG, JPG/JPEG, WebP, and PDF. External Figma/Drive/Adobe links appear as secondary “Open source file” actions, not the primary proof surface.

**Feedback tools:**

- general comment;
- pin comment on an image or PDF page;
- reply thread;
- mark own comment resolved/unresolved before submission;
- explicit “I am finished commenting” action.

**Decision controls:** Approve, Request changes. Approval confirmation states the exact versions being approved.

The approver records an item-level decision for every required item in one submission. The round is `approved` only when all required items are approved; if any item requests changes, the round is `changes_requested`. Approval of an unchanged item remains valid even when another item needs revision.

**Friction rules:**

- no account creation for guest review;
- magic link plus optional one-time email verification;
- mobile-responsive commenting;
- no exposure of internal comments, AI classifications, budgets, or scope flags.

### 16.9 Feedback Inbox

**Purpose:** Bring all feedback into one triage surface.

**Columns/filters:** Source, target, type, status, confidence, conflict, scope signal, owner.

**Raw-source drawer:** Displays the original comment/message and exact extraction span.

**Bulk actions:** Verify, merge duplicates, assign, include in Change Set, answer, defer, reject with reason.

**Import feedback:** Paste text from email/WhatsApp/Slack or upload a text note. Each import requires a source label and sender. Audio transcription is P1.

### 16.10 Feedback Synthesis

**Purpose:** Help the project lead understand what the client is actually asking for.

**Output sections:**

- clear requested changes;
- questions needing clarification;
- conflicting feedback;
- reopened prior decisions;
- potential scope changes;
- approvals/praise that require no action;
- recommended client questions.

Every output item must show evidence links. The screen must never present AI synthesis as the client's verbatim words.

### 16.11 Change Set Builder

**Purpose:** Turn verified feedback into a finite production brief.

**Each item includes:** Action, target, rationale, source feedback, acceptance criterion, owner, scope status, decision impact.

**Actions:** Add/remove/reorder, split/merge, edit, mark out of scope, request clarification.

**Confirmation view:** Plain-language client-facing summary and internal production detail may differ, but both link to the same underlying items.

Client-safe wording may remove internal notes or soften terminology, but it may not omit a material action, target deliverable, acceptance criterion, or included/excluded scope outcome.

**Immutable behavior:** Confirmation creates a new Change Set version. Later edits supersede rather than overwrite it.

### 16.12 Version Upload and QA

**Purpose:** Validate that a new version is ready for review.

**Steps:**

1. select deliverable and prior version;
2. upload rendition or add external link;
3. extract file metadata;
4. map version to active Change Set;
5. run deterministic checks;
6. optionally run AI advisory review;
7. mark each Change Set item addressed, intentionally not addressed, or not applicable;
8. save version.

**QA result categories:** Pass, warning, blocking requirement failure. AI judgments can produce only Pass/Warning in V0.1; deterministic file failures may block review publication.

### 16.13 Version Compare

**V0.1:** Side-by-side current/previous views with synchronized zoom and page navigation, plus Change Set status beside the viewer.

**P1:** Overlay and pixel-difference modes for compatible static images/PDF pages.

### 16.14 Decisions

**Purpose:** Answer “What did we decide, why, and does it still apply?”

**Filters:** Project/client, accepted/rejected/superseded, scope, date, deliverable, proposer.

**Decision detail:** Statement, rationale, source, affected deliverables, confirmer, effective date, superseded decision, downstream conflicts.

**Create decision:** Manual or AI-proposed. Human confirmation required.

### 16.15 Delivery

**Purpose:** End the project with one verified record.

**Manifest builder:** Select approved versions; add file/link, format, usage notes, license/source notes, and client handoff instructions.

**Preflight:** No unapproved required deliverables; no missing files; checksums captured for uploaded files; external links tested at publication time.

**Client view:** Download/open items, view approval references, acknowledge receipt.

### 16.16 Workspace Settings

**Sections:** Studio profile/branding, members, default review rules, notification defaults, AI/privacy controls, storage/retention, billing, export/delete.

## 17. Functional requirements

Priority labels: **P0** required for private alpha; **P1** required for paid beta; **P2** post-beta.

### 17.1 Account and tenancy

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| AUTH-01 | P0 | Email/social authentication | User can sign in, sign out, reset access, and maintain a session securely |
| AUTH-02 | P0 | Multi-tenant workspaces | No request can access another workspace's data; enforced at database policy level |
| AUTH-03 | P0 | Workspace invitation | Owner can invite/revoke internal members |
| AUTH-04 | P1 | Billing plan enforcement | Active-project, storage, AI-action, and seat limits are consistently enforced |
| AUTH-05 | P1 | Account export/delete | Owner can request complete export and deletion with clear retention behavior |

### 17.2 Clients and projects

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| PROJ-01 | P0 | Create/edit/archive client | Client remains reusable across multiple projects |
| PROJ-02 | P0 | Create project | Project has lead, client, type, target date, and state |
| PROJ-03 | P0 | Project activity audit | Every committed state change records actor, time, object, and before/after reference |
| PROJ-04 | P1 | Duplicate project structure | User can copy deliverable definitions and process settings without copying client-private comments |

### 17.3 Creative Contract

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| BRIEF-01 | P0 | Intake by text/file/form | System accepts pasted text and supported documents and preserves original source |
| BRIEF-02 | P0 | Structured extraction | AI returns schema-valid sections with source references and confidence |
| BRIEF-03 | P0 | Human editing and approval | Draft cannot affect committed project memory until approved |
| BRIEF-04 | P0 | Version history | User can compare current and previous contract versions |
| BRIEF-05 | P1 | Client confirmation link | Client approver can confirm or request edits to a client-safe summary |

### 17.4 Deliverables and versions

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| DEL-01 | P0 | Create deliverable | Deliverable includes outcome, scope, required formats, owner, and due date |
| DEL-02 | P0 | Upload immutable version | File bytes and metadata cannot be replaced under the same version ID |
| DEL-03 | P0 | Add external source link | System stores provider, URL, label, and capture time; link is not treated as immutable approval evidence without a stored review rendition |
| DEL-04 | P0 | Deterministic metadata extraction | Dimensions, MIME, byte size, checksum, and PDF page count are stored when applicable |
| DEL-05 | P0 | Approval bound to version | Approval always references exact asset version IDs |
| DEL-06 | P1 | Side-by-side compare | Compatible current and previous versions can be inspected together |

### 17.5 Review and client experience

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| REV-01 | P0 | Compose multi-item review | Studio can select and order one or more versions |
| REV-02 | P0 | Immutable publication snapshot | Published content cannot be modified; replacement creates another round |
| REV-03 | P0 | Secure guest link | Token is high entropy, revocable, expirable, and never exposes unrelated project data |
| REV-04 | P0 | Pin/general comments | Client can comment on item or coordinates/page and submit feedback |
| REV-05 | P0 | One final approver | Only assigned approver can record the round decision |
| REV-06 | P0 | Approve/request changes | Decision confirmation lists exact versions and creates Approval Snapshot |
| REV-07 | P1 | Branded review page | Paid workspace can show logo, color, and custom message without hiding security indicators |
| REV-08 | P1 | Automatic reminders | Configurable reminders stop immediately after decision or link revocation |

### 17.6 Feedback intelligence

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| FB-01 | P0 | Preserve raw sources | Original source remains readable and immutable after extraction |
| FB-02 | P0 | Atomic extraction | Compound comments can produce multiple Feedback Items, each with evidence |
| FB-03 | P0 | Type classification | Request, observation, question, approval signal, or non-actionable praise |
| FB-04 | P0 | Conflict classification | Ambiguous, brief conflict, decision conflict, inter-feedback conflict, or potential scope change |
| FB-05 | P0 | Duplicate grouping | Suggested duplicates remain separate until human merges them |
| FB-06 | P0 | Human verification | No AI-created item enters a Change Set without a human commit action |
| FB-07 | P0 | Synthesis regeneration | User edits are preserved or explicitly reconciled when synthesis is rerun |
| FB-08 | P1 | Pasted external feedback | User can import text with sender, date, and source channel labels |
| FB-09 | P1 | Audio-note transcription | User can upload a supported audio note and see timestamped transcript/evidence |

### 17.7 Change Sets, decisions, and scope

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| CHG-01 | P0 | Draft Change Set | Verified feedback can be compiled into editable action items |
| CHG-02 | P0 | Acceptance criteria | Every committed change has a testable or reviewable completion statement |
| CHG-03 | P0 | Scope signal | Potential scope status is internal by default and requires human confirmation |
| CHG-04 | P0 | Versioned confirmation | Confirmed Change Set is immutable and may be superseded |
| CHG-05 | P0 | Resolution tracking | New version records disposition for every committed Change Set item |
| DEC-01 | P0 | Decision provenance | Accepted/rejected choice includes reason, scope, source, and confirmer |
| DEC-02 | P0 | Supersession | New decision can supersede an old one without deleting history |
| DEC-03 | P1 | Brand Memory promotion | Human can promote relevant project decision to client-level memory |

### 17.8 QA and delivery

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| QA-01 | P0 | Deterministic file checks | Required file type/dimensions/page count can block publication when violated |
| QA-02 | P1 | AI advisory change review | AI maps visible/evident changes to Change Set items with confidence and sources |
| QA-03 | P1 | Copy/text comparison | Extracted text can be compared with approved copy when legible; uncertain OCR is labeled |
| QA-04 | P1 | Human override | Authorized user can override a warning with a recorded reason; cannot rewrite test result |
| OUT-01 | P0 | Delivery Manifest | Manifest references only approved versions unless explicit exception is recorded |
| OUT-02 | P0 | Receipt acknowledgment | Client can acknowledge access to final delivery without altering approval |

### 17.9 Notifications and history

| ID | Priority | Requirement | Acceptance criterion |
|---|---|---|---|
| NOT-01 | P0 | Transactional email | Review published, comment received, decision recorded, and link revoked events notify correct users |
| NOT-02 | P1 | Digest | Internal user may receive one consolidated daily action digest |
| AUD-01 | P0 | Append-only audit events | Committed events cannot be edited through normal application paths |
| AUD-02 | P1 | Audit export | Owner can export project decisions, approvals, and manifests in machine-readable form |

## 18. AI capability specification

### 18.1 AI operating model

Every AI action follows:

`read scoped state → produce schema-valid proposal → validate → show evidence → human review → commit allowed objects → log event`

There is one orchestration service with specialized capabilities, not multiple autonomous agents talking to one another.

### 18.2 Memory precedence

When context conflicts, use this order:

1. current confirmed Change Set for the active round;
2. current approved Creative Contract;
3. accepted project decisions that have not been superseded;
4. current approved client/brand memory;
5. current deliverable requirements;
6. verified Feedback Items;
7. raw comments and imported messages;
8. uncommitted conversation or AI suggestions.

The model must report conflicts rather than choosing silently.

### 18.3 Capability A — Intake Extractor

**Input:** Brief sources, selected Brand Memory, project metadata.  
**Output:** Draft Creative Contract, source map, missing questions, confidence.  
**Forbidden:** Inventing deliverables, deadlines, approvals, legal terms, or creative constraints without labeling them as suggestions.

### 18.4 Capability B — Feedback Normalizer

**Input:** Raw feedback sources, reviewed versions, current contract/decisions.  
**Output:** Atomic Feedback Items.  
**Rules:** Preserve speaker intent; distinguish request from reaction; split compound statements; include short source excerpt or timestamp; do not convert praise into a task.

### 18.5 Capability C — Conflict and Scope Classifier

**Input:** Feedback Items, contract, scope, decisions, revision allowance.  
**Output:** Flags with explanation, evidence, confidence, and recommended question.  
**Important:** “Potential scope change” is a risk signal, not a billing decision.

### 18.6 Capability D — Change Set Compiler

**Input:** Human-verified Feedback Items.  
**Output:** Draft actionable changes with target, rationale, acceptance criterion, dependencies, and source IDs.  
**Forbidden:** Omitting verified feedback without listing it under deferred/rejected/question.

### 18.7 Capability E — Version QA Advisor

**Input:** Prior/current review renditions, confirmed Change Set, contract, selected decisions.  
**Output:** Per-item likely addressed/not evident/possibly contradicted, with confidence and visible evidence.  
**Forbidden:** Declaring subjective creative quality, legal compliance, trademark safety, or accessibility compliance as fact.

### 18.8 Capability F — Decision Recorder

**Input:** Human-confirmed outcome and relevant evidence.  
**Output:** Draft decision statement, rationale, scope, affected deliverables, and supersession candidate.  
**Commit rule:** Human must accept or edit before storage as an accepted/rejected decision.

### 18.9 Capability G — Project Query

**P1 secondary feature.** Answers project questions using only authorized state and always cites internal objects. Example: “Why did we stop using the red gradient?” It may answer from decisions but cannot change state.

### 18.10 Required structured schema: Feedback Item

```json
{
  "type": "request | observation | question | approval_signal | praise",
  "summary": "Increase headline contrast on poster A",
  "target": {
    "deliverable_id": "uuid-or-null",
    "asset_version_id": "uuid-or-null",
    "region_ref": "pin-or-page-ref-or-null"
  },
  "evidence": [
    {
      "source_id": "uuid",
      "start_offset": 18,
      "end_offset": 67,
      "short_excerpt": "the headline feels difficult to read"
    }
  ],
  "classifications": {
    "ambiguous": false,
    "duplicate_group": null,
    "conflict_type": "none",
    "scope_signal": "in_scope | potential_change | unknown"
  },
  "confidence": 0.91,
  "clarifying_question": null
}
```

### 18.11 Required structured schema: Change Set Item

```json
{
  "action": "Increase contrast between the headline and background",
  "target_deliverable_id": "uuid",
  "acceptance_criterion": "Headline passes the agreed visual check at review size",
  "source_feedback_item_ids": ["uuid"],
  "related_decision_ids": [],
  "scope_status": "included | excluded | change_order_candidate",
  "owner_id": "uuid-or-null",
  "dependencies": [],
  "client_safe_summary": "Improve headline readability"
}
```

### 18.12 Confidence and human review policy

- `0.85–1.00`: Show as high-confidence draft; still not committed.
- `0.60–0.84`: Show “Verify” state prominently.
- `<0.60`: Place under “Needs interpretation” and generate a clarifying question.
- Any conflict or scope flag requires explicit human resolution regardless of confidence.

### 18.13 Evaluation set

Before paid beta, build a de-identified or synthetic test set covering at least:

- vague aesthetic feedback;
- one comment containing multiple changes;
- two stakeholders contradicting one another;
- a request reopening an accepted decision;
- a genuine scope addition;
- praise with no requested change;
- a request tied to the wrong asset;
- multilingual feedback with English project records;
- OCR uncertainty;
- malicious instructions embedded in an uploaded document.

Measure extraction completeness, atomicity, evidence accuracy, conflict recall, scope precision, and human edit distance. Do not ship model changes without regression checks on this set.

## 19. AI safety and trust requirements

1. Treat all uploaded/pasted content as untrusted data, not system instructions.
2. Keep workspace and project authorization outside the model.
3. Never pass data from one workspace into another workspace's model context.
4. Use schema-constrained outputs and server-side validation.
5. Reject source IDs not present in the request context.
6. Store AI run metadata, schema version, capability version, input object references, cost, and outcome—not hidden chain-of-thought.
7. Provide a visible way to report a wrong synthesis.
8. Do not use customer assets to train shared models without separate explicit opt-in.
9. Use provider settings that minimize retention where available; document exceptions.
10. Block autonomous publishing, messaging, purchasing, deleting, or approving in V0.1.

## 20. Data model

Use PostgreSQL UUID primary keys, UTC timestamps, soft deletion where recovery is required, and append-only records for committed review/approval history. Every tenant-owned row includes `workspace_id` directly or through a provably constrained parent relationship.

### 20.1 Identity and tenancy

#### `profiles`

- `id` (references auth user)
- `display_name`
- `avatar_url`
- `locale`
- `timezone`
- `created_at`, `updated_at`

#### `workspaces`

- `id`
- `name`
- `slug`
- `logo_asset_id`
- `brand_color`
- `plan_code`
- `retention_policy_days`
- `created_by`
- timestamps

#### `workspace_members`

- `workspace_id`
- `user_id`
- `role` (`owner`, `member`, `viewer`)
- `status`
- `invited_by`, `joined_at`
- unique (`workspace_id`, `user_id`)

### 20.2 Clients and access

#### `clients`

- `id`, `workspace_id`
- `name`
- `description`
- `status`
- `primary_contact_id`
- timestamps, `archived_at`

#### `client_contacts`

- `id`, `workspace_id`, `client_id`
- `name`, `email`, `title`
- `is_default_approver`
- `status`
- timestamps

Do not create product accounts for contacts until needed. Guest identity can be represented by a verified contact record plus review access grant.

### 20.3 Projects and membership

#### `projects`

- `id`, `workspace_id`, `client_id`
- `name`, `project_type`
- `state`
- `project_lead_user_id`
- `target_date`
- `revision_allowance`
- `revision_count_policy` (`per_project`, `per_deliverable`, `manual`)
- `current_contract_version_id`
- timestamps, `archived_at`

#### `project_members`

- `project_id`, `workspace_id`
- `user_id`
- `role` (`lead`, `contributor`, `viewer`)
- unique (`project_id`, `user_id`)

### 20.4 Creative Contract and memory

#### `source_documents`

- `id`, `workspace_id`, `project_id`
- `source_type` (`paste`, `upload`, `form`, `external_import`)
- `asset_version_id` nullable
- `raw_text` or encrypted text reference
- `source_label`, `author_label`, `source_date`
- `content_hash`
- timestamps

#### `creative_contracts`

- `id`, `workspace_id`, `project_id`
- `version_number`
- `status` (`draft`, `approved`, `superseded`)
- `structured_content` JSONB validated against versioned schema
- `schema_version`
- `created_by`, `approved_by`, `approved_at`
- `supersedes_contract_id`
- `content_hash`
- timestamps

#### `contract_evidence`

- `id`, `workspace_id`
- `contract_id`
- `json_pointer` (section/field in structured content)
- `source_document_id`
- `start_offset`, `end_offset`
- `confidence`

#### `memory_items`

- `id`, `workspace_id`, `client_id`
- `project_id` nullable
- `kind` (`fact`, `preference`, `constraint`, `creative_principle`, `scope_rule`)
- `statement`
- `status` (`proposed`, `current`, `outdated`, `rejected`)
- `scope` (`client`, `brand`, `project`)
- `source_object_type`, `source_object_id`
- `confirmed_by`, `confirmed_at`
- `valid_from`, `valid_to`
- timestamps

Do not treat vector embeddings as authoritative memory. They may assist retrieval but committed `memory_items` remain the source of truth.

### 20.5 Deliverables and assets

#### `deliverables`

- `id`, `workspace_id`, `project_id`
- `name`, `description`, `category`
- `scope_text`
- `requirements` JSONB
- `state`
- `owner_user_id`
- `due_date`
- `is_required`
- `external_dependency_status` (`none`, `suspected`, `confirmed`)
- `external_capability_category` nullable
- `external_capability_note` nullable
- `approved_asset_version_id` nullable
- timestamps

#### `assets`

- `id`, `workspace_id`, `project_id`
- `deliverable_id` nullable
- `name`, `asset_type`
- `source_provider` (`upload`, `figma`, `drive`, `dropbox`, `adobe`, `url`)
- `source_url` nullable
- timestamps, `archived_at`

#### `asset_versions`

- `id`, `workspace_id`, `asset_id`
- `version_number`
- `storage_path` nullable
- `external_url` nullable
- `rendition_storage_path` nullable
- `mime_type`, `byte_size`, `checksum_sha256`
- `width`, `height`, `page_count`
- `extracted_text` nullable
- `created_by`, `created_at`
- `supersedes_version_id` nullable
- `change_set_id` nullable
- `metadata` JSONB

No update endpoint may replace file bytes, checksum, or version number. Metadata corrections are audited.

### 20.6 Reviews and guest access

#### `review_rounds`

- `id`, `workspace_id`, `project_id`
- `round_number`
- `title`, `context_text`
- `state`
- `due_at`
- `published_by`, `published_at`
- `client_approver_contact_id`
- `requires_email_verification`
- `cancelled_by`, `cancelled_at`, `cancellation_reason`
- `supersedes_review_round_id` nullable
- timestamps

#### `review_items`

- `id`, `workspace_id`, `review_round_id`
- `deliverable_id`, `asset_version_id`
- `display_order`
- `prompt_text` nullable
- `snapshot_metadata` JSONB
- unique (`review_round_id`, `asset_version_id`)

#### `review_participants`

- `id`, `workspace_id`, `review_round_id`
- `client_contact_id`
- `role` (`commenter`, `approver`, `observer`)
- `status`
- `invited_at`, `completed_at`

#### `review_access_tokens`

- `id`, `workspace_id`, `review_round_id`, `participant_id`
- `token_hash` (never store raw token)
- `expires_at`, `revoked_at`
- `verification_status`
- `last_accessed_at`

#### `feedback_sources`

- `id`, `workspace_id`, `project_id`, `review_round_id` nullable
- `source_type` (`general_comment`, `pin_comment`, `reply`, `pasted_text`, `transcript`)
- `author_user_id` nullable
- `author_contact_id` nullable
- `author_label` nullable
- `asset_version_id` nullable
- `page_number`, `x_normalized`, `y_normalized` nullable
- `raw_text` (immutable after submission)
- `source_date`
- `parent_source_id` nullable
- `created_at`

Comments cannot be edited after submission. The author adds a correction or reply as a new source, preserving the evidence chain. Evidence offsets use Unicode code-point positions in the canonical stored string, not byte offsets.

### 20.7 Structured feedback and change control

#### `feedback_items`

- `id`, `workspace_id`, `project_id`, `review_round_id`
- `type`, `summary`
- `deliverable_id`, `asset_version_id`, `region_ref` nullable
- `status`
- `ambiguity_flag`
- `conflict_type`
- `scope_signal`
- `confidence`
- `clarifying_question` nullable
- `created_by_type` (`ai`, `human`)
- `verified_by`, `verified_at`
- timestamps

#### `feedback_item_evidence`

- `id`, `workspace_id`, `feedback_item_id`, `feedback_source_id`
- `start_offset`, `end_offset`, `short_excerpt`

#### `feedback_duplicate_groups`

- `id`, `workspace_id`, `project_id`
- `canonical_feedback_item_id`
- `confirmed_by`, `confirmed_at`

#### `feedback_duplicate_members`

- `group_id`, `feedback_item_id`

#### `change_sets`

- `id`, `workspace_id`, `project_id`, `review_round_id`
- `version_number`
- `state`
- `client_safe_summary`
- `internally_confirmed_by`, `internally_confirmed_at`
- `client_confirmed_by_contact_id`, `client_confirmed_at`
- `supersedes_change_set_id` nullable
- timestamps

#### `change_set_items`

- `id`, `workspace_id`, `change_set_id`
- `display_order`
- `action_text`
- `client_safe_summary`
- `target_deliverable_id`
- `target_asset_version_id` nullable
- `acceptance_criterion`
- `scope_status`
- `owner_user_id` nullable
- `resolution_status` (`pending`, `addressed`, `declined`, `not_applicable`)
- `resolution_note` nullable
- timestamps

#### `change_set_item_sources`

- `change_set_item_id`, `feedback_item_id`

### 20.8 Decisions and approvals

#### `decisions`

- `id`, `workspace_id`, `client_id`, `project_id`
- `deliverable_id` nullable
- `statement`, `rationale`
- `state` (`proposed`, `accepted`, `rejected`, `superseded`)
- `scope` (`client`, `project`, `deliverable`)
- `proposed_by_type`, `proposed_by_id` nullable
- `confirmed_by_user_id`, `confirmed_at`
- `source_object_type`, `source_object_id`
- `supersedes_decision_id` nullable
- timestamps

#### `decision_impacts`

- `decision_id`
- `impacted_object_type`, `impacted_object_id`
- `impact_type`

#### `approval_snapshots`

- `id`, `workspace_id`, `project_id`, `review_round_id`
- `review_item_id`, `asset_version_id`, `deliverable_id`
- `decision` (`approved`, `changes_requested`)
- `approver_contact_id`
- `approver_email_snapshot`
- `conditions_text` nullable
- `decided_at`
- `review_snapshot_hash`
- `supersedes_approval_id` nullable

Approval snapshots are append-only. A later version or reopened decision creates another record.

### 20.9 QA, delivery, notifications, and operations

#### `qa_runs`

- `id`, `workspace_id`, `project_id`, `asset_version_id`
- `change_set_id` nullable
- `run_type` (`deterministic`, `ai_advisory`)
- `status`
- `capability_version`
- `result` JSONB
- `started_at`, `completed_at`

#### `delivery_manifests`

- `id`, `workspace_id`, `project_id`
- `version_number`, `state`
- `published_by`, `published_at`
- `acknowledged_by_contact_id`, `acknowledged_at`
- `supersedes_manifest_id` nullable

#### `delivery_manifest_items`

- `id`, `workspace_id`, `delivery_manifest_id`
- `deliverable_id`, `asset_version_id`, `approval_snapshot_id`
- `file_label`, `usage_notes`, `license_notes`
- `display_order`

#### `ai_runs`

- `id`, `workspace_id`, `project_id`
- `capability`, `capability_version`, `schema_version`
- `provider`, `model`
- `status`
- `input_object_refs` JSONB
- `output_object_refs` JSONB
- `token_usage`, `estimated_cost`
- `error_code` nullable
- timestamps

#### `activity_events`

- `id`, `workspace_id`, `project_id` nullable
- `actor_type`, `actor_id` nullable
- `event_type`
- `object_type`, `object_id`
- `payload` JSONB with no secrets/raw guest tokens
- `occurred_at`

#### `notifications`

- `id`, `workspace_id`
- `recipient_type`, `recipient_id`
- `channel`, `template_code`
- `object_type`, `object_id`
- `status`, `scheduled_at`, `sent_at`, `error_code`

#### `usage_events`

- `id`, `workspace_id`
- `metric_type`, `quantity`
- `object_type`, `object_id`
- `occurred_at`

### 20.10 Suggested indexes

- every foreign key;
- `projects(workspace_id, state, updated_at desc)`;
- `deliverables(project_id, state, due_date)`;
- `review_rounds(project_id, round_number desc)`;
- `feedback_items(review_round_id, status, conflict_type, scope_signal)`;
- `decisions(client_id, state, confirmed_at desc)`;
- `activity_events(workspace_id, occurred_at desc)`;
- `notifications(status, scheduled_at)`;
- unique version numbers per parent object;
- GIN indexes only on JSONB fields proven necessary by query telemetry.

## 21. API and service boundaries

Use server-side authorization for every mutation. The following routes describe behavior; implementation may use typed route handlers or server actions behind the same domain services.

### 21.1 Core routes

```text
POST   /api/workspaces
POST   /api/workspaces/:id/invitations
GET    /api/clients
POST   /api/clients
POST   /api/projects
GET    /api/projects/:id
POST   /api/projects/:id/archive
```

### 21.2 Contract routes

```text
POST   /api/projects/:id/intake-sources
POST   /api/projects/:id/contract/extract
POST   /api/projects/:id/contract/drafts
POST   /api/contracts/:id/approve
GET    /api/contracts/:id/compare/:otherId
```

### 21.3 Deliverable/version routes

```text
POST   /api/projects/:id/deliverables
PATCH  /api/deliverables/:id
POST   /api/deliverables/:id/assets
POST   /api/assets/:id/versions/upload-intent
POST   /api/assets/:id/versions/complete
GET    /api/asset-versions/:id
```

Direct-to-object-storage uploads use short-lived signed intents. Completion verifies MIME, size, checksum, and authorization before creating the version row.

### 21.4 Review routes

```text
POST   /api/projects/:id/reviews
PATCH  /api/reviews/:id
POST   /api/reviews/:id/publish
POST   /api/reviews/:id/cancel
POST   /api/reviews/:id/remind
GET    /r/:guestToken
POST   /r/:guestToken/verify
POST   /r/:guestToken/comments
POST   /r/:guestToken/decision
```

Guest routes expose a purpose-built projection, never raw internal project objects.

### 21.5 Feedback and Change Set routes

```text
POST   /api/reviews/:id/import-feedback
POST   /api/reviews/:id/synthesize
PATCH  /api/feedback-items/:id
POST   /api/feedback-items/merge
POST   /api/reviews/:id/change-sets
PATCH  /api/change-sets/:id
POST   /api/change-sets/:id/confirm-internal
POST   /api/change-sets/:id/request-client-confirmation
POST   /api/change-sets/:id/confirm-client
```

### 21.6 QA, decisions, and delivery routes

```text
POST   /api/asset-versions/:id/qa/deterministic
POST   /api/asset-versions/:id/qa/advisory
POST   /api/projects/:id/decisions
POST   /api/decisions/:id/accept
POST   /api/decisions/:id/reject
POST   /api/decisions/:id/supersede
POST   /api/projects/:id/delivery-manifests
POST   /api/delivery-manifests/:id/publish
POST   /d/:guestToken/acknowledge
```

### 21.7 Idempotency and concurrency

- Publish, approve, decide, upload-complete, AI-run-create, and delivery mutations require idempotency keys.
- Draft edits use optimistic concurrency with version/updated-at checks.
- Approval endpoint transactionally verifies review state, participant role, version IDs, and prior decision.
- Background job consumers deduplicate by object + capability version.

## 22. Domain events

Emit versioned events after successful transactions:

```text
project.created
contract.extraction_completed
contract.approved
deliverable.created
asset_version.created
review.published
review.feedback_received
review.commenting_completed
review.decision_recorded
feedback.synthesis_completed
change_set.internally_confirmed
change_set.client_confirmed
qa.completed
decision.accepted
decision.superseded
delivery_manifest.published
delivery.acknowledged
external_capability.flagged
```

Events drive notifications, analytics, AI job scheduling, and future integrations. Consumers must tolerate duplicates and unknown event fields.

## 23. Technical architecture

### 23.1 Recommended V0.1 stack

| Layer | Recommendation | Reason |
|---|---|---|
| Web app | Next.js + TypeScript + React | One language across UI and server; strong AI-assisted development ecosystem |
| UI | Tailwind CSS + accessible component primitives | Fast iteration without inventing interaction foundations |
| Database | Managed PostgreSQL | Relational integrity is essential for versions, approvals, provenance, and tenancy |
| Auth/storage/realtime | Supabase is a practical initial choice | Combines managed Postgres, auth, object storage, signed URLs, and realtime |
| Background jobs | Managed TypeScript job runner such as Trigger.dev or Inngest | Retries, observability, and asynchronous AI/file work |
| AI | Provider abstraction using schema-constrained model responses | Prevents model coupling and validates structured proposals |
| Email | Postmark or Resend | Transactional templates, deliverability, event webhooks |
| Billing | Stripe | Subscription lifecycle and metered-plan enforcement when paid beta begins |
| Analytics | PostHog or equivalent | Product events, funnels, feature flags, session diagnostics with privacy controls |
| Errors | Sentry or equivalent | Client/server error traces and release health |

Do not add a separate microservice architecture for V0.1. Keep a modular monolith with clear domain services and background workers.

### 23.2 Logical architecture

```text
Browser / Guest Review
        ↓
Next.js application
        ↓
Domain services + authorization
        ↓
PostgreSQL ── Object storage
        ↓             ↓
Event outbox     File processing jobs
        ↓             ↓
Job runner ─── AI gateway / email / analytics
```

### 23.3 Required application modules

- Identity and tenancy
- Clients and projects
- Contract and memory
- Deliverables and assets
- Reviews and guest access
- Feedback intelligence
- Change control and decisions
- QA and delivery
- Notifications
- Billing/usage
- Audit and analytics

### 23.4 Transactional outbox

Committed domain event records should be written in the same database transaction as the state change. A worker publishes/processes them later. This prevents “approval saved but notification/event lost” failures.

### 23.5 File pipeline

1. Browser requests signed upload intent.
2. Server validates declared MIME, size, plan limit, and project access.
3. Browser uploads directly to private storage.
4. Completion job computes/validates checksum and true file signature.
5. Malware scanning is applied before file becomes reviewable.
6. Image thumbnails and PDF page renditions are generated.
7. Metadata/OCR extraction runs asynchronously.
8. Asset Version becomes `ready` or `failed` with retry/support path.

V0.1 limits should be conservative: static images up to 50 MB, PDFs up to 200 MB and 100 pages, with configurable workspace quota. Reject encrypted PDFs initially unless a safe password flow is built.

### 23.6 Review rendering

- Store normalized coordinates for pins (`0..1`) so annotations survive responsive sizing.
- Render PDFs page-by-page with lazy loading.
- Preserve original file for download only when allowed; serve review renditions through short-lived URLs.
- Do not proxy arbitrary external websites inside the guest page.
- Apply content security policy and sanitized text rendering.

### 23.7 AI gateway

The gateway receives only object IDs and scoped context assembled server-side. It:

- applies a capability-specific prompt and JSON schema;
- strips or escapes untrusted content boundaries;
- calls the chosen provider/model;
- validates schema and source references;
- retries only safe transient failures;
- stores cost/latency/status;
- returns a draft object for human review.

Prompts and schemas are version-controlled in the codebase. Provider responses are never written directly into committed domain tables.

### 23.8 Retrieval

Start with deterministic relational retrieval: current contract, current decisions, target deliverable, active Change Set, and review sources. Add embeddings only when cross-project search volume makes them useful.

If vector retrieval is added:

- use it to propose candidate context;
- filter by workspace/client/project before similarity search;
- re-check authorization on every result;
- never treat similarity as evidence of an approved decision.

### 23.9 Integration strategy

**V0.1:** External URLs plus uploaded review renditions.  
**P1:** Google Drive picker/import and one-way link metadata refresh.  
**P1/P2:** Figma file/frame picker and preview snapshots.  
**P2:** Drive change notifications, Figma/Adobe/Dropbox deeper sync, and outbound project-tool events.

Integrations should pull only the minimum required file/rendition. Direction Room must not claim that a mutable external URL is an immutable review version.

## 24. Security, privacy, and intellectual property

### 24.1 Baseline requirements

- private by default;
- TLS in transit and managed encryption at rest;
- row-level/middleware tenant isolation with automated policy tests;
- least-privilege service credentials;
- high-entropy guest tokens stored only as hashes;
- configurable link expiry and immediate revocation;
- signed, short-lived asset URLs;
- rate limiting on auth, guest verification, comments, and AI endpoints;
- CSRF protection where applicable and strict SameSite cookie policy;
- file signature verification and malware scanning;
- append-only approval/audit records;
- encrypted secrets in managed secret storage;
- production data excluded from local development.

### 24.2 Client confidentiality

Marketing and product copy must state clearly:

- who owns uploaded content;
- whether model providers retain inputs;
- whether content trains any model;
- how long deleted files remain in backups;
- how workspace owners can export/delete data.

No customer content should train shared models by default.

### 24.3 AI-specific controls

- use provider no-training settings and minimized retention where available;
- set model request storage off when supported and compatible with the feature;
- do not send original master files when a reduced review rendition is sufficient;
- redact secrets/personally sensitive fields not required for the capability;
- log provider/model and policy version for audit;
- allow workspace owner to disable AI advisory QA while retaining core review workflow.

### 24.4 Approval integrity

An Approval Snapshot must include:

- exact review round and item IDs;
- exact asset version IDs and checksums where stored;
- approver verified email snapshot;
- decision and any conditions;
- timestamp;
- hash of the review snapshot.

The product should describe this as a reliable project record, not a legally binding electronic signature unless the required jurisdictional/legal controls are later implemented.

### 24.5 Threat scenarios to test

- guessed or leaked guest token;
- guest attempting to enumerate project IDs;
- removed member using old URLs;
- cross-workspace object ID substitution;
- prompt injection in brief/PDF/feedback;
- malicious file disguised by extension;
- replayed approval request;
- publish endpoint double submission;
- AI output referencing nonexistent evidence;
- external link changing after approval;
- deleted contact trying to reuse an old review link.

## 25. Non-functional requirements

### Performance

- dashboard and project reads: p95 server response under 500 ms excluding cold starts;
- client review initial usable view: under 2.5 s on typical broadband for optimized rendition;
- comment submission acknowledgment: under 500 ms;
- upload progress visible immediately;
- AI actions asynchronous after 10 s with clear progress and cancellation/retry state.

### Availability and recovery

- paid beta target: 99.5% monthly application availability excluding planned maintenance;
- point-in-time database recovery enabled;
- object versioning or protected deletion for recovery window;
- documented recovery procedure tested before paid launch;
- approval/audit tables included in backup verification.

### Accessibility

- target WCAG 2.2 AA for core studio and guest review flows;
- full keyboard access for review navigation and comments;
- visible focus states;
- contrast-compliant UI;
- annotation alternatives for users unable to place a pin;
- no decision conveyed only by color.

### Internationalization

- UTF-8 throughout;
- locale-aware dates/times;
- workspace timezone with viewer-local display option;
- content may be multilingual even if V0.1 interface is English;
- AI must preserve original-language evidence and label translations.

### Observability

- structured logs with request/job IDs, never raw tokens;
- latency/error/cost dashboards by AI capability;
- file-job failure queue;
- notification delivery/webhook monitoring;
- alerts for cross-tenant authorization failures, unusual guest attempts, and approval errors.

## 26. Analytics event plan

Track the minimum events needed to validate value:

```text
workspace_created
project_created
intake_source_added
contract_extraction_started/completed
contract_approved
deliverable_created
asset_version_uploaded
review_draft_created
review_published
guest_review_opened
guest_comment_added
guest_commenting_completed
review_decision_recorded
feedback_synthesis_started/completed
feedback_item_edited/verified
scope_flag_confirmed/dismissed
change_set_confirmed
qa_run_completed
deliverable_approved
approval_reopened
delivery_manifest_published
delivery_acknowledged
external_capability_flagged
second_project_created
subscription_started/cancelled
```

Event properties should include plan, project type, studio size band, counts, elapsed time, and feature version—not raw client content.

## 27. Pricing and packaging hypothesis

Do not charge per external reviewer. Client participation must be frictionless.

### Free

- 1 active project;
- 2 published review rounds per month;
- 1 internal user;
- unlimited client reviewers;
- 1 GB storage;
- limited AI actions;
- Direction Room branding.

### Solo — hypothesis: US$29/month

- 5 active projects;
- 1 internal user;
- unlimited client reviewers;
- 20 GB storage;
- practical AI-action allowance;
- contract, feedback synthesis, Change Sets, decisions, delivery manifests;
- studio logo on review page.

### Studio — hypothesis: US$79/month

- 25 active projects;
- 5 internal users;
- unlimited client reviewers;
- 100 GB storage;
- higher AI allowance;
- custom review branding;
- client Brand Memory;
- automated reminders, audit exports, P1 integrations.

### Later Agency plan

Custom domains, advanced roles, multiple approvers/workflows, retention policies, API/webhooks, and security controls. Do not build this plan before real demand.

### Pricing principles

- AI costs should be bundled into understandable product limits initially, not exposed as a confusing token economy.
- Overage should pause optional AI actions or offer a clear add-on; it must never block access to existing approvals/files.
- Validate willingness to pay through paid pilots before finalizing public prices.

## 28. Unit economics to monitor

- AI cost per activated project;
- storage and rendition cost per active project;
- email/transcription cost per review round;
- gross margin per plan;
- support minutes per activated workspace;
- acquisition cost by channel;
- paid conversion from activated free workspace;
- monthly and project-cycle churn.

Because V0.1 does not generate images/video, inference costs should remain materially lower than a creation platform. The main risk is support and low willingness to pay, not model cost.

## 29. Validation before serious engineering

### 29.1 Research sample

Interview at least:

- 6 solo brand/graphic designers;
- 6 owners/leads at 2–10 person studios;
- 4 client-side reviewers who regularly approve creative work.

Do not ask only whether the idea sounds good. Request a walkthrough of the last real project from brief to final delivery and inspect anonymized artifacts where permitted.

### 29.2 Questions to answer

- Where did the original brief live?
- How many people gave feedback and in which channels?
- Who consolidated it and how long did that take?
- Which comments were ambiguous or conflicting?
- How were included revisions defined and counted?
- When did scope expand, and was extra work billed?
- What constituted approval?
- Could the studio prove which version was approved?
- Which tool did the client refuse or avoid?
- Would the studio replace proofing, add Direction Room beside it, or not use another tool?
- What is the monetary cost of one extra unplanned revision round?

### 29.3 Concierge simulation

Before building AI automation, run 5–10 real review rounds manually:

1. collect the brief and files;
2. create the Creative Contract by hand with AI assistance outside the product;
3. send a simple review link/prototype;
4. normalize client feedback into atomic items;
5. show conflicts and scope signals to the designer;
6. compile and confirm a Change Set;
7. compare the next version to the Change Set;
8. measure time saved and corrections required.

This reveals whether users value the decision intelligence or merely the polished portal.

### 29.4 Private-alpha success gates

Proceed to paid beta only if, across at least 8 live projects:

- at least 70% of published review links receive a completed client response;
- at least 60% of studios use synthesis/change sets on a second review round;
- median owner consolidation time falls by at least 30% from stated baseline;
- fewer than 10% of committed Feedback Items contain unsupported or materially wrong interpretations after human review;
- at least 5 testers state a concrete willingness to pay US$29 or more monthly or equivalent per-project price;
- at least 3 studios bring a second project/client into the system.

### 29.5 Pivot/kill signals

Reconsider the product if:

- clients consistently return to email/WhatsApp despite a simpler review link;
- designers treat AI synthesis as extra checking work rather than saved work;
- users value only file annotation, making the product an undifferentiated proofing tool;
- scope signals are too subjective to trust;
- studios will not pay enough to support acquisition and service costs;
- the workflow is too infrequent to create retention.

## 30. Delivery roadmap

The roadmap is capability-gated, not date-promised. For a solo founder relying heavily on AI assistance, a credible private alpha is more likely a **12–16 week focused build** after validation than a weekend project. Reduce scope further if working part-time.

### Phase 0 — Concierge validation

**Deliverables:** Interview notes, workflow map, clickable client review prototype, manual synthesis template, baseline metrics, decision on target segment.

**Do not build:** Authentication, billing, generalized AI orchestration, integrations.

### Phase 1 — Technical foundation

**Deliverables:** Repository, CI, environments, auth, workspace tenancy, database migrations, row-level security tests, private file upload, audit/event foundation, observability.

### Phase 2 — Brief and deliverables

**Deliverables:** Clients/projects, intake sources, AI contract extraction, human approval/versioning, deliverable list, image/PDF upload and rendition.

### Phase 3 — Review loop

**Deliverables:** Review composer, secure guest page, comments/pins, approver decision, Approval Snapshot, notifications.

At this point the product must be usable without AI feedback synthesis.

### Phase 4 — Feedback intelligence

**Deliverables:** Atomic extraction, evidence viewer, conflict/scope flags, human verification, Change Set builder, confirmed Change Set.

### Phase 5 — Version verification and delivery

**Deliverables:** New-version mapping, deterministic QA, limited advisory QA, resolution status, Delivery Manifest, client acknowledgment.

### Phase 6 — Paid beta

**Deliverables:** Plan limits, Stripe, branded review page, reminder rules, export/delete, product analytics, onboarding, support/admin tools, security review.

### Post-beta candidates, in evidence order

1. Pasted external feedback and audio transcription;
2. Google Drive import;
3. Figma frame/file picker and review snapshot;
4. client Brand Memory promotion;
5. project-tool outbound webhooks;
6. multiple approval stages;
7. pixel/overlay compare;
8. “Ask this project” cited query;
9. external capability concierge.

## 31. Engineering epics and build order

### Epic A — Foundation

- typed environment configuration;
- auth and workspace creation;
- database schema/migrations;
- tenant policies and tests;
- audit outbox;
- error/analytics setup;
- feature flags.

### Epic B — File safety

- signed uploads;
- file signature/size validation;
- checksum and immutable versioning;
- image/PDF renditions;
- private asset serving;
- background job retries and admin failure view.

### Epic C — Project truth

- clients/projects;
- source intake;
- Creative Contract schema/editor;
- extraction capability;
- evidence links;
- contract approval/compare.

### Epic D — Deliverables and review

- deliverables;
- review composer/preflight;
- guest access/verification;
- image/PDF viewer;
- comments and pin annotations;
- final approver decision;
- Approval Snapshot.

### Epic E — Feedback intelligence

- Feedback Item schemas;
- AI extraction;
- evidence validation;
- synthesis/triage UI;
- conflict/scope review;
- human commit paths.

### Epic F — Change control

- Change Set builder/versioning;
- internal/client confirmation;
- version resolution tracking;
- decisions and supersession.

### Epic G — QA and delivery

- deterministic rule engine;
- advisory QA;
- version compare;
- Delivery Manifest;
- receipt acknowledgment.

### Epic H — Commercial readiness

- pricing/limits;
- subscription lifecycle;
- review branding;
- exports/deletion;
- onboarding/support tools;
- security and accessibility review;
- production runbooks.

## 32. Testing strategy

### Unit tests

- state transitions;
- permission rules;
- version numbering;
- approval invariants;
- Change Set supersession;
- AI output/source validation;
- deterministic file rules;
- plan limits.

### Integration tests

- direct upload → processing → reviewable version;
- contract extraction → edit → approval;
- review publish → guest access → feedback → decision;
- feedback synthesis → verification → Change Set;
- approval → delivery manifest;
- transactional outbox and notification idempotency.

### Security tests

- cross-workspace ID substitution for every object type;
- expired/revoked/replayed guest tokens;
- role downgrade/revocation;
- malicious files;
- stored XSS in comments/briefs/client names;
- prompt injection and fake source IDs;
- rate-limit behavior;
- signed URL expiration.

### End-to-end fixtures

Maintain at least three representative fixture projects:

1. Coffee-shop brand launch with static images and PDF;
2. Multi-stakeholder social campaign with conflicting comments;
3. Small packaging project with a real scope-change request and approval reopen.

### AI regression tests

Run the fixed evaluation set on every prompt/schema/model change. A new model is not promoted on subjective impressions; it must meet or exceed evidence accuracy and human edit-distance thresholds without unacceptable cost/latency regression.

## 33. Definition of done for private alpha

Private alpha is ready only when:

- a new studio can complete the full primary workflow without database/manual intervention;
- all P0 requirements have automated tests for critical paths;
- tenant-isolation tests pass;
- guest links can be expired/revoked;
- published review snapshots and approvals are immutable;
- AI proposals always display source evidence;
- unsupported AI source references are rejected server-side;
- backup/recovery is configured and one restore test has succeeded;
- core pages meet keyboard/contrast requirements;
- errors and failed background jobs are visible to the operator;
- privacy/terms explain model handling and ownership;
- at least two real projects have completed end to end in a staging/alpha environment.

## 34. Launch checklist for paid beta

- validation gates met;
- production security review completed;
- plan limits and billing lifecycle tested, including failed payment and cancellation;
- client data export/delete tested;
- incident response and support contact established;
- storage/file/AI usage alerts configured;
- model/provider fallback behavior tested;
- email domain authentication and bounce/complaint handling configured;
- accessibility pass on guest review flow;
- review links render on current desktop/mobile browsers;
- pricing page states limits plainly;
- no marketplace or autonomous-agent promises in launch messaging.

## 35. Marketplace expansion strategy

### 35.1 Why the path can work

Direction Room eventually knows:

- the deliverable and format;
- current brand/project direction;
- approved and rejected decisions;
- required deadline;
- supplied assets;
- confirmed Change Set;
- missing capability.

That state can produce a better service request than an empty marketplace search form.

### 35.2 Why it must wait

A marketplace without repeated demand becomes a costly directory. Provider quality, disputes, payments, rights, confidentiality, availability, and geography introduce an entirely different business. The workspace must generate the demand rather than depending on the marketplace to attract users.

### 35.3 Instrument now, build later

The `external_dependency_status`, capability category, note, project type, budget band (optional later), and outcome should be logged. No provider profile or order table is needed in V0.1.

### 35.4 Entry criteria for concierge fulfillment

Begin manual concierge tests only when:

- at least 25% of active projects flag an external capability;
- the top three categories account for at least 60% of flags;
- at least 20 users explicitly ask for help sourcing or delegating;
- project state is complete enough to generate a usable provider brief;
- users accept a clear service fee or referral economics.

### 35.5 Recommended first categories

Prioritize digitally delivered, objectively specifiable work:

1. production adaptation and resizing;
2. localization/layout adaptation;
3. presentation/deck production;
4. motion rollout from approved static direction;
5. file cleanup and export preparation;
6. simple web implementation from approved design.

Defer photographers, printers, fabricators, and location production until the transaction system can handle regional matching, quotes, deposits, logistics, cancellations, and disputes.

### 35.6 Staged marketplace path

#### Stage A — Referral/concierge

Operator manually matches a small trusted provider pool. Direction Room exports a structured brief and records the outcome.

#### Stage B — Curated provider network

Invite-only providers receive standardized requests. Quotes and delivery remain supervised. Human approves every match and spend.

#### Stage C — Managed marketplace

Provider availability, structured proposals, orders, milestone payments, delivery, dispute handling, and reviews. Recommended initial take-rate hypothesis: 10–15%, validated against provider margins and buyer value.

#### Stage D — Capability registry

Human services, software tools, and AI services expose typed capabilities with input/output schema, price, SLA, risk class, and permission requirements.

#### Stage E — Agentic procurement

Only after predictable quality and controls. Workspace sets budgets and permissions. The system may prepare or automatically execute low-risk purchases within explicit limits; human approval remains mandatory for subjective human services until evidence supports otherwise.

### 35.7 Marketplace health metrics

- structured requests per 100 active projects;
- request fill rate;
- time to first qualified proposal;
- quote acceptance rate;
- on-time delivery;
- revision/dispute rate;
- repeat buyer/provider rate;
- gross merchandise value and take rate;
- contribution margin after support/disputes;
- percentage of provider outputs approved through Direction Room.

## 36. Long-term platform architecture, intentionally not V0.1

If the marketplace/platform path is earned, add:

```text
capabilities
capability_versions
providers
provider_capabilities
service_requests
request_requirements
proposals
orders
order_milestones
payments
deliveries
disputes
reviews
tool_connections
permission_policies
budget_policies
```

Each capability should declare:

- typed inputs and outputs;
- required project context;
- data-access scope;
- expected cost/range;
- expected latency/SLA;
- quality/evaluation method;
- whether result is reversible;
- risk class;
- required human approval stage.

Do not put these tables into the initial production schema merely to appear future-proof. Premature abstractions will slow the actual review product.

## 37. Moat and defensibility, stated honestly

### Near-term differentiation

- unusually strong feedback reconciliation and evidence UX;
- client-specific revision/scope workflow for small studios;
- professional, low-friction client confirmation;
- integrations that preserve provenance across creation tools.

### Potential compounding advantages

- decision and revision history across recurring client relationships;
- studio-specific interpretation of client feedback;
- evaluation data showing which synthesis/QA suggestions humans accept;
- workflow templates learned from completed project types;
- trusted provider performance tied to actual approved outcomes;
- eventual demand liquidity for specialized creative capabilities.

### What is not a moat

- model access;
- generic chat;
- a Kanban board;
- image generation;
- storing brand colors and fonts;
- adding the word “agent” to common automation.

### Strategic defense against incumbent bundling

Direction Room should be more neutral across tools, more client-service-specific, easier for small studios, and more rigorous about scope/decision provenance than canvas-native or enterprise systems. If it becomes only a nicer review viewer, incumbents can erase the differentiation.

## 38. Major risks and mitigations

| Risk | Why it matters | Mitigation / test |
|---|---|---|
| Another workspace is rejected | Clients/studios already have too many tools | Guest-first links, imports, shallow integrations, measure review completion |
| Proofing incumbents add AI synthesis | Feature can be copied | Go deeper on scope, decision graph, client memory, and small-studio workflow |
| AI misinterprets subjective feedback | Wrong production work destroys trust | Evidence, draft-only actions, confidence, regression set, human commit |
| Scope detection creates client conflict | Tool may feel adversarial | Internal-only signal; studio controls language and billing decision |
| Small studios will not pay | Fragmented, price-sensitive market | Paid pilots early; target studios with repeat client volume and fixed-fee pain |
| Usage is project-cyclical | Churn between projects | Cross-project client memory, annual plans only after value proven, per-project option test |
| File storage costs/complexity grow | Review media can become heavy | Static media first, quotas, renditions, external source links, no full DAM promise |
| Incumbents bundle review free | Figma/Adobe/Frame.io distribution | Cross-tool decision layer, no-seat client UX, measurable margin protection |
| Marketplace never emerges | External needs may be irregular | Treat it as optional upside and validate via flags/concierge |
| Founder scope expands | Vision invites too many features | P0 gates, non-goals, no future tables, monthly deletion review of backlog |

## 39. Open product questions to resolve through testing

1. Is the strongest entry point the approved brief, feedback synthesis, or client review portal?
2. Do studios want clients to confirm the Change Set, or is internal confirmation enough?
3. Will users paste external messages, or must inbox integrations arrive earlier?
4. Is per-project pricing more natural than subscription pricing for solo designers?
5. Which deliverable types make scope detection reliable enough to trust?
6. How much original file storage do users expect versus external links/renditions?
7. Is one final approver acceptable for the target market?
8. Does client Brand Memory feel valuable or creepy? What controls are expected?
9. Which first integration meaningfully improves adoption: Drive or Figma?
10. Will users pay for less revision work, or only for a polished branded portal?

## 40. Decisions fixed for V0.1

- Initial segment: independent brand/graphic designers and 2–10 person visual studios.
- Core workflow: brief → review → feedback reconciliation → Change Set → version QA → approval → delivery.
- Creation remains in existing tools.
- Static image and PDF review only.
- One final client approver per review.
- No autonomous agents or visual generation.
- No full project management, CRM, billing, or marketplace.
- Human approval required before any project memory becomes authoritative.
- Published review and approval records are immutable.
- AI claims committed to workflow require valid evidence links.

## 41. Recommended landing-page message for testing

### Hero

**Turn scattered client feedback into one approved revision plan.**

Direction Room keeps the brief, files, comments, decisions, and approvals connected—so your studio spends less time decoding feedback and fewer hours on unplanned revisions.

**Primary CTA:** Run your next client review  
**Secondary CTA:** See the review workflow

### Three supporting outcomes

1. **One version, one place to respond**  
   Clients review a curated package without learning your internal tools.

2. **Feedback your team can actually execute**  
   AI groups duplicates, surfaces conflicts, and drafts the agreed Change Set—with every suggestion linked to its source.

3. **A record of what was decided**  
   Know which version was approved, why a direction changed, and when a request moved beyond scope.

Avoid promises such as “replace your entire creative stack,” “autonomous creative team,” or “complete brand campaigns in one click.”

## 42. Product demo scenario

Use one consistent scenario for prototypes, tests, and onboarding:

**Client:** Kumo Coffee  
**Project:** Brand launch  
**Deliverables:** Primary identity, launch poster, five social templates, menu cover  
**Direction:** Quiet, warm, precise, contemporary  
**Avoid:** Generic Japanese clichés, red-sun motif, anime, overly rustic aesthetics  
**Revision allowance:** Two rounds  
**Client approver:** Marketing lead

Round 1 feedback includes:

- “We like concept B.”
- “Can it feel warmer but not childish?”
- one stakeholder asks for brighter red;
- another repeats the approved neutral-palette direction;
- “Could you also make animated story versions?”
- “The menu headline is a little hard to read.”

The demo should show:

1. approval signal for concept B;
2. ambiguous “warmer” feedback converted into a clarifying question/proposed interpretation;
3. conflict between brighter red and neutral palette;
4. animated stories flagged as a likely scope addition;
5. readability change tied to the menu;
6. a confirmed Change Set;
7. next version checked against it;
8. final immutable approval and delivery manifest.

## 43. Working instruction for future product refinement

When evaluating any proposed feature, answer:

1. Which measured user problem does it solve?
2. Does it shorten or clarify the brief-to-approval loop?
3. Is it required for the current segment, or borrowed from the long-term vision?
4. Can an existing creation, proofing, DAM, or project tool do it better through integration?
5. Does it improve provenance, agreement, decision memory, or project completion?
6. What event or experiment will prove users value it?
7. What must be removed or delayed to keep the current release small?

Reject features that cannot answer these questions clearly.

---

# Appendix A — Research sources

The specification is based on a current-product audit completed 27 August 2026. Sources are included to make the reasoning inspectable, not to imply endorsement.

1. [Figma — Agents, meet the Figma canvas](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/) — agents operating on the canvas and use of shared context/skills.
2. [Canva — Introducing Canva AI 2.0](https://www.canva.com/newsroom/news/canva-create-2026-ai/) — agentic orchestration, editable object generation, campaigns, and persistent Memory Library.
3. [Adobe — Expansion of Creative Agent across Firefly and Creative Cloud](https://news.adobe.com/news/2026/06/adobe-unveils-major-expansion) — agentic workflows across major creative applications.
4. [Air — Creative operations platform](https://air.inc/) and [Air pricing](https://air.inc/pricing) — brand context, asset organization, review, approval, and channel scaling; closest strategic overlap.
5. [Frame.io — Creative management platform](https://frame.io/creative-management-platform) — multi-format assets, versions, feedback, decisions, and approvals.
6. [Ziflow pricing](https://www.ziflow.com/pricing) and [ReviewAI](https://www.ziflow.com/reviewai) — proofing, version compare, workflows, decisions, and AI-assisted checks.
7. [Filestage pricing](https://filestage.io/pricing/) and [AI review assistant](https://filestage.io/blog/ai-review-assistant/) — proofing, guest reviewers, workflows, and rule-based AI review.
8. [ManyRequests](https://www.manyrequests.com/) and [pricing](https://manyrequests.com/pricing) — agency client portals, requests, proofing, billing, CRM, and operations.
9. [FLORA](https://flora.ai/) — multi-model creative canvas, collaboration, reusable workflows, and scaled campaign creation.
10. [Kive](https://kive.ai/docs/introduction-getting-started/start-here) — AI visual creation, boards, assets, and team workspace.
11. [Lovart for marketers](https://www.lovart.ai/solutions/good-design-for-marketers) — brief-to-campaign design agent and channel variants.
12. [Artwork Flow](https://www.artworkflowhq.com/creative-operation) — creative operations, DAM, proofing, versioning, workflow, and brand checks.
13. [Reddit / r/graphic_design — Client Feedback](https://www.reddit.com/r/graphic_design/comments/11fhbse) — practitioner discussion of vague feedback, revisions, and saving pre-client versions.
14. [Reddit / r/graphic_design — “We love it, but could you—?”](https://www.reddit.com/r/graphic_design/comments/xpbuhv) — repeated revision experience and the importance of limits.
15. [Reddit / r/agency — managing client approvals](https://www.reddit.com/r/agency/comments/1k9iiz9/how_are_you_all_managing_client_approvals/) — approval records and client follow-up pain.
16. [OpenAI API — Responses and Structured Outputs](https://developers.openai.com/api/reference/cli/resources/beta/subresources/responses) — schema-constrained model output and background response capabilities.
17. [Google Drive API — notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push) — possible later file-change integration.
18. [Adobe Cloud Storage and Collaboration API](https://developer.adobe.com/cloud-storage/guides/api/) — possible later enterprise Adobe project/file integration.

## Appendix B — Final strategic summary

### Keep

- Persistent structured project state;
- Decisions, versions, and approvals as first-class objects;
- Human control;
- Cross-tool orientation;
- Eventual capability marketplace;
- Outcome metrics based on completed/approved work.

### Change

- Broad visual workspace → narrow decision/revision layer;
- Project Brain → Creative Contract + evidence-backed Decision Graph;
- Multiple agents → one orchestrator with contextual capabilities;
- AI generation → AI interpretation, reconciliation, and advisory QA;
- full project board → light deliverable tracker;
- open marketplace → measured dependency flags, then concierge;
- photographers/printers first → digitally deliverable production services first;
- always-on agent panel → contextual AI actions.

### Build first

> A client can review a specific version, the studio can turn all feedback into one agreed Change Set, and the final approval is indisputable inside the project record.

If that loop is genuinely better than email plus existing proofing, the product has earned the right to expand. If it is not, adding more agents, generators, integrations, or marketplace features will not rescue it.
