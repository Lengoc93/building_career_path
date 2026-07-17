# Round 3 — Technical Interview (concepts / frameworks)

**Explicitly leans conceptual, not coding.** They want to know I can *reason* about AI
agent systems at the level a Deployment Strategist needs: enough to earn engineers'
trust, scope integrations, judge agent quality, and talk architecture with the CTO —
without pretending to be an ML researcher. Pitch at **"Understand" depth, with
"Applicable" depth on deployment/evals/guardrails** (see competence KB).

## Concept areas to be crisp on

### Agent architecture & orchestration
- Single-agent vs. multi-agent; when to decompose. Workflow/state-machine agents vs.
  free-form tool-use agents — I have hands-on here (~9,500-line state machine, 17
  states, dual-LLM reflection pattern, reset-and-redetect).
- Tool use / function calling; retrieval; memory (short vs. long-term).
- **Building Effective Agents** (Anthropic) framing: prompt-chaining, routing,
  parallelization, orchestrator-workers, evaluator-optimizer — map each to a
  deployment situation.

### Context engineering & prompting
- Context windows, retrieval-augmented context, prompt architecture as a *product*
  surface. Why localization is largely a context/prompt + eval problem, not a
  new-model problem — directly relevant to Wonderful's per-market customization.

### RAG & knowledge grounding
- Chunking, embeddings, retrieval quality, grounding to reduce hallucination — the
  backbone of an enterprise support agent that must cite the customer's real policies.

### Evaluation (my strongest technical card for this role)
- Offline vs. online eval; golden sets; LLM-as-judge and its failure modes;
  inter-rater reliability. I lived this: **dual-annotator labelling (GPT + Gemini),
  human validation, per-label models** — I can talk evals from real production, not
  theory.
- Production monitoring: drift, regression, confidence thresholds, escalation rates,
  containment vs. CSAT tradeoffs.

### Guardrails, safety & compliance
- Structural guardrails vs. post-hoc review — my core thesis. Regulation/policy → state
  machine. Exception-within-exception handling. This is a differentiator; lead with it.

### Voice / omnichannel stack (bonus home-turf)
- ASR → LLM → TTS pipeline; latency budgets, barge-in, full-duplex; emotion/affect in
  TTS (I shipped industry-first streaming emotion detection). Wonderful is voice+chat+
  email — I can speak the voice layer credibly.

### Model & vendor tradeoffs
- Frontier vs. smaller/cheaper models; when reasoning models earn their latency/cost;
  build-vs-buy for components. Evaluate at the **trade-off + business-impact** layer,
  which is exactly the deployment-strategist altitude — not model internals.

## Framing the honest boundary (from competence KB)

> "I reason about these systems as a **product-strategy + architecture** person. I've
> designed and shipped agent workflows, evals, and guardrails to production — so I can
> go deep on deployment, evaluation, and orchestration. I'm not going to out-math your
> ML researchers on model internals, and I won't pretend to. My job is to make the
> system *work for the customer* — and I know exactly where the deployment failure
> modes live."

That honesty *is* the signal for a deployment role — own the Applicable areas, be
clear on the Known/Understand boundary.

## Prep actions before this round

- Re-read `02-evidence/trusting-social/guardrail-architecture/` so the state-machine
  and dual-LLM patterns are fluent, with numbers.
- Skim `05-growth/reading/` (Building Effective Agents, evals, voice, context
  engineering) to refresh vocabulary for a global technical audience.
- Prepare **one crisp diagram in words**: how an enterprise support agent is wired
  (intake → context/RAG → policy/guardrail states → response → eval/monitor → human
  fallback).
