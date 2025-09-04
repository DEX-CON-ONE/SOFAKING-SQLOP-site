# Make this site mine — customization workflow

This guide helps an agent collect the inputs needed to customize this Next.js template and produce a filled `customization.yaml` based on the schema in `/.github/Creation/customization-template.yaml`.

Modes
- Simple: ask minimal, high-level questions; infer sensible defaults and keep placeholders where needed.
- Advanced: ask field-by-field questions to fully populate the YAML; no inference unless explicitly requested.

Sequential questioning protocol
- Ask in small batches (1–3 related questions), confirm and summarize before proceeding.
- If docs/assets are provided, extract values and ask for confirmation rather than re-asking.
- If assets are pending (logo/OG image), insert placeholders and mark TODOs.

Suggested batch order
1) Mode + priorities: Simple or Advanced? Any priority (brand, content, SEO, integrations)?
2) REQUIRED core: project.name; seo.defaultTitle; seo.defaultDescription.
3) Hero/value prop: content.hero (tagline, headline, 1–2 sentence subheadline); primary CTA (label, href, kind).
4) Pages + navigation: which pages to enable; header and footer basics.
5) Branding: logo, favicon, primary color, darkMode; fonts/Google Fonts link.
6) Services/testimonials: services.overview and items; testimonials (optional).
7) SEO extras: keywords, openGraphImage, sitemap include.
8) Social/contact: conversion.contact (email/phone/address); social URLs.
9) Integrations: analytics provider + IDs; crm provider + apiKeyEnv; forms handler; scheduling.calendlyUrl.
10) Legal/ops: privacy/terms URLs; cookieBanner; operations.hosting and lighthouse targets; deadline.

What users can provide to accelerate answers
- Brand kit: logo (SVG/PNG), favicon (ICO/PNG), colors, fonts/Google Fonts.
- Existing site or brochure for services and testimonials (with permission).
- Social URLs; contact email/phone/address.
- Analytics IDs, CRM provider and environment variable NAME, Formspree ID, Calendly URL.
- SEO assets: OG image, keywords, sitemap or routes list.
- Legal URLs; cookie banner preference; client logos with permission.

Output contract
- Produce `/.github/Creation/customization.yaml` matching the schema.
- Place assets in `/public/` and update YAML paths accordingly.
- Summarize missing fields and propose defaults; list env var NAMES (never values).
- Optional: list wiring tasks (Tailwind/colors, layout metadata, homepage sections, navigation, analytics gating).

Example prompts
- Simple (batch 1): "Simple or Advanced? What's your company name (REQUIRED) and primary domain?"
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
