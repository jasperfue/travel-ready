# Presentation: From Idea to Pull Request

Slide blueprint for the 55-minute AI Focus Session. The built deck is [From Idea to Pull Request.pptx](From%20Idea%20to%20Pull%20Request.pptx), based on the Eurowings Digital slide master. The slides frame a live demonstration in one local GitHub Copilot CLI session; they do not replace it. For much of the session the shared screen shows the app, Copilot CLI, the GitHub issue or the PR.

The deck has 18 presentation slides followed by 6 handout slides. The handout slides are hidden in the slide show; export to PDF with “Include hidden slides” to share them. Every slide has presenter notes with timing and the next screen to switch to.

## Narrative

**Thesis:** Writing code got cheap. Deciding and checking didn't. The demo is the evidence. Every part has a newcomer layer and a layer for people already using agents; recurring “New to this / Already using agents” boxes make this visible. After the demo, the session zooms out to teams, real experience and next steps.

## Visual direction

**Concept: a journey with human checkpoints.** Four stops (Ticket, Refine, Implement, Review) appear on slide 4 and return as a small route marker in the top-right corner of the demo slides (5–11, 13).

- **Format:** Eurowings Digital master (layouts Intro_A, 1_Intro_A, Intro_D, Blank, Outro), magenta as the dominant color, Aptos fonts. Plenty of negative space for a shared Teams screen and a PDF handout.
- **Graphics:** simple editable vector shapes and line icons. No extra stock photos, no tiny screenshots, no dense paragraphs.
- **Accessibility:** strong contrast; meaning never carried by color alone (filled vs. outlined shapes, solid vs. dashed borders, text labels).

---

## Presentation slides

| # | Slide | When | Layer | Switch to afterwards |
| --- | --- | --- | --- | --- |
| 1 | Welcome | While people join | — | — |
| 2 | Writing code got cheap. Deciding and checking didn't. | 0–2 | Thesis | — |
| 3 | Where are you today? (ladder) | 2–4 | Both | — |
| 4 | Today: one agent session, live | 4–5 | Both | Starter app |
| 5 | A small request, many decisions | ~6 | Both | Copilot CLI: `grill-me` |
| 6 | Interview first, not prompt first | 6–15 | Both (level box) | Copilot CLI: decisions |
| 7 | The issue is the record we review against | ~15 | Both | Copilot CLI: issue update, then `tdd` |
| 8 | Why test-first matters with agents | 18–20 | Both (level box) | Terminal: confirm seams |
| 9 | Agents are great at making tests pass | 20–24 | Agent users | Terminal: first test, red → green |
| 10 | What will it do with what we didn't decide? | 24–30 | Both | Terminal, then PR |
| 11 | A passing check is evidence—not approval | ~30 | Both (level box) | PR and PR version of the app |
| 12 | Rehearsal result (backup only) | ~30, if needed | — | Rehearsal PR or recording |
| 13 | Would you accept this change? | 38–42 | Both | PR (optional change request) |
| 14 | From one session to a team | 42–45 | Agent users | A skill file in the repo |
| 15 | Lessons from the field | 45–48 | Both | — |
| 16 | Your next step | 48–50 | Both | — |
| 17 | Questions & resources | 50–55 | — | Stays up during Q&A |
| 18 | Thank you | End | — | — |

### 1. Welcome

**On screen:** FROM IDEA TO / PULL REQUEST · What changes when the agent writes the code · AI Focus Days · November 2026 · Jasper Fülle.

### 2. Thesis

**On screen:** “Writing code got cheap. Deciding and checking didn't.” Left: *Getting cheaper: writing the code.* Arrow “the work moves”. Right (magenta): *Still scarce: deciding what to build · checking that it's right · owning the result.* Footer: “Today, live: one real change, start to finish.”
**Presenter note:** The claim the whole session supports. Not a tool tutorial.

### 3. Where are you today?

**On screen:** A five-step staircase: Autocomplete · Chat · Agent, me in the loop · Agent from specs & tests · Team workflows. Chat callout: “What frustrates you most about coding agents?”
**Presenter note:** Teams poll with the five rungs. Promise a next step for every rung (slide 16). Pick one or two frustrations to come back to.

### 4. Today: one agent session, live

**On screen:** Four stops with two rows, “AI does” and “People decide”, and “The agent does the work. People decide what it should do—and whether it's done.”
**Presenter note:** Agenda; one-sentence definitions of coding agent and PR; then the starter app.

