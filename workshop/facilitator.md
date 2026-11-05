# Facilitator guide

## The story

Participants are a cross-functional product team. A fictional travel checklist works, but travelers cannot add their own items. The group uses an AI skill to clarify a brief request, approves an issue, delegates implementation to GitHub Copilot coding agent, and reviews the resulting pull request. The goal is to practice making decisions and evaluating evidence, not to make everyone read code.

The live feature is intentionally **not implemented** in the starter. Checkboxes and progress already work; all state resets on reload. This is a fictional example: never use real passenger data.

## Session design

- **Audience and format:** A beginner-friendly, facilitator-led online session for a cross-functional team, mostly developers, with mixed AI experience. Participants need no repository access or prior agent experience.
- **By the end, participants can:** explain what a skill contributes; identify a decision to clarify before delegating; describe the red → green TDD loop; and name evidence to check before accepting an agent's work.
- **Participation:** Everyone can respond in a poll or chat. The facilitator operates the tools, explains unfamiliar terms and invites product and design perspectives alongside engineering ones.
- **Materials:** The starter app, [draft issue](issue.md), a working local assistant with the skills, GitHub issue and PR views, and the [question bank](questions.md). The question bank includes the answers; share only the question and options during play.

## Before the session

1. Rehearse locally: install with `pnpm install --frozen-lockfile`, run `pnpm dev`, and open the page. Run `pnpm test`, `pnpm lint`, and `pnpm typecheck`. Check screen sharing and font size.
2. Publish the starter to a GitHub repository only when approved. Commit the starter, verify the default branch and CI, and create an issue using [issue.md](issue.md).
3. Confirm that GitHub Copilot coding agent is available and enabled for the account and repository, that you can assign issues to it and review its PRs, and that repository policies permit its setup and checks.
4. Rehearse the skills in the actual environments. The repository has `grill-me`, `grilling`, `tdd` and `pr` installed under `.agents/skills`, with links under `.claude/skills`. Use your local Copilot interface to explicitly invoke `grill-me`, which delegates to `grilling`. Check that the GitHub agent can discover and use `tdd` and, if desired, `pr`; don't assume it inherits your personal skills or local conversation. The upstream `tdd` skill conditionally references `codebase-design`, so check that dependency if the rehearsal needs it. Skills and invocation methods vary by environment; if one is unavailable, explain the limitation and use the equivalent plain-language instructions or the backup.
5. Rehearse issue assignment and the PR workflow in a separate rehearsal repository or disposable copy. The agent may open a draft PR before it finishes; wait for its work and checks before review. Prepare a finished example PR or short recording as a backup, and reset the demo issue to the untouched starting state.
6. Choose how to show the changed app: an approved preview deployment or a local checkout of the PR in an isolated, prepared environment. Inspect the changes, including dependencies and scripts, before running agent-produced code; don't expose credentials. Clearly label the starter and PR versions, and rehearse switching between them.
7. Prepare the four numbered questions in [questions.md](questions.md) in Kahoot or the meeting's polling tool. Test joining and screen sharing without exposing the answer key. Chat is the fallback; no participant account or quiz tool is required. If possible, ask a co-facilitator to manage polls, watch chat and keep time; otherwise handle these yourself.
8. Have the issue, both app views, PR list, Teams chat/poll and this guide ready. Use only a few code/test lines at a time. Prepare the takeaway below and the appropriate internal access instructions. Send the meeting link and explain that no coding setup is needed.

## 55-minute run of show

Times include questions and their debriefs. Keep each quiz to about one minute: allow 20–30 seconds to answer, reveal the answer, then explain it briefly. Do not rank participants or treat a wrong answer as a failure.

