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

Branching & PR policy
- Base branch for work: `SQLOPTIMISE-site`.
- Create short-lived feature branches from `SQLOPTIMISE-site` (e.g., `feat/hero-cta`, `chore/seo-metadata`).
- Open PRs with base set to `SQLOPTIMISE-site` and a focused diff.
- If you lack push rights, fork the repo and open the PR from your fork targeting `SQLOPTIMISE-site`.

Implementation details and guardrails are described in `Agents.md`.

Quality gates (baseline)
- Lint: `npm run lint`
- Build: `npm run build`
- Local smoke test: `npm run dev` and open http://localhost:3000

PR checklist and extended quality gates: see `Agents.md`.

For comprehensive guidance, always defer to `Agents.md`.


# Builder agent guide — “Make this site mine”

Purpose
- Implement site changes using the two YAML specs while honoring guardrails in `Agents.md`.

Authoritative inputs
- Business/content: `/.github/Creation/customization.yaml`
- Look & feel (design tokens): `/.github/Creation/Make this site mine/look-and-feel.yaml`

Contract
- Do not parse YAML at runtime in the app. Read once, plan, and make minimal, targeted edits.
- Keep diffs small; avoid repo‑wide formatting. Follow App Router conventions.
- Never commit secret values. Reference environment variable NAMES only.

Primary touchpoints
- `tailwind.config.ts` — theme colors and optional radius/shadows tokens
- `app/globals.css` — global font import and motion/accessibility helpers
- `app/layout.tsx` — site metadata (SEO), fonts, base classes, and social meta
- `app/page.tsx` — homepage hero, sections, CTAs
- `app/(site)/nav.tsx` + `app/(site)/footer.tsx` (or equivalents) — navigation links
- `app/blog/page.tsx` — scaffold if `pages.blog.enabled: true`
- `public/` — referenced assets (logo, og image, backgrounds)
- `next.config.mjs` — only if remote images/headers are needed

Quality gates
- Lint: `npm run lint`
- Build: `npm run build`
- Smoke test: `npm run dev` → http://localhost:3000

Sequential workflow (Simple mode)
1) Load specs
   - Validate required: `project.name`, `seo.defaultTitle`, `seo.defaultDescription`.
   - Note priorities (look‑and‑feel.priorities) and accessibility/motion preferences.

2) Theme & typography
   - Colors: set Tailwind theme `primary`, `secondary`, `accent` from `look-and-feel.yaml > brand.palette`.
   - Avoid hard‑coded hex in components; prefer `text-primary`, `bg-primary`, etc.
   - Fonts: add `<link>` from `look-and-feel.yaml > typography.googleFontsHref` in `app/layout.tsx` if present.

3) Metadata (SEO)
   - In `app/layout.tsx`, export `metadata` with title/description from `customization.yaml > seo`.
   - Add `openGraph.images` and `twitter` fields if provided.

4) Layout, header, and footer
   - Header layout per `look-and-feel.yaml > navigation.headerStyle` (e.g., centered).
   - Build header/footer links from `customization.yaml > navigation`.

5) Homepage hero & CTAs
   - Hero uses `customization.yaml > content.hero` (tagline, headline, subheadline).
   - CTAs: support `kind: link|mailto|calendly`; render accordingly.
   - If `look-and-feel.yaml > sections.hero.media: video`, create a hero media container/overlay.
   - Implement scroll‑reveal with reduced‑motion fallback.

6) Pages enablement
   - Ensure routes for enabled pages exist (`about`, `services`, `contact`, `faq`, `blog`).
   - If `pages.blog.enabled: true`, scaffold `app/blog/page.tsx` with a simple list layout and placeholder.

7) Integrations
   - Analytics (PostHog/GA4/Plausible): gate on env presence; use env var NAMES from `customization.yaml > integrations.analytics`.
   - CRM (HubSpot etc.): reference env var NAME only; do not add secrets to repo.
   - Scheduling: if using external booking link, wire the CTA to the external URL.

8) Accessibility & motion
   - Respect `look-and-feel.yaml > accessibility` (contrast, link underlines, focus visible).
   - Add `prefers-reduced-motion` fallbacks for animations.

9) Assets
   - Verify all `/public` paths exist; add placeholders if missing and note in PR.

10) Finish
   - Re‑run lint/build; attach screenshots of visible changes.
   - PR body: summarize routes touched, env var NAMES referenced, any TODOs/placeholders.

Visual references (sketches)
- The repo includes sketch images shared by the owner illustrating:
   - Fullscreen hero with dynamic animation overlay and a smooth scroll‑reveal into a static background.
   - Centered header/navigation.
   - A bottom‑of‑page chat box section for an AI agent.
- Use these sketches for visual guidance when implementing hero layout, animations, scroll timing, and chat placement. Keep reduced‑motion fallbacks.

Edge cases & fallbacks
- Missing assets → keep placeholders; document.
- Invalid URLs/email → leave unchanged; document.
- Unknown CTA kind → default to `link`.
- If blog disabled → skip blog scaffolding.

Minimal mapping
- Colors/typography → `tailwind.config.ts`, `app/globals.css`.
- Metadata/OG/Twitter → `app/layout.tsx` metadata export.
- Hero/CTAs → `app/page.tsx`.
- Nav/footer → `app/(site)/nav.tsx`, `app/(site)/footer.tsx` (or inline in layout).
- Analytics/CRM → guarded inserts; prefer Server Components unless client hooks are required.

Guardrails (from Agents.md)
- Respect App Router conventions and Server/Client component boundaries (use "use client" when needed).
- No secrets in code; `.env*.local` is git‑ignored.
- Keep edits minimal and scoped; document any `next.config.mjs` changes.

PR checklist
- [ ] YAMLs consumed; values applied
- [ ] Tailwind theme updated (primary/secondary/accent)
- [ ] Layout metadata wired (title/description/OG)
- [ ] Hero + CTAs implemented
- [ ] Navigation/header/footer updated
- [ ] Blog scaffolded if enabled
- [ ] Analytics gated by env vars
- [ ] Accessibility/motion respected
- [ ] Lint/build pass and screenshots attached
 - [ ] PR targets base branch `SQLOPTIMISE-site` and includes concise summary
