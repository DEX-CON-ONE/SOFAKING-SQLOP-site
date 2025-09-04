# Agents playbook

Purpose: help automated or human agents safely modify this Next.js 14 template (App Router + Tailwind) and ship changes with confidence.

## Customization: “Make this site mine”
To keep this playbook concise, the full customization workflow, modes, and sequential Q&A are documented here:

- `.github/Creation/Make this site mine/instructions.md` — step-by-step agent workflow
- `/.github/Creation/customization-template.yaml` — input schema
- `/.github/Creation/customization.yaml` — output to produce

Minimum agent contract
- Use the above instructions to collect inputs and generate `customization.yaml`.
- Place assets in `/public/` and update YAML paths.
- Summarize missing fields and defaults; list env var NAMES only (no secret values).

What to ask (Simple mode)
- Company basics: company name (REQUIRED), primary domain, environment (dev/staging/prod).
- Value prop: hero tagline, headline, short subheadline; 3 differentiators.
- Primary action: CTA label and link (contact page or Calendly). Secondary CTA optional.
- Pages to enable: About, Services, Contact, FAQ; others optional.
- Branding: main color (hex or name), dark mode on/off, logo and favicon file or URL.
- Social & contact: LinkedIn/GitHub/Twitter, contact email.
- SEO: default title and description; OG image if available.

What to ask (Advanced mode)
- project: name (REQUIRED), domain, environment.
- brand: logo, favicon, darkMode; colors (primary, secondary, accent, backgroundLight/Dark); typography (headingFont, bodyFont, googleFontsHref).
- content.hero: tagline (REQUIRED), headline (REQUIRED), subheadline, primary/secondary CTAs (label/href/kind), differentiators, testimonials (name/title/quote).
- services: overview, items[] with name, short, details[], and cta { label, href }.
- pages: enable flags; about.team[]; services.detailPages; blog/caseStudies/pricing.
- navigation: header links; footer columns/links.
- conversion: primaryCta; contact { email, phone, address }; leadMagnet { title, assetUrl }.
- integrations: analytics provider + IDs; crm provider + apiKeyEnv; forms handler; scheduling.calendlyUrl.
- seo: titleTemplate, defaultTitle (REQUIRED), defaultDescription, keywords[], openGraphImage, twitterHandle, sitemap include/exclude.
- legal: privacyPolicyUrl, termsUrl, cookieBanner.
- social: linkedin, github, twitter.
- assets: images[] { src, alt }, clientLogos[] { src, alt, url }.
- operations: hosting, performanceTargets (lighthouse scores), deadline.

What users can provide to accelerate answers
- Brand kit: logo (SVG/PNG), favicon (ICO/PNG), color palette, typography/Google Fonts choices.
- Existing website URL or brochure for services/testimonials (only use with permission; do not scrape secrets).
- Social profile URLs; contact email/phone/address.
- Analytics IDs (GA4 ID, Plausible domain, PostHog key), CRM provider name and the environment variable name (not the secret value), Formspree ID, Calendly URL.
- SEO assets: OG image, keywords, sitemap or desired routes list.
- Legal URLs or documents for privacy/terms; cookie banner preference.
- Client logos and permission to display.

Output contract
- Deliver a filled `.github/Creation/customization.yaml` (same schema as the template).
- Place assets in `public/` and update YAML paths accordingly.
- Summarize any missing fields and propose safe defaults.
- List environment variables to set (only names in code/hosting; never commit values).
- Optional follow-up: propose code wiring tasks to consume the YAML.

Questioning flow tips
- Start with mode selection (Simple vs Advanced) and the user’s priority (brand vs content vs SEO).
- Confirm REQUIRED fields early; collect assets/links next; then cover integrations and legal.
- Validate URLs, hex color formats, and email syntax. Keep placeholders if uncertain.
- Read any attached files and extract relevant values; ask to confirm before writing to YAML.

## Tech snapshot
- Framework: Next.js 14 (App Router, `app/`)
- Language: TypeScript (strict, noEmit)
- Styling: Tailwind CSS + PostCSS/Autoprefixer
- Node: 18.17.1
- Scripts: `npm run dev | build | start | lint`

## Guardrails
- Keep edits minimal and scoped; avoid repo‑wide reformatting.
- Respect App Router conventions: files in `app/` map to routes.
- Tailwind: update `tailwind.config.ts` `content` globs if you add new top-level dirs.
- No secrets in repo. Use `.env.local` for local, service‑side secrets only on the server.
- Client code that uses hooks/state must start with `"use client"`.

## Working agreement (success criteria)
- Build passes: `npm run build`
- Lint passes: `npm run lint`
- App boots locally: `npm run dev` renders `/` without errors
- No new TypeScript errors
- Docs updated if you add routes, envs, or config

## Typical tasks and how to do them
- Add a page/route: create `app/<route>/page.tsx` with a React component export.
- Layout or metadata: edit `app/layout.tsx` and `export const metadata`.
- Global styles: edit `app/globals.css`. Prefer Tailwind utility classes.
- Static assets: add to `public/` and reference with `/asset.png`.
- Env vars: add to `.env.local`. For client code, prefix with `NEXT_PUBLIC_`.
- Server-only logic: default Server Components; keep secret usage server-side.

## Code review checklist
- Routing: files correctly placed under `app/` (`page.tsx`, optional `layout.tsx`).
- Accessibility: semantic HTML; alt text for images.
- Performance: use `next/image` for images; avoid oversized assets.
- Styling: Tailwind classes; no dead global CSS; purge paths cover new files.
- Types: public props/interfaces typed; avoid `any` without reason.
- Config: `next.config.mjs` changes are justified and documented.

## Quality gates to run locally
- Install deps: `npm install`
- Lint: `npm run lint`
- Build: `npm run build`
- Smoke test: `npm run dev` then open http://localhost:3000

## PR expectations
- Clear title and description (routes affected, env/config changes).
- Screenshots for visible UI changes.
- Confirmed quality gates in PR body.
- No unrelated formatting or dependency bumps.

## Pitfalls to avoid
- Using hooks in a Server Component (missing `"use client"`).
- Importing server-only modules into client components.
- Assets outside `public/` and expecting static serving.
- Forgetting Tailwind `content` updates after adding new folders like `features/`.

---
For deployment specifics, see `Instructions.md` and `README.md`.
