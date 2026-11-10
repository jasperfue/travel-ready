# Facilitator guide

See [workshop context and invitation](context.md) for the audience, purpose, and commitments behind this session. The slides are in [From Idea to Pull Request.pptx](From%20Idea%20to%20Pull%20Request.pptx); their blueprint is in [presentation.md](presentation.md).

## The story

**Thesis:** Writing code got cheap. Deciding what to build, checking that it's right and owning the result did not. That is where the human work moves when an agent writes the code.

The session supports this claim with one real change, made live. Participants act as a cross-functional product team. A fictional travel checklist works, but travelers cannot add their own items. Together, the group turns a brief request into an agreed issue, has a coding agent implement it test-first, and decides whether to accept the resulting pull request. The demo is the evidence; the subject is the decisions and the checking along the way. Skills support the workflow; they are not the topic.

Everything happens live in **one local GitHub Copilot CLI session**:

1. `grill-me` interviews the room about the issue.
2. The agent writes the agreed decisions into the GitHub issue.
3. The `tdd` skill implements them in red → green slices.
4. The agent opens a pull request, which the room reviews.

After the demo, the session zooms out: how a team turns its practices into shared skills, one honest lesson from real project work, and a concrete next step for every experience level.

The live feature is intentionally **not implemented** in the starter. Checkboxes and progress already work; all state resets on reload. This is a fictional example: never use real passenger data.

## Session design

- **Beginner-friendly, not beginner-centered.** Participation is voluntary, so expect more interest and experience than in a mandatory session, but the invitation also promised that no prior experience is needed and welcomed designers and product owners. Every part therefore has two layers: a one-sentence entry point for newcomers, then the part that is interesting for people who already use agents. The slides make this explicit with recurring “New to this / Already using agents” boxes. Keep definitions to one sentence; don't teach tool features.
- **What makes it worth a consultant's time:** a clear point of view, opinionated practice and honest experience—how to make work delegable, how to keep an agent honest, what evidence to demand, how practice scales to a team. Not explanations of what a skill is.
- **By the end, participants can:** name the decisions to make before an agent starts, explain why decisions belong in the issue rather than the chat, recognize tests that prove nothing, judge an agent's PR against behavior and evidence, and name their own next step.
- **Participation:** The room places itself on the ladder, shares frustrations, identifies ambiguities, makes scope decisions, confirms test seams, predicts what the agent will do with undecided details, votes on the PR and names practices worth turning into skills. The facilitator operates the tools and invites product and design perspectives alongside engineering ones.
- **Where people stay in control:** before implementation (decisions and issue approval), during it (`tdd` asks to confirm the test seams; Copilot CLI asks before running tools and commands; the facilitator can stop it), and after it (PR review and verdict).
- **Materials:** The starter app, [draft issue](issue.md), Copilot CLI with the repository's skills, the GitHub issue and PR views, Teams polls, a prepared rehearsal branch/PR or recording, and one real example from your own project work.

## Before the session

