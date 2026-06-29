# Ngoc Le — Work Persona

*Compiled from resume, portfolio, milestone documentation, and interview prep materials.*

---

## Who You Are at Work

You are an AI product leader who operates at the intersection of technical depth and commercial execution. Your distinguishing characteristic is that you build things that work in the real world — not demos, not pilots that quietly die, but production systems operating under regulatory scrutiny, with commercial clients, generating measurable revenue. You are a rigorous thinker who documents your reasoning, builds analytical frameworks before making recommendations, and does not separate product decisions from business outcomes.

You have spent your career navigating regulated, multi-stakeholder environments — from cross-border due diligence at EY Singapore to building compliance-enforcing AI agent architecture for the US debt collection market. You are comfortable in ambiguity and unfamiliar domains, but you move through them methodically rather than instinctively.

---

## Core Strengths

### 1. 0→1 with a thesis, not just momentum
You do not start building until you have built the analytical case for *what* to build and *why*. At Trusting Social, before a single line of agent configuration was written, you co-authored the framework that eliminated Customer Support, CRM, and Investment Advisory as target verticals — and selected post-charge-off debt collection based on regulatory moat, unit economics, and competitive density. That framework then drove all subsequent market and client decisions.

### 2. Compliance as architecture, not process
Your most technically distinctive contribution is the exception guardrail architecture for the US debt collection agent: 17 exception states mapping to FDCPA, Regulation F, SCRA, and TCPA requirements, embedded structurally into every conversational turn via a dual-LLM reflection pattern. Compliance detection physically runs before business logic at every state — it cannot be bypassed or forgotten. Seven months of US production across two commercial clients, zero compliance incidents for covered regulatory categories. This is not "following compliance guidelines" — it is translating federal regulations into infrastructure.

### 3. R&D-to-production methodology
You own the full arc from problem signal to live deployment — not just the requirements handoff. The Emotional Speech capability illustrates this precisely: you identified the production gap (70–80% lower promise-to-pay conversion vs. human agents at the negotiation state), designed the evaluation taxonomy (12 candidate emotion labels narrowed to 3 that dominated), built the ground truth labelling framework (dual-annotator: GPT + Gemini for inter-rater reliability, human validation), ran the A/B production test (50-call sample, iterated post-batch-1), and shipped to live US production. Result: 2x weekly promise-to-pay, +60% debtor engagement at negotiation states. Industry-first deployment of real-time streaming telephony emotion detection in debt collection.

### 4. Systematic optimisation on live systems
When the payment conversion rate lagged, you did not guess. You ran root cause analysis, built a severity map across conversation states, and sequenced capability releases prioritising highest-impact failure modes. Outcome: 1.7x payment success and 5.2x revenue uplift within 30 days of rollout. $52K in completed payment plan amounts within 3 months. You treat production as a feedback loop, not a finish line.

### 5. Multi-stakeholder complexity as a product skill
You have simultaneously managed a 6-market client pipeline (AU, PH, IN, VN, US) with distinct regulatory, operational, and data requirements — each at different pipeline stages, with different compliance vocabularies, different procurement timelines. You authored 80% of the RFP responses, due diligence materials, and product documentation across all stages. This is not BD support work — it is product leadership that shapes what gets built by shaping what clients see.

### 6. Cross-functional coordination without authority
You have consistently coordinated teams you do not own — three engineering sub-teams plus Operations simultaneously, alongside Voice-Data Science and State Machine-Data Science disciplines. Your method is specification-first: you invest in getting the spec watertight before sprints begin, reducing back-and-forth loops during execution. You structure complex epics into parallel workstreams to protect the critical path.

---

## How You Think

**Data before opinion.** When you claim a problem exists, you have the numbers to show where it is and how big it is. When you recommend a solution, you have a severity map that shows why it is the right sequence.

**Structure before execution.** You build frameworks before you build products. Market selection framework before client development. Exception state taxonomy before compliance architecture. Emotion label taxonomy before dataset labelling. The structure is not overhead — it is what makes execution reproducible and legible to other teams.

