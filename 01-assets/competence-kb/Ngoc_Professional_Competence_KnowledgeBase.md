# Hồ Sơ Năng Lực Chuyên Môn — Ngoc Le

> **Mục đích tài liệu:** Mô tả nền tảng năng lực chuyên môn (professional competence) của Ngoc để làm *input* suy đoán chiều sâu kiến thức theo ba tầng — **Known / Understand / Applicable** — từ đó xây dựng phần **Terminology** cho các nghiên cứu (research) sao cho khớp với knowledge base hiện tại.
>
> **Vai trò hiện tại:** Product Manager cho **Guardrails Framework** tại **Vingroup** — xây dựng các model để thực thi **AI Governance**.
>
> **Quy ước đọc tài liệu:**
> - **Known (Đã biết / Nhận diện):** nhận ra thuật ngữ, biết nó tồn tại và giải quyết vấn đề gì; chưa hành nghề trực tiếp — cần một dòng định nghĩa ngắn khi gặp trong terminology.
> - **Understand (Hiểu):** giải thích được cơ chế, trade-off, khi nào dùng; chưa nhất thiết tự tay build — terminology chỉ cần nhắc lại nuance, không cần giảng từ đầu.
> - **Applicable (Áp dụng được):** đã trực tiếp thiết kế / triển khai / ra production; terminology nên dùng làm *ngôn ngữ chung*, không cần định nghĩa lại — thậm chí Ngoc là nguồn định nghĩa.

---

## 1. Tổng quan hồ sơ (Profile Snapshot)

| Chiều | Nội dung |
| :---- | :---- |
| **Kinh nghiệm** | 10+ năm: AI product delivery, fintech, digital platforms — thị trường SEA và global (US, AU, PH, IN, VN). |
| **Điểm mạnh cốt lõi** | 0→1 AI product; dịch business/regulatory requirements thành AI agent workflow; điều phối cross-functional trong môi trường regulated, multi-stakeholder. |
| **Sản phẩm tiêu biểu** | AI Voice Agent cho post-charge-off debt collection — từ product thesis đến US live production; compliance guardrail architecture (state machine ~9,500 dòng); emotional speech capability (industry-first). |
| **Nền tảng trước đó** | Strategy & Transaction advisory @ EY Singapore (cross-border due diligence); Product @ ZaloPay (VNG), Shopee (Sea Group). |
| **Học vấn** | RMIT — Bachelor of Business Information Systems, Economics & Finance. |
| **Định hướng học tập hiện tại** | Frontier LLMs, Agents, Context Engineering, Voice stack, Evals — theo reading list Latent.Space 2025/2026. |

**Đặc điểm nhận thức (cognitive signature):** Ngoc tư duy theo hướng **product-strategy + architecture**, không phải research/algorithm thuần. Điểm mạnh là:
- Nhìn hệ thống dưới dạng **state machine, workflow, decision pipeline**.
- Chuyển **quy định pháp lý → đặc tả kỹ thuật** (regulation-as-architecture).
- Ra quyết định theo **80/20, root cause analysis, severity mapping**.
- Đánh giá vendor / model choice ở tầng **trade-off và business impact**, không phải tầng implementation nội bộ của model.

---

## 2. Bản đồ lĩnh vực chuyên môn (Domain Map)

Sắp theo mức độ thành thạo giảm dần, để định vị nơi terminology cần "nói nhẹ" và nơi cần "giải thích kỹ".

### 2.1 AI Product Management & 0→1 Delivery — *lõi mạnh nhất*
Product thesis, market selection framework, RFP/DD, product spec, cross-functional coordination, roadmap, prioritisation. Đây là ngôn ngữ mẹ đẻ.

### 2.2 Agentic Systems & Guardrails Architecture — *lõi hiện tại (Vingroup)*
Agent orchestration, compliance-as-infrastructure, state machine controller layer điều khiển external LLM, dual-LLM reflection pattern, exception handling. Đây là chỗ giao giữa kinh nghiệm cũ (Voice Agent) và vai trò mới (Guardrails Framework / AI Governance).

### 2.3 Regulated AI & Compliance — *áp dụng sâu ở một domain cụ thể*
US debt collection: FDCPA, Regulation F, SCRA, TCPA. Hiểu rất sâu *pattern* structural enforcement, nhưng nội dung pháp lý gắn với domain collection (chưa chắc phủ các khung governance rộng như EU AI Act, NIST AI RMF, ISO 42001 — xem mục 4).

