# Workshop question bank

These are facilitator notes for the 55-minute session in [facilitator.md](facilitator.md), not a participant handout. Show only each question and its options before voting. Run the four numbered questions at the times in the guide; allow 20–30 seconds to answer and use the rest of the minute for the reveal and explanation. If the quiz tool is unavailable, ask participants to post A–D in chat. Questions assess concepts, not speed or prior experience.

## Q1 — What is a skill? (3–5 minutes)

**Question:** What does an AI skill provide in this workshop?

A. Reusable instructions for an assistant to follow when the skill is available  
B. A guarantee that the assistant's answer is correct  
C. A separate human reviewer who approves every change  
D. Permanent memory shared automatically by all AI tools

**Answer: A.** A skill packages guidance for a task. It does not guarantee quality or automatically share context between tools. Here `grill-me` invokes `grilling` to help clarify decisions; availability and invocation depend on the environment.

**Debrief:** “We still decide whether the questions and answers make sense.”

## Q2 — Handing off context (9–10 minutes)

**Question:** The room agrees how the new checklist item should behave. How does the separate GitHub coding agent reliably receive those decisions?

A. It automatically sees the facilitator's local conversation  
B. Record the approved behavior and relevant context in the GitHub issue before assigning it  
C. Assume it will infer every decision from the app  
D. Wait until after the PR is merged

**Answer: B.** The local assistant and coding agent work in separate environments. Put the agreed scope, acceptance criteria and verification expectations in the issue the agent receives.

**Debrief:** “A clear handoff is a human responsibility; an AI conversation is not automatically shared.”

## Q3 — Understanding TDD (19–20 minutes)

**Question:** Which sequence best describes a small test-driven development cycle?

A. Write all production code, then assume it works  
B. Write a behavior test, see it fail, then make it pass  
C. Run the existing tests once and merge  
D. Ask the agent to claim that it tested the change

**Answer: B.** Red → green starts with a failing test for a behavior, then adds enough implementation to make it pass. Refactoring can follow while keeping tests green.

**Debrief:** “A passing final test alone does not establish that the agent followed this order; look for actual session evidence.”

## Q4 — Reviewing the result (39–40 minutes)

**Question:** The agent's PR has passing automated checks. What is the best next step?

A. Merge immediately because passing checks prove the feature is correct  
B. Review the agreed behavior, usability, changes and missing evidence before deciding  
C. Reject it solely because AI produced it  
D. Ignore the PR and rely on the issue title

**Answer: B.** Checks are useful evidence, not proof that all requirements or usability needs are met. Inspect the result and ask for changes or more evidence when needed.

**Debrief:** “Humans own the decision; the appropriate verdict depends on what the PR actually shows.”

## Unscored discussion prompts

These are decisions or reflections, not questions with a predetermined correct answer.

- **Scope (5–9 minutes):** “What should we ship first: adding an item during this visit, or keeping the checklist between visits?” Discuss value and the storage/privacy implications; record the room's decision rather than presenting a fixed outcome as a vote.
- **Prediction (20–30 minutes):** “If all four existing items are packed and I add one unchecked item, what should progress show?” If the agreed behavior is to add an unchecked item and include it in progress, the expected result is 4 of 5 packed. Capture two predictions and check them in the review.
- **Exit prompt (50–55 minutes):** “For a small task you might delegate, what is one decision you would clarify first and one piece of evidence you would review?” Invite chat responses or private reflection.

## Adding a question

For future candidates, record the intended segment and learning objective, the question, plausible options, the answer with a short rationale, and a debrief. Mark open-ended trade-offs as unscored and avoid treating environment-dependent behavior as universal.
