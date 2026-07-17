

| NGOC LE | lelubaongoc1993@gmail.com |
| :---- | ----: |

AI Product Leader  ·  Voice AI  ·  Fintech  ·  SEA

**PRODUCT SHOWCASE**

**Emotional Speech AI**  ·  R\&D-to-Production  ·  US Live Deployment

Trusting Social  ·  Post-Charge-Off Debt Collection Voice Agent  ·  2024

**PROBLEM SIGNAL**

| Expert signal: AI agent's monotone delivery caused debtors to disengage at negotiation state — estimated 70–80% lower promise-to-pay conversion vs. human agents at this stage. |
| :---- |

**METHODOLOGY**

| 01 · Measure | Isolated production gap: filtered noisy AI calls (FP/FN interruptions cross-validated across multiple speech models). Compared debtor turn count and PTP rate between AI and human at negotiation state — confirmed statistically significant gap. |
| :---- | :---- |

| 02 · Taxonomy Design | Selected emotion labels from top-tier TTS services (ElevenLabs, Cartesia). Tested undefined vs. defined label sets. Discovered LLMs default to affectless text — near-synonym confusion (e.g. supportive vs. empathetic) degraded consistency, especially in hardship states. Refined to 12 defined labels; 3 dominated usage: curious, sympathetic, calm. |
| :---- | :---- |

| 03 · Ground Truth Labelling | Human agents labelled debtor turn emotions on filtered recordings. GPT \+ Gemini independently assigned AI-turn emotion labels (dual annotator for inter-rater reliability). Human agents validated AI-turn labels. Engineering trained per-label voice models. |
| :---- | :---- |

| 04 · A/B Production Test | 50 connected calls: agent with emotion vs. no-emotion. Iterated label set post-batch-1 based on live deployment signal. |
| :---- | :---- |

**RESULTS  ·  A/B TEST  ·  PRODUCTION**

| ×2 | \+60% | Client validated |
| :---: | :---: | :---: |
| Promise-to-pay generated(weekly, early signal) | Debtor turns at negotiation& hardship states | Qualitative complimentfrom US client |

**KEY FINDINGS**

| → Emotion register is low-dimensional in this context. | Only 3/12 labels used in practice (curious, sympathetic, calm). The debtor needs 'I'm listening' vs. 'reading from a script' — not 12 distinct modes. |
| :---- | :---- |

| → LLM text generation suppresses emotion signal. | Root cause: language models default to affectless output. Fix required at prompt level, not just TTS model — dual-layer intervention. |
| :---- | :---- |

| → Near-synonym label confusion degrades annotation quality. | Labels too semantically close (supportive vs. empathetic) caused LLM annotator inconsistency in high-ambiguity hardship states. Taxonomy precision is a production lever. |
| :---- | :---- |

R\&D → Production  ·  Dataset Labelling Framework  ·  A/B Testing · Production  ·  Multi-vendor AI Architecture  ·  Emotion Detection  ·  US Regulated Environment  ·  Industry-First Deployment  ·  Cross-team Coordination