1. Rehearse locally: install with `pnpm install --frozen-lockfile`, run `pnpm dev`, and open the page. Run `pnpm test`, `pnpm lint`, and `pnpm typecheck`. Check screen sharing and terminal font size.
2. Publish the starter to a GitHub repository only when approved. Commit the starter, verify the default branch and CI, and create an issue using [issue.md](issue.md).
3. Set up the demo environment for Copilot CLI. The agent runs tools and commands on your machine, so use an isolated, prepared environment (for example a disposable clone in a dev container or VM) without unnecessary credentials. Give the CLI GitHub access limited to the demo repository (for example `gh auth login` with a narrowly scoped token) so it can update the issue and open the PR. Confirm that repository policies allow this.
4. Rehearse the skills in Copilot CLI. The repository has `grill-me`, `grilling`, `tdd` and `pr` installed under `.agents/skills`, with links under `.claude/skills`. Check that Copilot CLI discovers them; `grill-me` must be invoked explicitly and delegates to `grilling`. The upstream `tdd` skill conditionally references `codebase-design`, so check that dependency if the rehearsal needs it. If a skill is unavailable, explain the limitation and use the equivalent plain-language prompt from the handout. Have one skill file ready to open briefly during the team block (slide 14).
5. Rehearse the whole flow end to end, including how long implementation takes. Approve commands individually where the audience can see them rather than allowing everything up front. Save a finished rehearsal branch and PR (or a short recording) as a backup, with its own issue text. Keep the red → green terminal output from the rehearsal. Note whether any of the rehearsal's tests fell into one of the traps on slide 9; a real example is better than the slide's illustration. Reset the demo issue and branch to the untouched starting state.
6. Prepare two app views: a clean clone of the starter on the default port, labeled **Starter**, and the agent's working copy on another port (for example `pnpm dev --port 3001`), labeled **PR version**. Rehearse switching between them.
7. **Prepare your story for slide 15.** One real, anonymized example from your own work with agents: what you gave the agent, what surprised you, and what you do differently now. It doesn't have to be a failure. Replace the placeholder text on the slide. Keep client details out.
8. Prepare the Teams polls in the meeting before the session: “Where are you today?” with the five ladder rungs (single answer, anonymous, results shared) and optionally role (multiple answers). Test that the Polls app is available in your tenant; chat is the fallback. Have a quick poll ready for the scope decision. If possible, ask a co-facilitator to watch chat and keep time.
9. Have the issue, Copilot CLI, both app views, the PR list, Teams chat/polls, the slides and this guide ready. Prepare the handout (export the deck to PDF with hidden slides included) and the approved Copilot access instructions. Send the meeting link and explain that no coding setup is needed.

## 55-minute run of show

Times include discussion. The demo is the spine; the deeper layers are commentary, not extra demo steps. Protect the issue approval, the review and the team block.

**Switching rule:** start each agent step first, then talk over the matching slide while the agent reads, drafts or runs, and switch back as soon as it needs you. That fills the waiting time without dead air.

