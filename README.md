# Travel ready: From Idea to Pull Request

Demo repository for the AI Focus Days session **“From Idea to Pull Request”** (November 2026, Eurowings Digital), facilitated by Jasper Fülle (Netlight).

A fictional travel checklist: travelers can check and uncheck four essentials and see their progress. The checklist is deliberately small: it resets on reload, and adding a personal item is the change we made live with a coding agent. This is a demo, not a Eurowings product. Do not use real passenger information.

## The session in one paragraph

Writing code got cheap. Deciding what to build, checking that it's right and owning the result did not. In the session, we made one real change live in a single GitHub Copilot CLI session and watched where the human work moves when an agent writes the code: the agent interviewed us about a one-line ticket, wrote our decisions into the GitHub issue, implemented them test-first and opened a pull request, which we reviewed and decided on together.

## The workflow

| Step | What the agent does | What people decide |
| --- | --- | --- |
| **Clarify** | Interviews us with the `grill-me` skill and recommends an answer for each question | Scope, behavior and which tests matter |
| **Record** | Drafts the agreed decisions into the GitHub issue | Whether the issue says what we agreed |
| **Implement** | Writes and runs tests and code in small red → green slices with the `tdd` skill | Which test seams to use; which commands to allow |
| **Review** | Opens a pull request and summarizes changes and evidence | Approve, request changes, or ask for more evidence |

Three ideas worth taking away:

- **Interview first, not prompt first.** Let the agent ask before you try to write the perfect prompt; the gaps become decisions you can see.
- **Write decisions down where others can check them.** The PR is reviewed against the issue, and the agent's context ends with the session.
- **Watch for tests that prove nothing.** Agents are very good at making tests pass. Agree the seams first, insist on red before green, and take expected values from the spec, not from the code.

## Try it yourself

The prompts we used, in one Copilot CLI session (replace `#<n>` with your issue number):

1. **Clarify:** “Use grill-me on issue #<n> and the current app. Help us clarify the smallest useful first iteration before implementation. Surface the important product, usability and testing decisions; recommend an answer for each question. We will decide as a group.”
2. **Record:** “Draft an update for issue #<n> with what we agreed: expected behavior, out of scope, open follow-ups, the agreed test seam and the prioritized tests. Keep it concise. Show us the text before you post it.”
3. **Implement:** “Use tdd to implement issue #<n>. Confirm the seams with us first, then work in small red → green slices. Run tests, lint and type checking. Open a pull request that links the issue and summarizes changes, verification and limitations. Don't merge.”

Pick a next step for where you are today:

- **Autocomplete or chat:** give an agent one small, low-risk task, and approve every step.
- **Agent, me in the loop:** let it interview you before you prompt, and record the decisions in the issue.
- **Agent from specs and tests:** agree the seams first, check its tests for traps, and demand red → green evidence.
- **Team workflows:** turn one recurring team practice into a skill in the repo, and review it like code.
- **Next level, harness engineering:** design systems around the agent that constrain what it can do (architectural boundaries, dependency rules), inform it what to do (context engineering, documentation), verify that it did it correctly (tests, linting, CI validation) and correct it when something goes wrong (feedback loops, self-repair).

Skill availability and invocation depend on your tool and its configuration. If a skill isn't available, the prompts above still work as plain-language instructions.

## Resources and contact

- **Skills used in the demo:** [github.com/mattpocock/skills](https://github.com/mattpocock/skills/tree/main). The copies used here are in [`.agents/skills`](.agents/skills).
- **Slides and handout:** [From Idea to Pull Request.pptx](workshop/From%20Idea%20to%20Pull%20Request.pptx). The handout slides (prompts, issue template, review checklist, glossary) are hidden in the slide show.
- **Questions or feedback:** Jasper Fülle, [jasper.fuelle@netlight.com](mailto:jasper.fuelle@netlight.com)

## Run the app

The project uses Nuxt 4, Nuxt UI, TypeScript, pnpm and Node.js 24. It started from the official Nuxt UI template.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Nuxt (normally http://localhost:3000).

```sh
pnpm test              # component tests
pnpm lint
pnpm typecheck
pnpm build
```

The template's `packageManager` field specifies the pnpm version. If you use Corepack, its `corepack pnpm` command can run that version.

The checklist is in `app/components/TravelChecklist.vue`; its existing behavior test is in `tests/travel-checklist.test.ts`. The GitHub Actions workflow runs lint, type checking and tests when the repository is hosted on GitHub.

## Facilitator materials

- [Draft issue](workshop/issue.md): create this as a GitHub issue before the session; leave the details for the audience to clarify.
- [Facilitator guide](workshop/facilitator.md): timing, switching between slides and demo, prompts, preparation, review and fallback.
- [Participation prompts](workshop/questions.md): polls and discussion prompts for the session.
- [Slide blueprint](workshop/presentation.md) and [workshop context](workshop/context.md).

## License

The original Nuxt UI starter license is retained in [LICENSE](LICENSE).
The installed skills come from [mattpocock/skills](https://github.com/mattpocock/skills); their upstream MIT notice is retained in [`.agents/skills/LICENSE.mattpocock`](.agents/skills/LICENSE.mattpocock). The `pr` skill includes its own upstream credit in its metadata.