### 5. A small request, many decisions

**On screen:** The quoted request, “Delegate this as is, and the agent decides for you,” the clarifying question, and a checklist card mirroring the starter app.
**Presenter note:** Collect questions for about a minute, then invoke `grill-me`.

### 6. Interview first, not prompt first

**On screen:** *Prompt first* (you try to write the perfect prompt; the agent fills gaps silently) vs. *Interview first* (the agent asks and recommends; gaps become visible decisions). “Who found what?” chips: Both / Agent only / People only. Level box — New to this: what a skill is. Already using agents: try it before you write the long prompt.
**Presenter note:** Decide two or three questions including scope and the test seam.

### 7. The issue is the record we review against

**On screen:** Decide → Record → Approve → Implement; three reasons to write it down.
**Presenter note:** Context engineering in practice: chat history is not a durable artifact.

### 8. Why test-first matters with agents

**On screen:** Subtitle “We decide what they check.” Four reasons: a “done” it can check · red proves the test works · small slices, small diffs · a safety net that stays. Level box — New to this: a test is an executable example (“new items count” → “4 of 5 packed”). Already using agents: you confirm the seams; the agent runs red → green; a final green alone proves nothing.
**Presenter note:** Show while `tdd` explores. The agent writes and runs the tests itself; we confirm seams and approve the test command.

### 9. Agents are great at making tests pass

**On screen:** Tag “If you already use agents”. Three trap → fix pairs: Tautological → take the expected value from the spec · Coupled to internals → test what the traveler sees, at the seam · All tests first → one test, one change, repeat. “The leash: agree the seams first · red before green · one slice at a time.”
**Presenter note:** The `tdd` skill names these anti-patterns. Check the first live test against them.

### 10. What will it do with what we didn't decide?

**On screen:** Duplicates · Long text · Spaces · Removing. Chat callout for predictions.
**Presenter note:** A genuine prediction while the loop runs. Fallback to slide 12 at about minute 30.

### 11. A passing check is evidence—not approval

**On screen:** Subtitle “Review is the new bottleneck.” Behavior · Experience · Change. Level box — New to this: start with the result. Already using agents: ask for evidence before reading the diff.

### 12. Rehearsal result (backup)

**On screen:** REHEARSAL RESULT / NOT THE LIVE RUN.

### 13. Would you accept this change?

**On screen:** Approve · Request changes · Need more evidence (solid, dashed and dotted borders).
**Presenter note:** If the PR is good, approve with reasons, turn the agent's own choices into accepted decisions or follow-up issues, and merge live if the room approves.

### 14. From one session to a team

**On screen:** “Skills are team knowledge—treat them like code.” Write down a practice → Version it in the repo → Every agent uses it. “grill-me and tdd are plain Markdown files in this repo.” Chat: “Which of your team's practices should become a skill?”

### 15. Lessons from the field

**On screen:** What I gave the agent → What surprised me → What I do differently now. “Real work is messier than a demo. What has worked—or failed—for you?”
**Presenter note:** **Fill in before the session** with one real, anonymized example; the slide contains placeholder text.

### 16. Your next step

**On screen:** One next step per rung (rungs 1 and 2 share one). Below, in magenta: **Next level: harness engineering**—design systems around the agent that constrain (architectural boundaries, dependency rules), inform (context engineering, documentation), verify (tests, linting, CI validation) and correct (feedback loops, self-repair).

### 17. Questions & resources

**On screen:** “Questions welcome” card; clickable links to the skills (github.com/mattpocock/skills), the demo repository (**placeholder** github.com/netlight-example/travel-ready), Copilot CLI access (link in chat) and contact (jasper.fuelle@netlight.com).
**Presenter note:** Leave up during Q&A; post the same links in chat.

### 18. Thank you

Outro layout.

---

## Handout slides (hidden)

1. **Divider:** Handout / Reference.
2. **The prompts we used:** Clarify (`grill-me`), Record (issue update), Implement (`tdd` and PR), with `#<n>` for the issue number.
3. **A reusable issue template:** Problem, Expected behavior, Out of scope, Verification.
4. **Review checklist:** Product, Design, Engineering (including test traps) and Everyone, plus the four closing questions.
5. **Mini glossary:** coding agent, Copilot CLI, pull request, skill, TDD, test seam, harness engineering.
6. **Getting started:** pick, clarify, record, implement, review; plus resources (skills link, demo repository placeholder, Copilot CLI access placeholder, contact email). Fill in the placeholders before sharing.
