# Workshop participation prompts

Facilitator prompts for the 55-minute session in [facilitator.md](facilitator.md). These are conversation starters and decisions, not a scored quiz. Use Teams polls or chat, keep participation optional, and adapt to the actual discussion rather than working through every prompt.

## Opening (0–5 minutes)

**Poll: “Where are you today?”** (single answer, anonymous, results shared)

1. Autocomplete: suggestions while I type.
2. Chat: I ask, then copy and paste.
3. Agent, me in the loop: it edits and runs; I approve.
4. Agent from specs and tests: I define done; it delivers.
5. Team workflows: shared skills and conventions.

Optional second poll: **“What's your role?”** Engineering/development, product, design, or another role (multiple answers).

**Chat: “What frustrates you most about coding agents?”** Pick one or two answers and come back to them later.

Nobody is judged for their rung; every rung gets a next step at the end.

## What needs clarification? (5–7 minutes)

Show the starter app and the brief request: “Let travelers add a personal checklist item.”

**Ask:** “What important decision would you want answered before the agent starts?”

Collect a few suggestions in chat. Then invoke `grill-me` and compare: what both found, what only the agent asked, and what only people raised.

## Decide the first scope (7–15 minutes)

Choose two or three consequential questions. Possible prompts:

- “What should we ship first: adding an item during this visit, or keeping the checklist between visits?”
- “What should happen if someone submits an empty or whitespace-only item?”
- “Should a new item be checked or unchecked, and how should it affect progress?”
- “Where should the tests sit—what's the seam?”

Record the actual decisions. Don't present a predetermined outcome as a vote.

## Approve the record (15–18 minutes)

**Ask:** “Does this issue update say what we agreed? Is anything missing or wrong?”

## While the agent implements (18–30 minutes)

When `tdd` proposes seams, **ask:** “Is this where we agreed to test?”

For people already using agents, **ask:** “Look at the test it just wrote. Could it ever fail? Does it test behavior or internals?”

**Prediction:** “What will the agent do with what we didn't decide?” Offer cases such as adding “Clothes” a second time, a 200-character item, spaces around the name, or deleting one's own item. Skip anything already decided. Capture two predictions for the review.

**Follow up:** “What else could go wrong, even if the tests pass?”

## Make the review decision (38–42 minutes)

**“Would you approve, request changes, or ask for more evidence? Why?”**

If the PR is good: **“What evidence convinced us—and what haven't we checked?”** and **“The agent chose how to handle duplicates and spaces. Do we accept that or open a follow-up?”**

Invite product, design, and engineering perspectives. A passing check is evidence, not proof. If reviewing a rehearsal PR, label it clearly and review it against its own issue.

## From one session to a team (42–48 minutes)

**Chat: “Which of your team's practices should become a skill?”**

After your story: **“What has worked—or failed—for you?”**

## Closing (50–55 minutes)

Leave slide 17 (questions, links and contact) up during Q&A. If time allows, **ask:** “What is one decision you'd clarify first on your next agent task?” Invite a chat response or private reflection; there is no single correct answer.
