Build a single-file HTML interview roleplay prep tool for a meeting between [MY NAME] and [INTERVIEWEE NAME + ROLE].

CONTEXT TO LOAD:
- My profile: [paste CV summary or key facts]
- Their profile: [paste public info + any confidential background]
- Sensitive intel: [any political/relationship dynamics to handle carefully]
- Meeting objective: [what I want to get out of this meeting]

BUILD FOUR TABS:

---

TAB 01 — Context Brief
Display two profile cards side by side:
- Left: Their profile (background, personality traits, what they'll be assessing, known sensitivities)
- Right: My profile (strengths relevant to this meeting, known gaps they'll probe)
- Full-width card below: Sensitive intelligence (relationship dynamics, political landmines, framing guidance)
- Final card: What they want from this meeting

EXPORT/IMPORT:
- "⬇ Export MD" button — exports all content as structured markdown with ## headings, bullet lists, blockquotes for warnings
- "⬆ Import MD" button — accepts .md or .txt file, renders inline with same visual style; note at bottom: "Reload to restore interactive view"

---

TAB 02 — Live Roleplay
AI-powered chat where they play [INTERVIEWEE NAME] in character.

System prompt to load:
- Their personality, loyalties, known biases, what they're assessing
- Confidential context about the company/situation
- Conversation style: direct, push back when I oversell, show warmth when I demonstrate genuine understanding
- Keep responses 3–5 sentences, stay in character always
- Pre-load opening message from them to start the conversation

UI:
- Chat log with distinct avatars/colors for each speaker
- Textarea input (Enter to send, Shift+Enter for newline)
- Typing indicator while AI responds
- "⬇ Export Dialog CSV" button — exports all messages as CSV with columns: index, role, sender, message (skip system messages)

---

TAB 03 — Their Questions → My Answers
Accordion list of questions they are likely to ask, ranked by risk level (High / Medium / Low).

For each question:
- Risk badge (color-coded)
- Recommended answer (specific, not generic — calibrated to my actual background)
- Tactical note where relevant (what to avoid, what to watch for)

EXPORT/IMPORT: same MD export/import as Tab 01

---

TAB 04 — My Power Questions
Accordion list of questions I should ask them, ranked by priority (Must Ask / Important / Nice to Have).

For each question:
- Priority badge (color-coded)
- Why this question matters (what it reveals, what I'm really testing)
- What to listen for (good answer vs. red flag vs. dangerous answer)

EXPORT/IMPORT: same MD export/import as Tab 01

---

DESIGN REQUIREMENTS:
- Dark theme (#0a0a0f background)
- IBM Plex Mono for labels/code, IBM Plex Sans for body
- Color system: cyan (#00e5ff) for their side, orange (#ff6b35) for my side, amber (#fbbf24) for warnings/tactical notes
- Sticky header + tab bar
- Toast notifications for export/import actions
- Smooth accordion open/close with + → × toggle
- Typing dots animation for AI response
- All in one .html file, no external dependencies except Google Fonts and Anthropic API

API:
- Model: claude-sonnet-4-20250514
- No API key in code (handled externally by claude.ai)
- Full conversation history passed on each call
- Append each message with data-role attribute for CSV export

CONTENT QUALITY BAR:
- Answers must reference my actual experience, not generic PM advice
- Questions must be calibrated to my real current situation (career stage, what I need to validate)
- Sensitive intel must shape both the roleplay character and the tactical notes
- Risk/priority rankings must reflect genuine stakes, not decoration