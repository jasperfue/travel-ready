# Travel ready: AI workshop starter

A fictional travel checklist for a mixed-audience workshop about GitHub Copilot coding agent. Travelers can check and uncheck four essentials and see their progress. The checklist is deliberately small: it resets on reload, and adding a personal item is the workshop exercise.

This is a demo, not a Eurowings product. Do not use real passenger information.

## Get started

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

## Workshop materials

- [Draft issue](workshop/issue.md): create this as a GitHub issue before the session; leave the details for the audience to clarify.
- [Facilitator guide](workshop/facilitator.md): timing, audience prompts, GitHub preparation, review and fallback.

The checklist is in `app/components/TravelChecklist.vue`; its existing behavior test is in `tests/travel-checklist.test.ts`. The GitHub Actions workflow runs lint, type checking and tests when the repository is hosted on GitHub.

## License

The original Nuxt UI starter license is retained in [LICENSE](LICENSE).
The installed skills come from [mattpocock/skills](https://github.com/mattpocock/skills); their upstream MIT notice is retained in [`.agents/skills/LICENSE.mattpocock`](.agents/skills/LICENSE.mattpocock). The `pr` skill includes its own upstream credit in its metadata.
