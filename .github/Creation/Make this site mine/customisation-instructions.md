# Make this site mine — customization workflow

This guide helps an agent collect what’s needed to customize this Next.js template and produce:
- `/.github/Creation/customization.yaml` — business content, pages, SEO, integrations (schema: `customization-template.yaml`)
- `/.github/Creation/Make this site mine/look-and-feel.yaml` — copy of the template populated with design tokens and visual preferences

Modes
- Simple: minimal questions; infer sensible defaults; keep placeholders where needed.
- Advanced: field-by-field with validation; no inference unless requested.

Sequential questioning protocol
- Ask in small batches (1–3 related questions), confirm and summarize before proceeding.
- If docs/assets are provided, extract values and ask for confirmation rather than re-asking.
- If assets are pending (logo/OG image), insert placeholders and mark TODOs.

Suggested batch order (combines content + look & feel)
1) Mode + priorities: Simple or Advanced? Any priority (brand, content, SEO, integrations)?
2) REQUIRED core (customization.yaml): project.name; seo.defaultTitle; seo.defaultDescription.
3) Hero/value prop (customization.yaml): content.hero (tagline, headline, subheadline); primary CTA (label, href, kind).
4) Pages + navigation (customization.yaml): pages enable; header/footer basics.
5) Branding (look-and-feel.yaml): logo, favicon, primary color, darkMode; fonts/Google Fonts link.
6) Layout & components (look-and-feel.yaml): container width, radius, buttons/cards/forms preferences.
7) Services/testimonials (customization.yaml): services overview/items; testimonials.
8) SEO extras (customization.yaml): keywords, openGraphImage, sitemap includes.
9) Social/contact (customization.yaml): contact email/phone/address; social URLs.
10) Integrations (customization.yaml): analytics provider + IDs; CRM provider + env var name; forms; Calendly.
11) Accessibility & motion (look-and-feel.yaml): contrast target, link underlines, focus-visible, motion level.
12) Legal/ops (customization.yaml): privacy/terms URLs; cookieBanner; hosting; lighthouse targets; deadline.

What users can provide to accelerate answers
- Brand kit: logo (SVG/PNG), favicon (ICO/PNG), colors, fonts/Google Fonts.
- Existing site or brochure for services and testimonials (with permission).
- Social URLs; contact email/phone/address.
- Analytics IDs, CRM provider and environment variable NAME, Formspree ID, Calendly URL.
- SEO assets: OG image, keywords, sitemap or routes list.
- Legal URLs; cookie banner preference; client logos with permission.

Outputs & contracts
- From template: Copy `/.github/Make this site mine/look-and-feel-template.yaml` to `/.github/Creation/Make this site mine/look-and-feel.yaml`, then fill values.
- Produce `/.github/Creation/customization.yaml` (schema-aligned) and `/.github/Creation/Make this site mine/look-and-feel.yaml`.
- Place referenced assets under `/public/` and update paths accordingly.
- Summarize missing fields and defaults; list env var NAMES only (never values).
- Optional: list wiring tasks (Tailwind theme, layout metadata, homepage sections, navigation, analytics gating).

Retrieval contract for builder agents
- Inputs: the two YAMLs above.
- Mapping guidance:
  - Tailwind theme (colors, radius, spacing, shadows) ← look-and-feel.yaml.brand.palette/layout
  - Fonts (link + families) ← look-and-feel.yaml.typography → app/layout.tsx + app/globals.css
  - Component variants (buttons/cards/forms) ← look-and-feel.yaml.components
  - Sections (hero/features/testimonials) ← customization.yaml.content + look-and-feel.yaml.sections
  - Images/assets ← ensure `/public/` paths exist; configure remote images in `next.config.mjs` if needed
  - Accessibility ← look-and-feel.yaml.accessibility (contrast, underlines, focus-visible, reduced motion)
- Fallbacks: use Tailwind defaults when missing; record gaps.

Example prompts
- Simple (batch 1): "Simple or Advanced? What's your company name (REQUIRED) and primary domain?"
- Simple (batch 2): "One-word vibe (e.g., clean/enterprise/playful)? Any inspiration URL and what you like about it?"
- Advanced (batches 1–3):
  - 1) project { name (REQUIRED), domain, environment }; brand.darkMode? brand.colors.primary?
  - 2) content.hero { tagline (REQUIRED), headline (REQUIRED), subheadline }; primaryCta { label, href, kind }.
  - 3) pages enable flags (home/about/services/contact/faq); navigation.header top 3 links.

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

Output contract
- Deliver a filled `.github/Creation/customization.yaml` (same schema as the template) and `/.github/Creation/Make this site mine/look-and-feel.yaml`.
- Place assets in `public/` and update YAML paths accordingly.
- Summarize any missing fields and propose safe defaults.
- List environment variables to set (only names in code/hosting; never commit values).
- Optional follow-up: propose code wiring tasks to consume the YAMLs.
