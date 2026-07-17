# Story Bank — STAR stories mapped to the JD

Reusable, evidence-backed stories. Each is tagged with the JD responsibilities it
proves so you can deploy the right one on demand. Full proof: `02-evidence/trusting-social/`.

> Delivery rule: **Situation + Task in 2 sentences, spend the time on Action, land the
> Result with a number.** Never tell a story without a metric.

---

## Story 1 — 0→1 AI agent to live US production
**Proves:** end-to-end deployment · align Product/Eng/customer · lead the customer

- **S/T:** Trusting Social needed to take an AI voice agent for US post-charge-off debt
  collection from product thesis to live production for enterprise clients — one of the
  most heavily regulated environments for autonomous AI.
- **A:** Co-authored the product thesis and market-selection framework (80% of the
  analysis) over competing verticals; owned the deployment across a multi-vendor US
  architecture; coordinated Product, Engineering, and commercial teams through launch.
- **R:** **7 months** continuous US production across **2 commercial clients**; a
  production agent system live and generating transactions.

## Story 2 — Production turnaround (the money story)
**Proves:** monitor performance in production · drive follow-up improvements · impact

- **S/T:** The agent was live but underperforming the core metric — converting
  interactions into completed transactions; the gap was measurable and material.
- **A:** Root-caused the conversion gap in live production (80/20 + severity mapping),
  identified the highest-leverage fixes, and drove the agent optimization with Eng.
- **R:** **1.7x conversion success** and **5.2x revenue uplift within 30 days**; ~**$52K**
  completed transaction amount; **1.3x** weekly transaction plans within 3 months.

## Story 3 — Integration under real-world constraint
**Proves:** scope integrations · coordinate implementation · expand adoption/impact

- **S/T:** An existing scoring pipeline was leaving segments unserved; a third-party
  telco data source could close the gap but needed integrating across partners.
- **A:** Scoped the integration, aligned product, engineering, and the external telco
  partner, and drove it into the live scoring flow.
- **R:** **+30% conversion uplift**; **20% previously unserved segment unlocked.**

## Story 4 — Risk/regulation as architecture
**Proves:** manage risk · guardrails · technical credibility for CTO/Technical rounds

- **S/T:** The US agent had to comply with 17 distinct federal regulatory triggers while
  operating autonomously at scale — compliance could not be a manual review layer.
- **A:** Designed a dual-layer orchestration where every agent action passes a compliance
  detection layer first: **17 regulatory states** as sub-workflows, **dual-LLM reflection**
  (one extracts compliance signals, one generates the response only after clearance),
  **reset-and-redetect** at every decision point, exception-within-exception handling —
  a **~9,500-line state machine.**
- **R:** **Zero compliance escalations** requiring human intervention for covered
  categories, across 7 months of production.

## Story 5 — Metrics discipline / rigorous pilots
**Proves:** define success metrics · scope pilots · evaluation

- **S/T:** Needed to prove whether emotional speech actually improved outcomes at the
  negotiation stage, without fooling ourselves on noisy data.
- **A:** Filtered noisy calls (FP/FN cross-validated across speech models), designed a
  **50-connected-call A/B test** (emotion vs. no-emotion), built ground-truth labelling
  with **dual annotators (GPT + Gemini) + human validation**, iterated the label set on
  live signal.
- **R:** Confirmed a statistically significant gap and shipped an **industry-first**
  real-time streaming emotion capability into production.

## Story 6 — Multi-market, multi-stakeholder navigation
**Proves:** cross-team/customer alignment · strategy-consulting half of the role

- **S/T:** Build an enterprise client pipeline from zero across 6 markets (AU, PH, IN,
  VN, US), each with distinct regulatory, operational, and data requirements.
- **A:** Authored **80%** of the due-diligence and proposal materials across all pipeline
  stages; navigated each market's distinct constraints.
- **R:** A **6-market pipeline built from zero** — proof I operate across entities,
  regulators, and stakeholders simultaneously.

## Story 7 — Cross-border enterprise consulting (EY)
**Proves:** strategy-consulting credibility · global standard · senior-stakeholder English

- **S/T:** At EY Singapore, assess platform architecture, scalability, and integration
  readiness for global PE and sovereign-fund clients.
- **A:** Ran **2 cross-border technology & commercial due diligences**; evaluated
  architecture, vendor dependencies, and integration risk.
- **R:** One transaction ~**$300M** investment value; I operate at global enterprise
  standard with senior stakeholders.

---

## Quick map: JD bullet → best story

| JD responsibility | Lead story | Backup |
| :---------------- | :--------- | :----- |
| End-to-end deployment | 1 | 4 |
| Scope requirements & success metrics | 5 | 3 |
| Coordinate implementation/integration/refinement | 3 | 1 |
| Align Product/Eng/customer on SLAs | 4 | 6 |
| Monitor production & drive improvement | 2 | 5 |
| Develop new use cases / expand adoption | 2 | 3 |
| Track progress, manage risk, remove blockers | 4 | 6 |
| (Strategy-consulting half of role) | 7 | 6 |
