# Next.js Hybrid Starter

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily deploy [Next.js](https://nextjs.org/) apps in minutes. Use this repo with the [Azure Static Web Apps Hybrid Next.js tutorial](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid) to build and customize a new Next.js site.

This template is optimized for AI‑driven customization: you can provide a small set of brand/content inputs and have an agent generate a tailored site configuration, copy, and asset wiring for you.

## AI‑driven customization overview

What can be customized
- Branding: logo, colors, typography, dark mode
- Content: homepage hero, differentiators, services, testimonials
- Navigation and footer links
- SEO: titles, descriptions, keywords, OG image, sitemap
- Integrations: analytics (GA4/Plausible/PostHog), CRM, forms, scheduling

How it works
1) Prepare your materials (recommended):
	- Logo (SVG/PNG), favicon (ICO/PNG), color palette (hex), fonts/Google Fonts link
	- Company name and domain, contact email/phone/address, social URLs
	- Hero copy (tagline, headline, 1–2 sentence subheadline), differentiators, testimonials
	- Services list (name, short description, a few bullets), primary/secondary CTAs and links
	- SEO defaults (title ≤60 chars, description ≤155 chars, keywords), OG image, sitemap routes
	- Analytics IDs, CRM provider + environment variable name, Formspree ID, Calendly URL
2) In a new chat with your AI agent, attach `/.github/Creation/customization-template.yaml` and say: “Make this site mine (Simple)” or “Make this site mine (Advanced)”.
3) Answer a short series of questions. The agent will produce `/.github/Creation/customization.yaml`, suggest any missing values/defaults, and list environment variable NAMES to set in hosting (never commit secrets).
4) Add/upload assets to `/public/` as referenced by the YAML. The agent can help validate paths.
5) Optionally, wire the YAML into components/config (navigation, hero, services, SEO). See links below.

Modes
- Simple: minimal questions; the agent infers sensible defaults and leaves placeholders if needed.
- Advanced: field‑by‑field prompts to fully populate the YAML with validation and fewer assumptions.

Key files
- Customization template (input): `/.github/Creation/customization-template.yaml`
- Customization output (result): `/.github/Creation/customization.yaml`
- Assets: `/public/` (images/logos referenced from YAML)
- Agent playbook: `Agents.md` (flows, guardrails, and checklists)
- Copilot instructions: `Instructions.md` (short guide that points to the playbook)

Where values map in the codebase
- Colors/typography: `tailwind.config.ts`, `app/globals.css`
- Metadata/layout and fonts: `app/layout.tsx`
- Homepage sections (hero/services/testimonials): `app/page.tsx` (or components you add)
- Images and icons: `/public/`
- Next.js config (images, etc.): `next.config.mjs` (only when needed)

Safety and privacy
- Do not commit secrets. Provide only environment variable NAMES in YAML; set values in your hosting environment.
- Ensure you have rights to any logos, images, or testimonials.
- Validate URLs, email syntax, and hex colors.

Learn more and suggested flows
- For agent workflows and detailed guidance, see `Agents.md`.
- For a short instruction set for AI tools, see `Instructions.md`.

## Running locally

To run locally, start by installing the Node dependencies.

```bash
npm install
```

Start the development server with the following command:

```bash
npm run dev
```

Next, open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

For richer local development experience, refer to [Set up local development for Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/local-development).

## How it works

This starter application uses Next.js and React Server Components. By default, all Next.js components are React Server Components, and as such, are handled by Azure Static Web Apps-managed backend functions. Read more about [Next.js support for Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/nextjs).

> Note: If you use the [Azure Static Web Apps CLI](https://docs.microsoft.com/azure/static-web-apps/local-development), copy the staticwebapp.config.json file to the out folder, and start the CLI from the out folder.
