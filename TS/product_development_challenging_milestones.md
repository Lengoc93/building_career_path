# Product Development — Challenging Milestones @ Trusting Social

Instructions: Fill one section per milestone. Keep it raw — polished showcase versions will be generated later by batching these entries.

---

## Milestone 1: Chat AI Agent for Customer Support failed to land Banking clients in Vietnam — triggering the pivot

**Timeline:** [CLARIFY: ~mid 2023? Before Aug 2023 Voice Agent start]

**Problem Signal:**
TS built a Chat AI Agent targeting customer support for Vietnamese banking clients. The product did not gain traction — banks did not convert past pilot/evaluation stage.
[CLARIFY: Was the failure about (a) product-market fit (banks didn't need chat AI for CS), (b) regulatory/compliance blockers, (c) competitive landscape (existing vendors), or (d) pricing/willingness to pay? What was the observable "no" — client rejection at RFP, failed pilot metrics, or internal strategic review?]

**Quantified Gap:**
[CLARIFY: Any metrics here? e.g., number of clients pitched vs. converted, pilot results that underperformed, or simply "0 commercial contracts after X months of BD"?]

**Your Role / What You Personally Drove:**
From resume: "Co-architected with the Product Director the product thesis and market selection framework — authoring 80% of the analysis and materials that positioned AI Voice Agent in post-charge-off debt collection **over competing verticals, including Customer Support, CRM, Investment Advisory**."

- You were the one who built the analytical case for why Customer Support was the wrong vertical.
[CLARIFY: Did you run the analysis that killed the CS vertical? Or did you inherit the lesson after joining the Voice Agent initiative?]

**Method Steps (ordered):**

1. [CLARIFY: What was the evaluation process? Did you do a post-mortem on the Chat AI CS product?]
2. Analysed competing verticals: Customer Support vs. CRM vs. Investment Advisory vs. Debt Collection
3. Built market selection framework comparing regulatory moats, willingness-to-pay, competitive density, and TS's technical fit
4. Recommended post-charge-off debt collection — presented thesis to Product Director / leadership

**Key Decisions + Reasoning:**

- Chose Voice over Chat — [CLARIFY: Was this because debt collection requires phone calls by regulation/practice, or because voice had higher barrier to entry?]
- Chose post-charge-off debt collection over other verticals — [CLARIFY: What was the decisive factor? Regulatory moat? Higher unit economics? Less competition from incumbents?]
- Chose high-regulated markets (US, AUS) over SEA — [CLARIFY: Was this because regulated markets = higher willingness to pay for compliant AI, or because TS already had client relationships there?]

**Cross-Functional Friction:**
[CLARIFY: Was there internal resistance to killing the Chat AI CS product? Did the team that built it push back?]

**Surprises / Non-Obvious Findings:**

- The "obvious" vertical (customer support) was actually the worst fit — high competition, low switching cost, commoditised
- [CLARIFY: What was the non-obvious insight that made debt collection the winner?]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY: Was time/resources wasted on the CS path? What would you have done earlier?]

**Quantified Results:**

- The pivot led to: 6-market client pipeline from zero, 2 US clients live for 7 months
[CLARIFY: Any comparison to CS track? e.g., "CS had 0 conversions in X months; Voice Agent had Y pipeline in Z months"]

**Stakeholder Validation:**
[CLARIFY: Did leadership explicitly validate this pivot? Was there a board/exec decision point?]

**Tags:**
Product-Market Fit, Strategic Pivot, Market Selection, 0→1 Thesis

---

## Milestone 2: Discover market fit — AI Voice Agent for Collection in High-Regulated Markets (US, AUS)

**Timeline:** Aug 2023 – [CLARIFY: When was market fit "confirmed"? First US client signing? First production deployment?]

**Problem Signal:**
After the CS pivot, TS needed to validate that post-charge-off debt collection was commercially viable — and that highly regulated markets (US, AUS) were the right entry point vs. less regulated SEA markets (PH, IN, VN).
[CLARIFY: Was the signal "we have a thesis but zero commercial proof" or was there a specific client/market pull?]

**Quantified Gap:**
[CLARIFY: What was the "before" state? e.g., "TS had zero revenue from Voice AI, zero clients, zero production deployments"]

**Your Role / What You Personally Drove:**
From resume:

- Co-architected product thesis and market selection framework, authoring 80% of analysis/materials
- Co-designed client development strategy across 6 markets
- Owned majority of RFP responses, DD materials, product documentation at each pipeline stage
- Pipeline: AU (CBA) → RFP/DD; PH (Home Credit) → RFP/DD; IN (HDFC) → RFP/DD; VN (TPBank) → Pilot; US (Republic Finance & Unity Asset Management) → Production

**Method Steps (ordered):**

1. Built market selection framework — regulatory moat analysis, unit economics, competitive density
2. Authored product thesis positioning post-charge-off debt collection as the target vertical
3. Built client development pipeline across 6 markets in parallel
4. Owned RFP/DD responses — translating product capability into client-specific compliance and commercial language
5. Converted US clients from RFP → Production (Republic Finance, Unity Asset Management)

**Key Decisions + Reasoning:**

- Targeted highly-regulated markets first (US, AUS) rather than easier-entry SEA markets — [CLARIFY: Was this because (a) regulatory complexity = higher barrier = stronger moat, (b) higher willingness to pay, (c) US/AUS clients were more sophisticated buyers who valued AI compliance?]
- Pursued 6 markets simultaneously rather than sequencing — [CLARIFY: Was this a deliberate hedging strategy, or did opportunities come in parallel?]

**Cross-Functional Friction:**
[CLARIFY: What was hard about the 6-market BD? Was it timezone coordination, regulatory homework per market, or internal resource contention?]

**Surprises / Non-Obvious Findings:**
[CLARIFY: Was there a surprising finding — e.g., a market you expected to convert first that didn't, or a compliance requirement that reshaped the product?]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY: Any markets that stalled or failed? What did you learn from CBA/HDFC/Home Credit not reaching production?]

**Quantified Results:**

- 6-market client pipeline from zero
- 2 US clients live in production for 7 months
- [CLARIFY: Revenue or contract value, if shareable?]

**Stakeholder Validation:**

- US clients signed and went to production
- [CLARIFY: Any quotes or formal validation from CBA, HDFC, etc.?]

**Tags:**
Market Development, Product-Market Fit, 0→1, Client Pipeline, Regulated Markets, RFP/DD

---

> **BATCHING FLAG: Milestones 3 & 4 below are tightly coupled.**
> Milestone 3 = compliance enforcement layer (exception guardrails).
> Milestone 4 = performance/conversation-quality control layer (state machine controlling LLM).
> Both are about **the state machine architecture** but solve different problems: one is "don't break the law," the other is "make the conversation good."
>
> **Options:**
> (A) Keep separate — two distinct showcases (compliance vs. performance)
> (B) Batch into one showcase: "Designing the Dual-Layer State Machine Architecture" with two challenge threads
>
> **My recommendation: Keep separate.** The compliance story is a standalone showpiece (FDCPA/Reg F, structural enforcement, dual-LLM reflection). The performance story is about LLM control, prompt engineering, and conversation quality. Different audiences care about different ones.
>
> **Please confirm.**

---

## Milestone 3: Build the compliance-enforcing state machine (exception guardrail architecture)

**Timeline:** [CLARIFY: When did this work start and when was it production-ready?]

**Problem Signal:**
Deploying an AI voice agent in US post-charge-off debt collection means every conversational turn is a potential FDCPA/Regulation F violation. Traditional approach: human review layer or compliance checklist. Problem: doesn't scale for autonomous AI agent — you can't have a human reviewing every turn in real-time.
[CLARIFY: Was there a specific incident or client requirement that triggered this? Or was it a design constraint from day 1?]

**Quantified Gap:**
From exception_guardrail_mechanism.md: 17 distinct exception states mapping to federal regulations (FDCPA §1692c, §1692g, SCRA, TCPA, etc.). Each one is a potential compliance violation if missed.
[CLARIFY: Was there a "before" state — e.g., an earlier version without structural compliance that had violations or near-misses?]

**Your Role / What You Personally Drove:**
From the guardrail doc and resume: "translated federal regulations into a state machine specification."

- Designed the exception state taxonomy (17 states mapping to specific regulations)
- Defined the dual-LLM reflection architecture requirement: every turn must check for compliance triggers before generating a response
- Specified the transition condition ordering: exception checks always execute before business logic
- Designed the reset-and-redetect pattern (fresh compliance evaluation every turn)
- Designed the exception-within-exception detection (recursive compliance monitoring)
- Designed the BACK|EXC return mechanism for seamless conversation resumption
[CLARIFY: Did you write the YAML spec yourself, or did you define the requirements and engineering implemented? How much of the architecture was your design vs. engineering's?]

**Method Steps (ordered):**

1. Mapped FDCPA/Regulation F requirements to conversational scenarios (what triggers each regulation)
2. Designed 17 exception states, each as a full compliance sub-flow (not just flags)
3. Architected the dual-LLM "reflection" pattern — Reflection LLM extracts compliance signals, Response LLM generates reply only after transition conditions evaluated
4. Specified structural priority: exception checks physically ordered before business logic in every state's transition conditions
5. Designed reset-and-redetect + exception-within-exception patterns for recursive enforcement
6. [CLARIFY: Testing/validation — how was compliance correctness validated? Red-team testing? Client compliance review? Legal sign-off?]

**Key Decisions + Reasoning:**

- Compliance as infrastructure, not review layer — because a review layer can be bypassed, forgotten, or bottlenecked. Structural enforcement means "an engineer can't forget to check for bankruptcy."
- Dual-LLM call per turn (cost/latency trade-off) — accepted higher cost because compliance failure cost is orders of magnitude higher
- 17 granular exception states (not a generic "compliance flag") — because each regulation requires a different sub-conversation flow (e.g., cease-comms needs to collect which channels; bankruptcy needs filing status + case number)
- Reset-and-redetect rather than carrying state — prevents stale compliance assumptions

**Cross-Functional Friction:**
[CLARIFY: Was there pushback on the 2-LLM-call cost? Did engineering resist the complexity? Did the US client's compliance team need to review/approve the architecture?]

**Surprises / Non-Obvious Findings:**

- Exception-within-exception was necessary — a debtor requesting cease-communications might then ask for a human agent. Single-layer detection would miss this.
- The guardrail_validator hook points (currently commented out) show defense-in-depth thinking — the architecture anticipated needing an additional layer
[CLARIFY: Any other surprises during build or production?]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY: Any compliance near-misses? Any states that were missing initially and added after client feedback?]

**Quantified Results:**

- ~9,500-line state machine configuration
- 17 exception states covering FDCPA, Reg F, SCRA, TCPA
- 7 months of US production with no [CLARIFY: compliance incidents? violations? client complaints?]
- [CLARIFY: Any metric comparing compliance performance vs. human agents or vs. earlier versions?]

**Stakeholder Validation:**

- 2 US clients (Republic Finance, Unity Asset Management) approved for production — implies compliance review passed
- [CLARIFY: Did client compliance teams explicitly sign off? Any audit or certification?]

**Tags:**
Compliance Architecture, State Machine, FDCPA/Reg F, Dual-LLM, Regulated Environment, US Production, Structural Enforcement

---

## Milestone 4: Build the performance-driven controller layer (state machine) to control the external LLM (OpenAI)

**Timeline:** [CLARIFY: Concurrent with Milestone 3, or separate phase?]

**Problem Signal:**
Raw LLM (OpenAI) output is unpredictable in high-stakes conversations — it can hallucinate payment terms, skip required disclosures, or lose track of conversation state. In debt collection, every word matters: wrong amount = compliance violation, wrong tone = debtor disengages, wrong sequence = lost conversion.
[CLARIFY: Was there a specific failure mode that triggered building the controller layer? e.g., LLM hallucinating payment amounts, or going off-script in early tests?]

**Quantified Gap:**
[CLARIFY: What was the "uncontrolled LLM" performance vs. "state-machine-controlled LLM"? Any comparison metrics?]

**Your Role / What You Personally Drove:**
From resume: conversation design, state machine architecture, coordinating Engineering + Voice-Data Science + State Machine-Data Science teams.
[CLARIFY: Did you design the state machine states/transitions, or define the requirements for what each state should accomplish? How much of the prompt engineering was yours vs. the data science team's?]

**Method Steps (ordered):**

1. [CLARIFY: How did you identify what needed to be controlled? Production failure analysis? Systematic testing?]
2. Designed state-by-state conversation flow — each state has defined purpose, allowed actions, transition conditions
3. Specified per-state LLM prompting constraints — what the LLM can/cannot say in each state
4. Built transition condition logic — deterministic routing vs. LLM-decided routing
5. Iterated based on production call analysis

[CLARIFY: Fill in the actual sequence]

**Key Decisions + Reasoning:**

- State machine over pure LLM autonomy — because deterministic control over conversation structure is non-negotiable in regulated environments
- [CLARIFY: What was the LLM's "freedom scope" within each state? Did you give it full text generation freedom within guardrails, or constrain to templates?]
- [CLARIFY: Why OpenAI specifically? Was there a vendor selection process?]

**Cross-Functional Friction:**

- Coordinated Engineering, Voice-Data Science, and State Machine-Data Science teams (per resume)
[CLARIFY: What was the friction? e.g., eng wanting simpler architecture, DS wanting more LLM autonomy, or disagreements on state granularity?]

**Surprises / Non-Obvious Findings:**
[CLARIFY: What did you learn about controlling LLMs that wasn't obvious beforehand?]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY: Any production incidents? States that didn't work as designed?]

**Quantified Results:**
[CLARIFY: Metrics on conversation quality, completion rates, or compliance adherence before/after the controller layer]

**Stakeholder Validation:**
[CLARIFY: Client feedback on conversation quality?]

**Tags:**
State Machine, LLM Control, Conversation Architecture, Multi-Team Coordination, Production

---

## Milestone 5: Optimize right-person-contact verification for inbound/outbound calls

**Timeline:** [CLARIFY: When?]

**Problem Signal:**
From resume: "Identified 40% of inbound calls had classifiable intent." The verification flow was treating all calls the same regardless of context — inbound callers who already knew why they were calling were going through the same generic verification as cold outbound calls.
[CLARIFY: Was the symptom "high drop-off at verification" or "low right-person-contact rate"? What was the observable failure mode?]

**Quantified Gap:**
From resume: 9 percentage point lift after fix — implies the "before" rate was [CLARIFY: what? e.g., X% → X+9%].

**Your Role / What You Personally Drove:**
From resume: "Identified 40% of inbound calls had classifiable intent — redesigned verification flow to be context-aware."

- You identified the 40% classifiable intent insight (your analysis, not someone else's)
- You redesigned the verification flow

**Method Steps (ordered):**

1. Analysed inbound vs. outbound call data — discovered 40% of inbound calls had classifiable intent
2. [CLARIFY: How did you classify intent? LLM analysis of first few seconds? Call metadata? Caller history?]
3. Redesigned verification flow to be context-aware — different paths for inbound (known intent) vs. outbound (cold)
4. [CLARIFY: Was there also a self-claimed call picker identification component? How did you handle someone other than the debtor picking up?]
5. [CLARIFY: A/B tested or direct rollout?]

**Key Decisions + Reasoning:**

- Context-aware verification over one-size-fits-all — because forcing a debtor who called you back through full cold-open verification is friction that kills conversion
[CLARIFY: What did "context-aware" mean specifically? Shorter verification? Different opening script? Skip certain steps?]

**Cross-Functional Friction:**
[CLARIFY: Was compliance a concern? Verification is regulated — changing the flow could raise compliance questions]

**Surprises / Non-Obvious Findings:**

- 40% of inbound calls having classifiable intent was the key insight — [CLARIFY: Was this expected or surprising?]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY]

**Quantified Results:**

- +9 percentage points right-person-contact verification success rate
- [CLARIFY: Impact on downstream metrics? Did better verification → better PTP?]

**Stakeholder Validation:**
[CLARIFY]

**Tags:**
Conversation Optimization, Verification, Inbound/Outbound, Data-Driven, Context-Aware Design

---

## Milestone 6: Enable in-call payment

**Timeline:** [CLARIFY: When was this shipped? Resume says "within 30 days of rollout" and "within 3 months post-rollout"]

**Problem Signal:**
[CLARIFY: What was the problem before in-call payment? Debtors were promising to pay but then not following through? Or there was no mechanism to capture payment during the call at all?]

**Quantified Gap:**
[CLARIFY: What was the PTP-to-actual-payment conversion rate before in-call payment was enabled?]

**Your Role / What You Personally Drove:**
From resume:

- "Drove payment conversion optimisation — delivering 1.7x payment success and 5.2x revenue uplift within 30 days of rollout, through root cause analysis, severity mapping, and prioritised sequencing across the conversation states."
- "Delivered AI Payment capability generating $52K in completed plan amounts and 1.3x weekly payment plans within 3 months post-rollout — coordinating Engineering, Voice-Data Science, and State Machine-Data Science teams in complying with US debt collection regulations."

**Method Steps (ordered):**

1. Root cause analysis — why were PTP not converting to actual payments?
2. Severity mapping — which failure modes had highest impact?
3. Prioritised sequencing across conversation states — [CLARIFY: What does this mean? Optimising when in the call to present the payment option?]
4. Built in-call payment capability — [CLARIFY: What was the technical integration? IVR payment? Payment link sent during call? Transfer to payment system?]
5. Coordinated across Engineering, Voice-Data Science, State Machine-Data Science for US regulatory compliance
6. Iterated post-rollout

**Key Decisions + Reasoning:**
[CLARIFY: Key trade-offs? e.g., payment friction vs. compliance requirements (disclosures before payment), which payment methods to support, how to handle failed payments mid-call]

**Cross-Functional Friction:**

- 3 teams: Engineering, Voice-Data Science, State Machine-Data Science
- US debt collection regulations around payment processing
[CLARIFY: What was specifically hard? Payment processor integration? Compliance disclosures before payment? Handling payment failures gracefully?]

**Surprises / Non-Obvious Findings:**
[CLARIFY: What did root cause analysis reveal that was unexpected?]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY]

**Quantified Results:**

- 1.7x payment success rate (within 30 days)
- 5.2x revenue uplift (within 30 days)
- $52K plan amount (within 3 months)
- 1.3x weekly payment plans (within 3 months)

**Stakeholder Validation:**
[CLARIFY: Client reaction to these numbers?]

**Tags:**
Payment Conversion, Revenue Impact, Multi-Team Coordination, US Compliance, Root Cause Analysis

---

## Milestone 7: Optimize promise-to-pay conversion by inbound/outbound calls and identified call picker

**Timeline:** [CLARIFY]

**Problem Signal:**
From resume: PTP conversion rate needed improvement. Intelligent Call History Analysis and Dynamic Hardship Detection were the response.
[CLARIFY: What was the specific signal? Low PTP rate overall, or PTP rate lower for specific segments (inbound vs. outbound, identified vs. unidentified call picker)?]

**Quantified Gap:**
[CLARIFY: What was the PTP conversion rate before these interventions?]

**Your Role / What You Personally Drove:**
From resume:

- "Designed Intelligent Call History Analysis (personalised guidance from prior call context)"
- "Designed Dynamic Hardship Detection (adaptive settlement pathways at global level)"
- "embedding contextual intelligence to gain higher promise-to-payment conversion rate"

**Method Steps (ordered):**

1. [CLARIFY: How did you identify that call history context and hardship detection were the levers?]
2. Designed Intelligent Call History Analysis — the AI agent uses prior call context to personalise the current conversation
3. Designed Dynamic Hardship Detection — adaptive settlement pathways based on detected financial hardship signals
4. [CLARIFY: How were these validated? A/B test? Before/after production comparison?]

**Key Decisions + Reasoning:**

- Personalisation over generic scripts — [CLARIFY: What made this the right lever? Was there data showing repeat callers were getting the same pitch?]
- "Global level" for Dynamic Hardship Detection — [CLARIFY: Does "global" mean across all markets, or across all conversation states?]

**Cross-Functional Friction:**
[CLARIFY]

**Surprises / Non-Obvious Findings:**
[CLARIFY]

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY]

**Quantified Results:**
[CLARIFY: What was the PTP conversion lift? The resume says "higher" but doesn't give a number for this specific initiative]

**Stakeholder Validation:**
[CLARIFY]

**Tags:**
Conversation Optimization, PTP Conversion, Contextualisation, Hardship Detection, Personalisation

---

## Milestone 8: Add Emotional Intelligence — emotion detection and expressive response

**Timeline:** 2024

**Problem Signal:**
From portfolio: "Expert signal: AI agent's monotone delivery caused debtors to disengage at negotiation state — estimated 70–80% lower promise-to-pay conversion vs. human agents at this stage."

**Quantified Gap:**
70–80% lower PTP conversion vs. human agents at negotiation state. Confirmed via filtered production call analysis (FP/FN interruptions cross-validated across multiple speech models), comparing debtor turn count and PTP rate between AI and human.

**Your Role / What You Personally Drove:**
From resume + portfolio: "Owned full R&D-to-UAT delivery of Emotional Speech capability."

- Designed dataset labelling framework (dual-annotator: GPT + Gemini, human agent validation)
- Designed emotion taxonomy (tested undefined vs. defined labels, refined to 12 → 3 dominant)
- Integrated real-time streaming TTS (ElevenLabs, Cartesia evaluation)
- Validated production readiness via A/B test (50 connected calls)

**Method Steps (ordered):**

1. Measure — isolated production gap, filtered noisy calls, compared AI vs. human at negotiation state
2. Taxonomy Design — evaluated labels from ElevenLabs/Cartesia, tested undefined vs. defined, refined to 12 labels (3 dominant: curious, sympathetic, calm)
3. Ground Truth Labelling — human agents labelled debtor emotions, GPT + Gemini labelled AI-turn emotions (dual annotator), human validation, per-label voice model training
4. A/B Production Test — 50 connected calls, emotion vs. no-emotion, iterated post-batch-1

**Key Decisions + Reasoning:**

- Defined labels over undefined — LLMs default to affectless text; undefined labels caused near-synonym confusion (supportive vs. empathetic) degrading annotation consistency
- Dual-annotator approach (GPT + Gemini) — inter-rater reliability for ground truth
- Dual-layer intervention (prompt + TTS) — discovered LLM text generation itself suppresses emotion signal, so fix needed at both prompt and voice model level

**Cross-Functional Friction:**
[CLARIFY: Coordinating engineering for per-label voice models, TTS vendor evaluation, human agent labelling time — what was hardest?]

**Surprises / Non-Obvious Findings:**

- Emotion register is low-dimensional: only 3/12 labels used in practice. Debtors need "I'm listening" vs. "reading from a script" — not 12 distinct modes.
- LLM text generation suppresses emotion signal — root cause at language model level, not just voice synthesis
- Near-synonym label confusion degrades annotation quality, especially in high-ambiguity hardship states

**What Almost Went Wrong / What You'd Do Differently:**
[CLARIFY: Any issues with TTS vendor quality? Label set iteration post-batch-1 — what went wrong in batch 1?]

**Quantified Results:**

- 2x promise-to-pay generated (weekly, early signal)
- +60% debtor turns at negotiation & hardship states
- Industry-first deployment: real-time streaming telephony emotion detection in debt collection

**Stakeholder Validation:**

- "Qualitative compliment from US client" (portfolio)
- [CLARIFY: What did they say specifically?]

**Tags:**
R&D-to-Production, Emotional Intelligence, Dataset Labelling, A/B Testing, TTS, Multi-Vendor, US Production, Industry-First

---

> **NOTE: Milestone 4 was duplicated in the original file (appeared at lines 142 and 147). I kept one copy.**