### 2.4 Voice AI Stack — *home turf về mặt product*
ASR → LLM → TTS, streaming telephony, emotion detection, TTS vendors (ElevenLabs, Cartesia), full-duplex (Moshi), Realtime API. Mạnh ở tầng product/eval, không phải tầng tự train model.

### 2.5 Evaluation & Data Labelling — *áp dụng thực chiến*
Dataset labelling framework, dual-annotator, inter-rater reliability, ground truth, A/B production test, taxonomy design, FP/FN cross-validation.

### 2.6 Fintech & Credit — *nền tảng vững, giai đoạn trước*
Consumer lending, eKYC, credit scoring pipeline, telco data integration, digital acquisition/onboarding conversion, B2B2C.

### 2.7 Strategy / Transaction Advisory — *nền tảng phân tích*
Due diligence (technology/commercial), financial modelling, scenario analysis, market entry, corporate governance diagnostics.

---

## 3. Bản đồ kiến thức 3 tầng (Known / Understand / Applicable)

> Đây là phần trọng tâm để suy ra chiều sâu khi soạn terminology. Với mỗi cụm khái niệm, đánh dấu tầng và ghi chú cách xử lý trong terminology.

### 3.1 Tầng APPLICABLE — *đã trực tiếp làm ra production*
Với các thuật ngữ này, terminology **dùng làm ngôn ngữ chung**, không định nghĩa lại; nếu có, chỉ để chuẩn hoá cách gọi.

- **AI Voice Agent / Conversational Agent** — thiết kế, triển khai, ra US production.
- **State Machine (conversation controller)** — kiến trúc ~9,500 dòng điều khiển external LLM (OpenAI); states, transition conditions, deterministic vs. LLM-decided routing.
- **Guardrails / Compliance-as-infrastructure** — exception states, structural enforcement, transition-ordering priority.
- **Dual-LLM Reflection pattern** — Reflection LLM trích compliance signal, Response LLM sinh câu trả lời sau khi điều kiện thông qua.
- **Reset-and-redetect / Exception-within-exception** — pattern tự thiết kế cho recursive compliance monitoring.
- **Regulatory mapping** (FDCPA §1692c/§1692g, Regulation F, SCRA, TCPA) → **exception state taxonomy** (17 states).
- **Dataset Labelling Framework** — dual-annotator (GPT + Gemini), inter-rater reliability, human validation.
- **Emotion Taxonomy Design** — undefined vs. defined labels, near-synonym confusion, low-dimensional register (12→3 labels).
- **A/B Production Test** — thiết kế mẫu (50 connected calls), iterate theo batch.
- **TTS / Streaming Telephony Emotion Detection** — đánh giá & tích hợp ElevenLabs, Cartesia; real-time streaming.
- **Root Cause Analysis → Severity Mapping → Prioritised Sequencing** — phương pháp tối ưu conversion/revenue.
- **Market Selection Framework / Product Thesis** — regulatory moat, unit economics, competitive density.
- **RFP / Due Diligence response** (product side), multi-market client development.
- **eKYC & Credit Scoring pipeline integration**, telco data source integration.
- **80/20 prioritisation, critical-path / parallel workstream structuring.**

### 3.2 Tầng UNDERSTAND — *hiểu cơ chế & trade-off, chưa nhất thiết tự build*
Terminology chỉ cần **nhắc nuance/trade-off**, không giảng nền tảng.

- **LLM cơ bản:** prompt engineering, context window, affectless default output, hallucination, system/response prompt.
- **Reasoning models:** o1 "không phải chat model", deliberative agent mindset, DeepSeek R1 (theo reading list, tầng narrative/tradeoff).
- **Agent frameworks & memory:** *Building Effective Agents* (Anthropic), MemGPT (memory architecture), vị trí voice agent trong agentic stack.
- **MCP (Model Context Protocol):** vì sao trở thành chuẩn kết nối agent ↔ tools/data (tầng khái niệm & chiến lược).
- **Context Engineering vs. RAG:** dịch chuyển "RAG is dead, context engineering is king"; retrieval/context layer làm gì trong product spec.
- **Evals & Benchmarks:** IFEval, ARC-AGI, SWE-Bench (framing); "how do we know it's working".
- **Compliance enforcement patterns:** review-layer vs. structural, defense-in-depth, human-in-the-loop trade-off (cost/latency vs. compliance risk).
- **Voice stack tổng thể:** ASR → TTS → omnimodal arc, full-duplex (Moshi), Realtime API.
- **World models vs. word models** — lăng kính expert reasoning vs. LLM pattern matching (nền cho emotionally intelligent design).
- **Financial/transaction analysis:** valuation input, scenario modelling, platform scalability/vendor-dependency assessment (từ EY).

