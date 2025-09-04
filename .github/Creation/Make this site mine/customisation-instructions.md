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
