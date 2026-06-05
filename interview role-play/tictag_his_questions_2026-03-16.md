# His Questions → Your Answers
_Exported: 2026-03-16_

## Q1 [High Risk]
You've been in voice AI, not computer vision. Why does that experience transfer here?

### Recommended Answer
Fair question. The domain is different, but the PM challenge is structurally identical. At Trusting Social I was translating between a deep learning R&D team building something academically novel — real-time streaming emotion detection — and a commercial team that needed it in production with US compliance constraints, in parallel sprints, under client pressure.
          What I bring isn't computer vision expertise. What I bring is knowing how to define requirements clearly enough that your engineers aren't being asked to guess what "good enough for the pilot" means versus what "production-ready" means. That's the bottleneck I've fixed before.

> **Tactical Note:** Watch out: Don't say "I can learn CV fast." Own the gap, then reframe to what you actually have.

---

## Q2 [High Risk]
Garreth was here before you. He didn't make it work. Why would you be different?

### Recommended Answer
I'd be careful about that framing — I think the problem wasn't personal, it was structural. If one PM is expected to drive product cadence across a Singapore R&D team and a Vietnam delivery team simultaneously, without clear ownership lines, without a shared prioritisation framework, and with two geographies running on completely different commercial timelines — that's a setup that would challenge most PMs.
          What I'd do differently is establish the operating model first before trying to drive cadence. What's the single source of truth for the backlog? Who has authority to freeze a sprint for Vietnam delivery versus continue a Singapore R&D cycle? Without that clarity, any PM is going to struggle.

> **Tactical Note:** Watch out: Yihang is Garreth's friend. Never throw Garreth under the bus. Attribute it to structure, signal you'd fix the structure.

---

## Q3 [Medium Risk]
What do you actually know about our technology stack?

### Recommended Answer
From what's publicly visible and my conversations with Michael: your core is computer vision, with a data annotation platform as both an internal enabler and a commercial product — the Truetag pipeline targeting near-perfect accuracy through human-in-the-loop quality control. Mobile-first crowdsourcing suited to ASEAN labor markets.
          For the Vietnam client use cases — Lotte self-checkout fraud detection, Vietnam Airlines Cargo asset detection — the gap isn't your model quality. It's on-premise deployment and real-time latency. Those are infra and delivery questions, not research questions. That's where I'd focus my first 30 days.

> **Tactical Note:** Watch out: If he drills into specific architectures, say: "I'd want to spend time with your architecture docs — I don't want to pretend I know your stack better than I do."

---

## Q4 [Medium Risk]
How would you handle Michael pushing for a client feature that SG engineering says will take 3 months?

### Recommended Answer
That's not a PM problem to solve alone — it's a product strategy decision that needs to be made transparently, not worked around.
          Concretely: I'd scope the 3-month request and find the 80% version that could be a 3-week pilot wrapper. Then present both to Kevin and Michael: here's what we can deliver that proves the concept, here's what the full version costs and when it's available. The PM's job isn't to absorb that tension — it's to translate it into a decision that leadership owns.

---

## Q5 [Medium Risk]
What's your technical depth? Can you write requirements engineers can build from without constant clarification?

### Recommended Answer
Yes — and I can point to evidence. The dataset labelling framework I designed for emotion detection was built from scratch: I defined the labelling schema, edge case taxonomy, inter-annotator agreement rules, and production validation criteria. Engineers and data scientists built from it without a back-and-forth loop.
          At TS I was coordinating three engineering sub-teams simultaneously. I work spec-first. I'd rather spend two extra days getting the spec watertight than lose a sprint to misaligned interpretation.

---

## Q6 [Lower Risk]
What would your first 30/60/90 days look like?

### Recommended Answer
Days 1–30 — diagnosis only. Full access to architecture docs, current backlog, and every SG-VN conversation thread. Understand the real latency bottleneck on VNA, the on-premise constraint with Lotte, where the SG research roadmap is. No solutions yet.
          Days 30–60 — operating model design. Propose a single-source-of-truth backlog with clear lane separation between SG R&D and VN delivery. Run past you and Kevin before touching anything.
          Days 60–90 — first delivery cycle. One clean sprint with defined output and a retrospective. Prove the operating model works, not just ship a feature.

---

## Q7 [Lower Risk]
You're based in Vietnam but we're a Singapore entity. How does that work operationally?

### Recommended Answer
My proposal is a Singapore employment pass, based in Vietnam — physically present in the Vietnam commercial environment while remaining on the SG entity. That matters for the SG government grant structure, and means I'm available for client meetings without travel overhead.
          Practically: quarterly visits to Singapore for deeper alignment. Good async documentation and a weekly structured sync resolves most day-to-day coordination — and establishing that sync cadence is one of the first things I'd want to build.

---

