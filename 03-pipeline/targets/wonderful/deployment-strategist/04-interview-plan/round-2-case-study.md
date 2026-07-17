# Round 2 — Case Study Discussion

**What it's testing:** how I actually run a deployment — structured thinking,
discovery→pilot→production→adoption, metrics discipline, stakeholder alignment, risk
management. Likely a scenario: *"A Tier-1 [FMCG/telecom/aviation] enterprise in VN
wants to deploy our AI agent. Walk us through how you'd take them from zero to a
successful production launch."*

## My deployment framework (memorize the spine, adapt the flesh)

**D-P-P-A-E: Discover → Pilot → Productionize → Adopt → Expand**

### 1. Discover (scope the real problem, not the asked one)
- Map the customer's current CX flow, volumes, channels (voice/chat/email), languages,
  peak patterns, and the **cost/pain** they're actually funding.
- Identify the **highest-volume, lowest-regulatory-risk** use case to start (billing
  query, order status) — win fast, expand later.
- Surface constraints early: data access, systems to integrate (CRM/ticketing/telephony),
  security/compliance, and **local language/cultural nuance** (my edge — Vietnamese
  register, politeness levels, code-switching).
- **Define success metrics up front**, with the customer's sign-off: resolution rate,
  CSAT, containment, handle time, escalation quality. *"If we don't agree what 'good'
  means before the pilot, the pilot can't succeed."*

### 2. Pilot (prove it on a bounded slice)
- Narrow scope: one use case, one channel, a capped volume — like my **50-call A/B
  test** at TS (emotion vs. no-emotion) that isolated the true metric.
- Instrument everything; set a **clear go/no-go bar** and a fixed evaluation window.
- Tight loop with Product/Eng on **agent refinement** — this is the iteration engine.

### 3. Productionize (make it safe and reliable at scale)
- Integrations hardened; SLAs and escalation paths defined; **guardrails embedded
  structurally**, not bolted on (my TS state-machine approach — risk states as part
  of the pipeline, not a review layer).
- Human-in-the-loop fallback for low-confidence / sensitive turns.
- Launch gated on the agreed metric bar, not a calendar date.

### 4. Adopt (the metric that actually matters)
- Drive the customer's internal adoption: agent-desk change management, trust-building
  with their CX team, transparent reporting cadence.
- Monitor production, diagnose gaps, drive improvement — like the **1.7x conversion /
  5.2x revenue** turnaround I ran on a live agent by root-causing the conversion gap.

### 5. Expand (turn one win into a land-and-expand)
- Mine production data for **new use cases**; sequence them by value × effort (80/20).
- Each new use case = a new "rule set" added to a proven platform, not a rebuild.

## Anchor stories to deploy in the case (from `05-story-bank.md`)

- **Metrics discipline:** the 50-call A/B test that isolated a statistically real gap.
- **Production turnaround:** 1.7x conversion / 5.2x revenue in 30 days via root-cause.
- **Integration under constraint:** telco-data integration, +30% conversion, +20%
  unserved segment, coordinating product/eng/external partner.
- **Risk-as-architecture:** 17 regulatory states embedded in the agent pipeline.

## Traps to avoid

- Jumping to "the model will handle it" — deployment is **integration + adoption +
  trust**, not model quality. Say that explicitly; it's their real bottleneck.
- Skipping success-metric definition — call it out as step zero.
- Ignoring the **localization** angle — for a VN Tier-1, weave in language/cultural
  fluency as a first-class deployment risk (and my edge).
- Being all-framework, no-numbers — attach a concrete metric to every phase.

## Strong closing line

> "The pattern I trust: agree what 'good' means before the pilot, prove it on a
> bounded slice, embed the guardrails into the system rather than reviewing after,
> then let production data tell us the next use case. I've run exactly this loop to
> US production — the new variables here are the VN market and the vertical, and the
> VN part is where I add unusual value."