| Time | Facilitator action | Participant action and checkpoint |
| --- | --- | --- |
| 0–3 | Show the starter, the missing capability and the issue → clarification → agent → PR journey. Ask who has tried an AI coding agent; introduce a PR as a proposed change for human review. | Respond in chat or by reaction; observe the problem. |
| 3–5 | Define a skill as reusable instructions an assistant can follow when available, not an autonomous agent or a guarantee of correct output. Run **Q1**. | Identify what a skill contributes. |
| 5–9 | Show the brief issue; invoke `grill-me`, explain its delegation to `grilling`, and select two or three questions. | Suggest answers in chat, including the first-scope trade-off below. |
| 9–10 | Run **Q2** on transferring context to the coding agent. | Identify where agreed decisions need to go. |
| 10–15 | Agree on the first iteration, observable behavior and priority tests. Record them in the issue; confirm the room's decisions. | Confirm or challenge the proposed scope. If it is unresolved at 15, use the prepared example. |
| 15–19 | Explain the separate GitHub agent environment, add the TDD instruction and assign the approved issue. Define TDD as writing a behavior test, seeing it fail, then making it pass in small slices. | Watch the handoff and identify what the agent is being asked to do. |
| 19–20 | Run **Q3** on red → green. | Distinguish evidence of the loop from a passing final test. |
| 20–30 | While the agent works, build the review checklist and show an existing readable test. Capture two predictions for the review. | Contribute a normal case, invalid case, regression risk or usability check. |
| 30–39 | Review the live PR if ready; otherwise use the labeled backup. Inspect the diff before running the PR version, then demonstrate the agreed behaviors and revisit predictions. | Look for supporting evidence and missing checks from product, design and engineering perspectives. |
| 39–40 | Run **Q4** on what passing checks mean. | Choose a review response. |
| 40–45 | Ask for a verdict and reasons; distinguish requests for changes from requests for evidence. Do not merge automatically. | Vote approve, request changes or need more evidence; explain why in chat. |
| 45–50 | Recap clarification, delegation, TDD and review; show the reusable issue template and approved access instructions. | Suggest a small, low-risk task to try. |
| 50–55 | Invite questions and run the closing exit prompt. | Name one decision to clarify and one piece of evidence to review; share in chat or privately reflect. |

If the agent is still running at minute 30, move to the prepared example PR or recording. Clearly label it as a rehearsal, not as the live agent's result. Return to the live PR only if it finishes in time.

If the session runs late, shorten the discussion or closing questions, not the issue approval or review. If a poll fails, read its options aloud and ask for A–D in chat. A co-facilitator can summarize responses without naming individuals. The scope discussion is not a scored quiz: acknowledge reasonable alternatives and record the actual decision.

### Showing the PR version

If using a local demo rather than an approved preview deployment, prepare a separate disposable clone so the starter stays visible. In that clone, use `gh pr checkout <PR-number>` to check out the PR. Review the full diff against the PR's actual base branch, including dependency and script changes. After review, in an isolated environment without unnecessary credentials, run:

```sh
pnpm install --frozen-lockfile
pnpm dev --port 3001
```

Open the address printed by Nuxt and label it **PR version**; keep the starter on its separate local address. Installing dependencies and starting the app can execute code, so only do this in the approved environment after inspection.

## Clarify the issue with the room

Start with the unmodified issue rather than a complete specification. Explain that a skill supplies reusable instructions; it is not automatically a built-in command for every participant. The installed `grill-me` skill delegates to `grilling`, whose current upstream version asks questions in rounds.

In the rehearsed local interface, explicitly invoke `grill-me` and provide context:

> Inspect the brief travel-checklist issue and the current app. Help us clarify the smallest useful first iteration before implementation. Surface the important product, usability and testing decisions; recommend an answer for each question. We will decide as a group.

Select two or three important questions from the agent's output and use chat or a poll to collect answers. Pause for Q2, then record the decisions before minute 15. If the interview would run over, interrupt it and record unanswered questions as open items; don't claim the full interview is complete. Resolve any blockers for the chosen first iteration and explicitly confirm shared understanding before proceeding. If the group cannot agree in time, use the prepared example rather than assigning an ambiguous task.

For the scope interaction, ask: **“What should we ship first: adding an item during this visit, or keeping the checklist between visits?”** Explain that persistence changes scope and may raise storage and privacy questions. If the group chooses persistence, acknowledge the choice and its trade-offs; put the larger work in a follow-up issue if the group agrees to demonstrate the smaller first step. Do not present a fixed decision as a vote.