### 3.3 Tầng KNOWN — *nhận diện thuật ngữ, cần 1 dòng định nghĩa khi gặp*
Terminology **nên định nghĩa ngắn gọn** khi dùng, vì đây là vùng "biết tên, chưa hành nghề".

- **Fine-tuning kỹ thuật:** LoRA / QLoRA, DPO (biết là "vocabulary bắt buộc để push back với eng team", chưa tự chạy notebook).
- **RAG nâng cao:** GraphRAG, RAGAS (bookmark cho fintech/DD use case).
- **Post-training / RLHF survey** — biết tồn tại, chưa đi sâu.
- **AI Governance frameworks rộng** (khả năng cao ở tầng Known, xem mục 4): NIST AI RMF, EU AI Act, ISO/IEC 42001, model cards, red-teaming chuẩn hoá.
- **Multimodal / Vision / Diffusion** — chủ động "skip for now", chỉ nhận diện.
- **Code generation / devtools** — low priority, tầng nhận diện.

---

## 4. Vùng ranh giới & giả định cần kiểm chứng (Gaps & Assumptions)

Những điểm này giúp phần terminology **không giả định sai** về chiều sâu:

1. **AI Governance khung chuẩn quốc tế:** Ngoc rất mạnh về *compliance-as-architecture* trong **một domain cụ thể** (US debt collection). Chưa có bằng chứng trong hồ sơ về NIST AI RMF / EU AI Act / ISO 42001 / OECD AI Principles. → Trong terminology cho vai trò Guardrails/AI Governance ở Vingroup, **nên định nghĩa rõ** các khung này (giả định tầng Known → cần nâng lên Understand).
2. **Tầng model internals:** Ngoc làm ở tầng product/architecture/eval, không phải training/inference internals. Terminology về transformer internals, attention, quantization… nên coi là Known.
3. **Guardrails "học thuật":** các khái niệm như constitutional AI, policy models, content moderation classifiers, jailbreak/prompt-injection taxonomy — có thể là Known/Understand, cần xác nhận. Đây là vùng giao thoa trực tiếp với vai trò hiện tại → ưu tiên làm rõ.
4. **Thuật ngữ cùng nghĩa khác tên:** Ngoc gọi "exception states / guardrails / state machine controller"; giới học thuật/vendor có thể gọi "safety layer, policy engine, orchestration guardrail, LLM firewall". Terminology nên **bắc cầu (crosswalk)** giữa ngôn ngữ nội bộ của Ngoc và ngôn ngữ chuẩn ngành.

---

## 5. Hàm ý cho phần Terminology của research (How to Use This)

Khi soạn **Terminology section** cho một nghiên cứu, áp dụng nguyên tắc theo tầng:

| Nếu khái niệm rơi vào tầng… | Cách viết trong Terminology |
| :---- | :---- |
| **Applicable** | Dùng thẳng như ngôn ngữ chung; nếu định nghĩa, để **chuẩn hoá cách gọi** và bắc cầu sang thuật ngữ chuẩn ngành. |
| **Understand** | Nhắc lại **nuance / trade-off / khi nào dùng**; bỏ qua phần nhập môn. |
| **Known** | Cho **1 câu định nghĩa gọn + 1 ví dụ/liên hệ** với domain Ngoc đã làm (Voice Agent, collection, fintech) để neo vào kinh nghiệm sẵn có. |
| **Gap (mục 4)** | Định nghĩa đầy đủ + **crosswalk** tới thuật ngữ nội bộ Ngoc đã dùng (vd: "policy engine ≈ exception guardrail layer"). |

**Nguyên tắc neo (anchoring):** với khái niệm mới, luôn liên hệ về ba mỏ neo kinh nghiệm mạnh nhất của Ngoc — **(1) state machine điều khiển LLM, (2) compliance-as-infrastructure, (3) eval/labelling framework**. Điều này rút ngắn thời gian nội hoá vì gắn cái mới vào cấu trúc nhận thức sẵn có.

---

*Tài liệu này là input mô tả năng lực, không phải đánh giá hiệu suất. Các mục đánh dấu "giả định / cần kiểm chứng" nên được Ngoc xác nhận trước khi dùng để cố định chiều sâu terminology.*
