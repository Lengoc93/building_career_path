**NGOC LE — SELECTED WORK**

*AI Agent Product Delivery  |  Enterprise Optimisation  |  Regulated Environments*

---

### 1. AI Agent Architecture for Regulated Multi-Vendor Operations

**Context:** Designed and delivered a production AI Agent system operating across a multi-vendor architecture in the US market — one of the most heavily regulated environments for autonomous AI. The system needed to comply with 17 distinct federal regulatory triggers while operating autonomously at scale.

**What I built:**

A dual-layer agent orchestration architecture where every agent action passes through a compliance detection layer before execution. The architecture is structural — regulatory checks are embedded in the agent's decision pipeline, not bolted on as a review layer. The system physically cannot execute a business action without first evaluating compliance conditions.

- 17 regulatory states, each mapped from federal requirements into a complete agent sub-workflow
- Dual-LLM reflection pattern: one model extracts compliance signals, a second generates the agent response — only after compliance conditions clear
- Reset-and-redetect pattern: fresh compliance evaluation at every decision point (no stale assumptions)
- Exception-within-exception handling: recursive compliance monitoring for nested regulatory triggers

**Result:** 7 months of continuous US production across 2 commercial clients. ~9,500-line agent configuration. Zero compliance escalations requiring human intervention for covered regulatory categories.

**Relevance to enterprise AI agents:** The same structural pattern applies when AI agents operate across multiple business units with different rules — each subsidiary's data governance, reporting standards, and operational constraints become "regulatory states" that the agent must respect. The architecture scales by adding new rule sets, not by rebuilding the system.

---

### 2. Cost & Revenue Optimisation via AI Agent Capabilities

**Context:** An AI Agent system was live in US production but underperforming on the core business metric — converting interactions into completed transactions. The gap was measurable: the agent's conversion rate lagged the target benchmark significantly.

**What I did:**

Drove a systematic optimisation programme across the agent's workflow states — root cause analysis to identify where and why conversions failed, severity mapping to prioritise the highest-impact failure modes, and sequenced capability releases targeting each failure point.

Key capability delivered: an in-agent transaction capability allowing the AI to complete the full business workflow within a single interaction — coordinating Engineering, Data Science, and Agent Architecture teams to build the capability within a multi-vendor compliance framework.

**Results (production, US market):**

| Metric | Outcome | Timeframe |
| --- | --- | --- |
| Conversion success | 1.7x improvement | 30 days post-rollout |
| Revenue uplift | 5.2x | 30 days post-rollout |
| Completed transaction amount | $52K | 3 months post-rollout |
| Weekly transaction plans | 1.3x increase | 3 months post-rollout |

**Relevance to enterprise cost optimisation:** This is the pattern of using AI agents to directly move business numbers — not generating reports, but executing workflows that produce measurable financial outcomes. The methodology (root cause → severity map → prioritised sequencing → production measurement) transfers to any domain where agent actions have quantifiable business impact.

---

### 3. R\&D-to-Production Methodology: Building New AI Capabilities

**Context:** Expert signal indicated the AI Agent's performance at a critical workflow state was 70–80% below human benchmark. The root cause was unknown — could be the language model, the voice synthesis, the conversation design, or all three.

**What I did:**

Owned full R\&D-to-production delivery of a new AI capability:

1. **Measurement:** Isolated the production gap by filtering noise from signal data, cross-validating across multiple models. Confirmed the gap was statistically significant at the specific workflow state.
2. **Taxonomy design:** Evaluated capability labels from multiple vendor services. Discovered that the language model's default output suppressed the target signal — a root cause at the model level, not just the output layer. Refined from 12 candidate approaches to 3 that dominated in practice.
3. **Ground truth framework:** Designed a dual-annotator evaluation framework (GPT + Gemini for inter-rater reliability) with human expert validation — establishing a repeatable evaluation methodology.
4. **A/B production test:** 50-sample production test with iterative refinement between batches based on live signal.

**Results:** 2x target metric improvement (weekly, early signal). +60% engagement at the critical workflow states. Qualitative validation from US commercial client. Industry-first deployment of real-time streaming telephony emotion detection in the target domain.

**Relevance to enterprise AI capability building:** When a conglomerate's AI team demonstrates a capability to C-suite and it triggers a strategic decision, someone needs to own the methodology that goes from "interesting demo" to "production system that reliably delivers business results." This showcase demonstrates that methodology: measure the gap → design the evaluation → build ground truth → test in production → iterate on live signal.

---

*Full technical documentation, architecture diagrams, and evaluation frameworks available upon request.*