| Min | Screen | What happens | Participants |
| --- | --- | --- | --- |
| 0–5 | Slides 1–4 | Thesis, ladder poll and frustration question, today's route. | Place themselves on the ladder; share a frustration. |
| 5–7 | **Demo** | The starter app (what's missing), then the one-line GitHub issue. | — |
| 7–8 | Slide 5 | Collect clarifying questions in chat. | Name decisions to clarify. |
| 8 | **Demo** | Start `grill-me` (prompt 1); don't wait for it. | — |
| 8–9 | Slide 6 | Interview first, not prompt first—while it reads the repo. | — |
| 9–15 | **Demo** | `grill-me` rounds: compare with the chat, decide two or three questions incl. scope and test seam. | Make the decisions. If unresolved at 15, use the prepared example decisions. |
| 15 | **Demo** | Ask the agent to draft the issue update (prompt 2). | — |
| 15–16 | Slide 7 | Why we write it down—while it drafts. | — |
| 16–18 | **Demo** | Read, correct and approve the draft; the agent posts it. Start `tdd` (prompt 3). | Confirm that the issue says what was agreed. |
| 18–20 | Slide 8 | Why test-first matters with agents—while it explores. | — |
| 20 | **Demo** | `tdd` proposes the seams; the room confirms them. | Confirm the seams. |
| 20–24 | Slide 9, then **demo** | Traps and fixes; then look at the first real test, its red run and its green run. | Spot traps in the live test. |
| 24–30 | Slide 10, terminal alongside | Predictions while it works; approve commands; the agent opens the PR. | Predict what the agent does with undecided details. |
| 30–38 | Slide 11, then **demo** | Review the PR and the PR version of the app (see review order below). | Check evidence from product, design and engineering perspectives. |
| 38–42 | Slide 13 | Verdict and reasons; change request or approval (and optionally merge). | Vote and explain why. |
| 42–45 | Slide 14 | Skills as team knowledge; open one skill file briefly. | Name a practice that should become a skill. |
| 45–48 | Slide 15 | Your lesson from the field. | Share what has worked or failed for them. |
| 48–50 | Slide 16 | A next step for every rung, then harness engineering as the next level; recap. | Pick their next step. |
| 50–51 | Slide 17 | Where this is going: further reading in one sentence per row. | — |
| 51–55 | Slide 18 | Questions, with links and contact on screen. | Ask questions. |

If implementation is not finished at about minute 30, show slide 12 and switch to the rehearsal PR or recording. Label it clearly as a rehearsal, not the live result. If it reflects different decisions from the room's, point out the differences and review it against its own issue. Let the live session continue and return to it only if it finishes in time.

If the session runs late, shorten the discussion, the story or the closing questions—not the issue approval, the review or the next steps. If a poll fails, ask for responses in chat. A co-facilitator can summarize responses without naming individuals.

## Opening: thesis and ladder

Open with the thesis (slide 2), not with definitions. Say it plainly, then promise that the session shows it live rather than arguing it.

Run the ladder poll (slide 3): **“Where are you today?”**

1. Autocomplete: suggestions while I type.
2. Chat: I ask, then copy and paste.
3. Agent, me in the loop: it edits and runs; I approve.
4. Agent from specs and tests: I define done; it delivers.
5. Team workflows: shared skills and conventions.

Nobody is judged for their rung, and every rung gets a next step at the end (slide 16). Optionally run a role poll as well, so you can invite product and design perspectives later.

In chat, ask: **“What frustrates you most about coding agents?”** This gives experienced and skeptical participants a voice early. Pick one or two answers, say you'll come back to them, and do so during the demo or Q&A.

Show today's route (slide 4) with two one-sentence definitions: a coding agent works on a development task using tools; a pull request is a proposed change that people review before it is accepted. Then show the starter app.

## Clarify: interview first, not prompt first

Start with the unmodified issue. A one-line request hides many decisions; hand it over as is, and the agent makes them silently.

Ask: **“What important decision would you want answered before the agent starts?”** Collect answers in chat for about a minute and keep them visible.

In Copilot CLI, explicitly invoke `grill-me`:

> Use grill-me on issue #<n> and the current app. Help us clarify the smallest useful first iteration before implementation. Surface the important product, usability and testing decisions; recommend an answer for each question. We will decide as a group.

The layer for experienced users (slide 6): most people, including daily agent users, still try to write the perfect prompt and let the agent fill the gaps silently. Interview-first inverts that: the agent asks in rounds, with a recommended answer for each question, finds facts itself and leaves the decisions to people. For newcomers, one sentence is enough: a skill is reusable instructions for the agent, and this one makes it interview us.

Sort the first round against the room's questions: what both found, what only the agent asked (for example empty input, duplicates, trimming, keyboard use), and what only people raised (for example what travelers need first, privacy if items persist). Neither list is complete on its own.

Select two or three consequential questions and collect answers. For scope, ask: **“What should we ship first: adding an item during this visit, or keeping the checklist between visits?”** Persistence changes scope and may raise storage and privacy questions; if the group chooses it, consider demonstrating a smaller first step and recording the rest as a follow-up. Do not present a fixed decision as a vote.

Agree on the **test seam** as part of the decisions. A sensible seam is the rendered checklist component: interact with it as a traveler and check the visible list and progress. It does not by itself prove accessibility; plan a separate manual keyboard and narrow-screen check.

If the interview would run over, stop it and record unanswered questions as open items. If the group cannot agree in time, use the prepared example decisions.

## Record the decisions in the issue

The agent heard everything, so why write it down? The PR is reviewed against the issue, colleagues who weren't in the session can follow it, and the agent's context ends with the session. For experienced users, this is context engineering in practice: chat history is not a durable artifact; the issue and the repo are.

> Draft an update for issue #<n> with what we agreed: expected behavior, out of scope, open follow-ups, the agreed test seam and the prioritized tests. Keep it concise. Show us the text before you post it.

Read the draft with the room, correct it, approve it, then let the agent post it.

## Implement test-first

> Use tdd to implement issue #<n>. Confirm the seams with us first, then work in small red → green slices. Run tests, lint and type checking. Open a pull request that links the issue and summarizes changes, verification and limitations. Don't merge.

**Who does what:** the agent writes *and runs* the tests itself; you never run anything by hand. It writes a test, runs it and shows the failure (red), writes the smallest change, and runs it again (green). Your part: confirm the seams when `tdd` asks, and approve the test command when Copilot CLI asks. After the first approval, allow `pnpm test` for the session to avoid constant prompts.

**Why test-first matters with agents (slide 8):**

1. **It gives the agent a “done” it can check itself.** The agreed behavior becomes a test it runs, so it gets feedback without waiting for you.
2. **Red proves the test can fail.** A test that never failed may test nothing, and agents write those easily.
3. **Small slices keep the change small.** That keeps it reviewable and stops speculative extras.
4. **The tests outlive the session.** The next change, by a person or an agent, has a safety net.

For newcomers, one sentence: a test is an executable example of what we agreed. If the room decided that new items count toward progress, *four of four packed, add one item* becomes *4 of 5 packed*, and that becomes a test. Use the room's actual decision.

**Traps and fixes (slide 9), for agent users:** agents are very good at making tests pass, including tests that prove nothing. The repository's `tdd` skill names the traps:

| Trap | Instead |
| --- | --- |
| **Tautological:** the expected value is computed the same way the code does, so it can never disagree. | Take the expected value from the spec, written out (`'4 of 5 packed'`). |
| **Coupled to internals:** spies on private functions or reads state through side channels; breaks on refactors, stays green when behavior breaks. | Test what the traveler sees, through the public interface at the agreed seam. |
| **All tests first:** tests for imagined behavior, then one giant change. | One test, one minimal change, repeat. |

The leash: agree the seams first, red before green, one slice at a time. As soon as the first test exists, show it and ask whether it falls into a trap. If a chat frustration from the opening was about tests or trust, connect it here.

### While the loop runs

Use the time for a genuine prediction (slide 10): **“What will the agent do with what we didn't decide?”** For example: adding “Clothes” a second time, a 200-character item, spaces around the name, or deleting one's own item. Skip any case already decided. Choose two predictions to check in the review. Follow up with: **“What else could go wrong, even if the tests pass?”**

Keep watching the terminal: answer seam questions, approve commands, and let the agent open the PR when it is done. The agent may ask questions, take longer than expected or produce an incomplete result.

## Review together

Frame it for experienced users: when agents produce more PRs, human review becomes the bottleneck. Decide what evidence you demand from an agent PR before you spend time reading code. For newcomers: start with the result—does it do what we agreed?

Don't review line by line: this is a small change, probably the component and one test file. Review by evidence, and read code where evidence is missing; code style is not the focus. In about five minutes, in this order:

1. **PR description against the issue.** Does it claim what we agreed, no more and no less?
2. **Behavior in the PR version of the app.** The agreed criteria, empty input, the predictions, keyboard only, a narrow screen.
3. **Tests.** Do they match our decisions? Any of the traps? Did red come before green in the terminal?
4. **Skim the diff for surprises.** Which files changed? New dependencies, `package.json` or config changes, unrelated files? Is the size what you'd expect?

Invite each perspective along the way:

- **Product perspective:** Does it solve the traveler's problem? Walk through the criteria in the issue, including empty input. Is the scope what was agreed?
- **Design perspective:** Is the input labeled, feedback clear, and focus visible? Try adding an item using only the keyboard. Is the interface understandable on a narrow screen? Do not claim full accessibility from this quick check.
- **Engineering perspective:** Inspect the changed files, behavior-focused tests and check results. Do tests cover the chosen cases without falling into the traps? Did the terminal show red before green? Are there unrelated changes or unsupported claims?
- **Everyone:** What evidence is missing? A passing test is useful evidence, not proof of quality.

Check the two predictions. Demonstrate checking and unchecking a new item and how it affects progress. Ask the room to vote **approve, request changes, or need more evidence**, and explain why. If a criterion is not met, give the agent a specific change request in the session (or comment on the PR) rather than silently fixing it.

If the PR is good and nobody has concerns, approving is the right result; do not invent a defect. Instead:

- **Approve with reasons.** What evidence convinced us, and what haven't we checked (screen readers, other browsers, persistence that was out of scope)?
- **Turn the agent's own choices into decisions.** For the undecided cases (duplicates, spaces and so on), accept what it did or open a follow-up issue.
- **Merge it live if the room approves.** The rule is “don't merge just because the agent produced a PR”, not “never merge”. The people's decision closes the loop.

A quick verdict also buys time for the team block and Q&A.

## From one session to a team

The question isn't “what is a skill” but which of your team's practices deserve to be written down so that every agent—and every new teammate—follows them (slide 14). Open `grill-me` or `tdd` briefly to show that a skill is a short Markdown file in the repo. Treat skills like code: versioned, reviewed and improved when they fail. That's how a team's way of working scales instead of living in individual heads and chat histories. Ask in chat: **“Which of your team's practices should become a skill?”** Skill availability depends on the tool and its configuration.

## Lessons from the field

Tell your prepared story (slide 15): what you gave the agent, what surprised you, and what you do differently now. The purpose is credibility, not collecting complaints. The demo shows a clean path; real project work is messier, and your judgment is what people can't get from a tutorial. The story doesn't have to be a failure: a silent assumption, a meaningless test, scope creep, or something that worked better than expected all work. Ask in chat: **“What has worked—or failed—for you?”** If you have no story you're comfortable sharing, skip the slide and give the time to Q&A.

## Next steps and closing

Close the loop on the ladder (slide 16):

- **Autocomplete or chat:** give an agent one small, low-risk task—and approve every step.
- **Agent, me in the loop:** let it interview you before you prompt; record the decisions in the issue.
- **Agent from specs and tests:** agree the seams first; check its tests for traps; demand red → green evidence.
- **Team workflows:** turn one recurring team practice into a skill in the repo—and review it like code.

Then the next level beyond team workflows, **harness engineering**: designing and implementing the systems around an agent that

1. **constrain** what it can do (architectural boundaries, dependency rules),
2. **inform** it what to do (context engineering, documentation),
3. **verify** that it did it correctly (tests, linting, CI validation), and
4. **correct** it when something goes wrong (feedback loops, self-repair mechanisms).

Today's session touched individual pieces of this; a harness makes them a deliberate system across the codebase.

Recap the room's actual decisions, predictions and verdict in one or two sentences: the agent wrote the code; people decided, recorded, checked and judged.

Then show the outlook (slide 17) for a minute or two. Slide 16 says what to do next; this slide says where to read on: where the SDLC is heading (Google's paper on the new SDLC, Anthropic's AI-native SDLC playbook), spec-driven development (OpenSpec, GitHub Spec Kit: specs in the repo, a bigger version of our issue), and workflows and review (QRSPI, Marco Klein's impact hierarchy). Every title links out, and the list is in the README.

Leave slide 18 up during Q&A and post the same links in chat. The repository's README is written for participants: a summary of the session, the workflow, the prompts, a next step per rung, and the links and contact below. Once the repository is shared, its link is the one thing people need.

- Skills used today: <https://github.com/mattpocock/skills/tree/main>
- Demo repository: <https://github.com/netlight-example/travel-ready> (**placeholder**: replace once the repository is published and sharing is approved, in the deck and here)
- Contact: jasper.fuelle@netlight.com

If time allows, close with: **“What is one decision you'd clarify first on your next agent task?”** The handout (hidden slides at the end of the deck) contains the three prompts, the issue template, the review checklist, a glossary and getting-started steps. The reusable issue template:

```markdown
## Problem
Who needs what, and why?

## Expected behavior
- ...

## Out of scope
- ...

## Verification
How will we check that this works? Which behaviors and test seams matter?
```