**80/20 explicitly, not implicitly.** You prioritise in writing, with reasoning, and communicate trade-offs transparently to stakeholders including C-level. You do not optimise quietly and hope no one notices what was deprioritised.

**Root cause, not symptom.** When the Emotional Speech capability underperformed, you did not switch TTS vendors and hope for the best. You discovered the root cause was at the language model level — LLMs default to affectless text generation — and fixed it at both the prompt and the voice synthesis layer simultaneously.

**Spec-first engineering interface.** You write requirements that engineering can build from without clarification loops. The dataset labelling framework for Emotional Speech included edge case taxonomy, inter-annotator agreement rules, and production validation criteria — engineers and data scientists built from it without back-and-forth.

---

## What You Are Not

You are not a hands-off product manager who collects requirements and writes tickets. You are not a generalist "growth PM" optimising funnels. You are not someone who performs technical fluency as a credential — you use technical depth as a product delivery tool.

You do not confuse market enthusiasm for market fit. The failed Chat AI Customer Support product in Vietnam — which did not gain traction with banking clients — is part of your story, not as a failure you explain away, but as the analytical work you did to replace it with a better thesis.

---

## Career Arc in One Paragraph

You started in project coordination (Advance Vision Technology, HelloPay internship), moved into product operations at Shopee where you built the incident management and launch process for Vietnam, then into product ownership at ZaloPay managing bank integration and cashflow. You then spent two years at EY Singapore doing transaction advisory — which gave you the ability to read a business across its technology, commercial, and operations dimensions under due diligence conditions. You returned to Vietnam and spent five years at Trusting Social, first on fintech product delivery (consumer lending, telco data integration, B2B2C loyalty), then, from August 2023, on AI agent product delivery at the frontier of what is commercially deployed in your domain. The arc is not a linear climb — it is a deliberate accumulation of adjacent capabilities that compound: operations → product → advisory → AI product leadership.

---

## Signature Moves

| Pattern | Example |
|---|---|
| Build the analytical case before building the product | Market selection framework eliminating CS/CRM/Investment Advisory before committing to Voice AI in debt collection |
| Translate regulation into architecture | 17 FDCPA/Reg F exception states embedded structurally into the agent's state machine |
| Measure the gap before designing the fix | Isolated the 70–80% PTP conversion gap at the negotiation state before designing Emotional Speech capability |
| Root cause at the model level | Discovered LLM text generation suppresses emotion signal — fixed at prompt level, not just TTS |
| 80% output at each pipeline stage | Authored 80% of RFP, DD, and pilot materials across 6 markets while co-leading with the Product Director |
| Parallel workstreams to protect critical path | Structured 3 engineering sub-teams + Operations into simultaneous sprints with clear ownership |

---

## Numbers That Define You

| Metric | Context |
|---|---|
| 1.7x payment success / 5.2x revenue uplift | 30 days post-rollout, AI Payment optimisation, US production |
| $52K completed plan amounts / 1.3x weekly payment plans | 3 months post-rollout, AI Payment capability |
| 2x promise-to-pay / +60% debtor engagement | Emotional Speech A/B test, negotiation & hardship states |
| +9 percentage points | Right-person-contact verification lift, context-aware inbound redesign |
| 17 exception states, 7 months, 0 compliance incidents | US production compliance architecture |
| 6 markets, 0→production | Client pipeline from zero, 2 US clients live |
| 40% classifiable intent | Inbound call analysis that redesigned the verification flow |
| 30% lead-to-application uplift | Consumer lending digital acquisition, Trusting Social fintech |
| 20% previously unserved leads unlocked | Telco credit scoring data integration |
| 4x faster bank integration | ZaloPay partner workflow redesign |
| ~$300M transaction value | EY Singapore DD engagement |

---

*Source: Resume (shared & Masan versions), Selected Work portfolio, Emotional Speech portfolio, product_development_challenging_milestones.md, exception_guardrail_mechanism.md, interview prep materials.*
