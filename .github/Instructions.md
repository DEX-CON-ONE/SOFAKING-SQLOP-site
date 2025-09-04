# GitHub Copilot Instructions for this repository

Purpose
- Provide a short, unambiguous instruction set for Copilot agents working in this repo.
  
Note: For full context, playbooks, and Q&A flows, see `Agents.md`.

Scope
- This is a Next.js 14 (App Router) + TypeScript + Tailwind template intended to be customized for a specific company/site.
- Detailed playbooks, workflows, and question flows are documented in `Agents.md`. Refer to that file for end-to-end guidance, including the “Make this site mine” Simple/Advanced modes.

Agents: read `Agents.md` before making any changes.

Key references
- Primary playbook: `Agents.md` — always consult this first
- Customization template: `/.github/Creation/customization-template.yaml` (input schema)
- Customization output: `/.github/Creation/customization.yaml` (to be produced by agents)
- Assets folder: `/public/` for logos/images/OG assets referenced from YAML
- Core code touchpoints: `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`

Agent expectations
- Default to minimal, safe changes. Do not reformat the codebase.
- Never commit secrets. Use environment variables by name only.
- Validate URLs, color hexes, and email syntax when populating YAML.
- Prefer Server Components unless client hooks/state are required (then add `"use client"`).
- If unsure about a step or policy, defer to `Agents.md`.

Start here
- Read `Agents.md` and follow the Customization section. If a user asks to “make this site mine,” request the YAML template file as context and proceed with Simple or Advanced mode as described there.
- If the template YAML isn’t provided, ask for it (see `Agents.md` Customization section).

Project facts
- Node 18.17.1; scripts: `npm run dev | build | start | lint`.
- Tailwind content paths include `app/`, `pages/`, and `components/`.
- `next.config.mjs` is default; update only when necessary and document changes in PRs.

Implementation details and guardrails are described in `Agents.md`.

Quality gates (baseline)
- Lint: `npm run lint`
- Build: `npm run build`
- Local smoke test: `npm run dev` and open http://localhost:3000

PR checklist and extended quality gates: see `Agents.md`.

For comprehensive guidance, always defer to `Agents.md`.