Other useful questions, if not already raised by the skill:

- What should happen with an empty or whitespace-only entry, and how should feedback be communicated?
- Should a new item be checked or unchecked? Should it affect progress?
- Are duplicates allowed? Should text be trimmed?
- Can someone use the form with a keyboard and understand any errors?

Capture agreed behavior, out-of-scope work, unresolved follow-ups and prioritized tests on the GitHub issue. For this iteration, a possible agreed **test seam** is the rendered checklist component: interact with it as a traveler and check the visible list and progress. This can catch incorrect component behavior, but it does not by itself prove accessibility across browsers or devices; plan a separate manual keyboard and narrow-screen check. Make the room's decisions explicit rather than treating these suggestions as predetermined.

## Assign the agent

Local Copilot helps clarify the issue; GitHub Copilot coding agent works asynchronously in a separate environment. It does not automatically receive the local conversation. Once the group approves the scope, acceptance criteria, test seam and priority behaviors, record that approval in the issue. Then add an instruction such as:

> Use the repository's `tdd` skill to implement the approved acceptance criteria and behavior tests at the agreed seam. Work in small red → green slices, and record relevant evidence. Run the tests, lint and type checking. Summarize the changes, verification and limitations in the PR. If an essential decision or required skill is unavailable, explain the blocker rather than guessing.

Optionally ask the agent to use the installed `pr` skill to structure the PR description, if supported in the rehearsed environment. It is an aid for the description, not a prerequisite for creating a PR. Ask for actual evidence, not invented screenshots or test results.

Assign the issue to Copilot using the GitHub interface available in your organization. Explain that a request is not proof: inspect the agent's session or PR evidence for what it actually did. Test-first order cannot be inferred merely from a passing final test. The agent may ask questions, take longer than expected, or produce an incomplete result.

## While the agent works

Ask participants to build a review checklist before seeing the answer:

- One normal-use case.
- One invalid-input case.
- One regression risk.
- One usability check.

Use this example if the room needs a prompt: **“If all four existing items are packed and I add one unchecked item, what should progress show?”** The expected result is **4 of 5 packed**. Choose two predictions from the chat and return to them in the PR review.

For non-developers: “A test is an executable example of what we agreed should happen.” Show one readable behavior test. If the agent's session contains the evidence, show the initial failure and subsequent pass; otherwise say that the test-first order is unverified. Avoid narrating every tool call.

## Review together

Inspect the PR changes before running the PR version, then start with the result rather than the code:

- **Product perspective:** Does it solve the traveler's problem? Walk through agreed criteria, including blank input. Is the scope what was requested?
- **Design perspective:** Is the input labeled, feedback clear, and focus visible? Try adding an item using only the keyboard. Is the interface understandable on a narrow screen? Do not claim full accessibility from this quick check.
- **Engineering perspective:** Inspect the PR description, changed files, behavior-focused tests and check results. Do tests cover the chosen cases? Are there unrelated changes or unsupported claims?
- **Everyone:** What evidence is missing? Would you approve, request a change, or ask a domain expert? A passing test is useful evidence, not proof of quality.

These are perspectives, not exclusive roles: everyone can contribute to each. Check the two predictions from the waiting activity. Demonstrate checking and unchecking a newly added item and how it affects progress. If a criterion is not met, request a specific change rather than silently fixing it. Do not merge simply because the agent produced a PR.

## Closing and takeaway

Recap the human decisions: define the problem, agree on observable outcomes, delegate with context, review the actual result, and decide what happens next. Share the demo repository only if approved, along with your organization's current Copilot access and setup instructions. Tell participants where to find the relevant Copilot feature in their own environment; access and skill availability depend on configuration.

Give participants this reusable issue template:

```markdown
## Problem
Who needs what, and why?

## Expected behavior
- ...

## Out of scope
- ...

## Verification
How will we check that this works? Which behaviors and test boundaries matter?
```

For review, ask: **Does it meet the agreed behavior? Is it usable? What do the tests and checks actually show? What evidence or expertise is still missing?**
