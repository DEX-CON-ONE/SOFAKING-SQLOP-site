# SQLOPTIMISE Website — Product & Experience Spec (v1.1)

**Owner:** Gareth (Founder, SQL Server DBA)  
**Brands:** SQLOPTIMISE (primary), aDBA (product), part of DEX CON ONE ecosystem  
**Tone:** refreshing, open, easy, helpful  
**Visual motif:** twilight landscape with soft clouds (subtle), calm gradients, clean UI  
**Primary CTAs:** **Green** (brand-aligned)

---

## 1) Executive Positioning
**What it is:** The UK go-to for SQL Server & Azure Data Platform operations for SMBs—first-time DBA environments, best-practice remediation, automation-first.  
**What it isn’t:** Generic data consultancy or body-shop. Clear scope: SQL Server, Azure SQL (MI/DB), Fabric data ops, DBAaaS tiers.

**Core promise:** *Make your SQL simple, fast, and reliable—then keep it that way with automation.*  
**Tagline direction:** **SQL, Made Simple.**

**Rationale:** Leverages actual strengths (stabilise, standardise, automate) and differentiates vs MSP noise.

---

## 2) Audiences & Jobs-to-Be-Done
- **Founders/CTOs/IT Managers (SMB):** want outages to stop, risk down, predictable costs.  
  *JTBD:* Get to a safe SQL footing fast and keep it there.
- **Ops-minded Developers:** need schema/index/query guidance.  
  *JTBD:* Sanity-check SQL; get faster without rewrites.
- **Inexperienced/Accidental DBAs:** need a framework and coaching.  
  *JTBD:* Adopt best practice and automate the grunt work.

**Implication:** Clear tiers, before/after proof, self-diagnosis, zero fluff.

---

## 3) Value Propositions (Home + Services)
1) **Operational Excellence, not heroics** — standards over firefighting.  
2) **Automation-first** — aDBA + FRK + Ola + dbatools baked in.  
3) **Transparent scope & pricing** — tiers with explicit inclusions.  
4) **Migration & Modernisation** — Azure SQL MI, HA/DR, Fabric landing.  
5) **Measured outcomes** — health scores, trend reports, SLA-style commitments.

---

## 4) Information Architecture
**Primary Nav:** Home · Services · Solutions · Products · Resources · Pricing · About · Contact  
**Secondary:** Status · Blog · Case Studies · Playbooks · Legal

**Sitemap**
- **Home** (value props, diagnostic CTA, tier snapshots, social proof)
- **Services**
  - DBA-as-a-Service (Visibility · Resilience · Premium Partner)
  - One-offs (Healthcheck/RCA · Performance Tuning · DR/HA · Azure SQL/Azure MI Migration · Fabric Foundations)
- **Solutions** (problem-first)
  - Deadlocks
  - Backups/DR risk
  - Migration risk
  - Slow reporting on Azure MI subscriber
- **Products**
  - **aDBA** (Healthcheck, Index Audit/Optimiser, Logging; integrations & roadmap)
- **Resources**
  - **Blog** (SEO engine)
  - **Playbooks** (downloadables: checklists/runbooks)
  - **Guides** (“SQL Made Simple” mini-guides)
- **Case Studies** (anonymised, outcomes)
- **Pricing** (tier table + boundaries)
- **About** (credibility, certifications, talks, philosophy)
- **Contact / Book** (Bookings/Calendly + short form)
- **Status** (optional: uptime/perf snapshots)

---

## 5) Page-Level Specs

### 5.1 Home
**Purpose:** Prove credibility fast and route to action.  
**Hero:** twilight gradient + subtle clouds; headline + strapline; primary/secondary CTAs.

- **Headline:** *SQL Server Performance & Cost Optimisation: Made Simple*  
- **Subhead:** *Make SQL reliably faster and cheaper.*  
- **Micro-strapline:** *Now that’s refreshing.*  
- **Primary CTA:** **Schedule a Call** (green)  
- **Secondary CTA:** View Services

**Blocks**
- **Cred Bar:** Microsoft certs; FRK/Ola/dbatools logos as “built on”
- **Three Proof Cards:** Stability ↑, Cost ↓, Speed ↑ (with metrics)
- **How We Work:** Assess → Fix → Automate → Monitor
- **Tier Snapshot:** (link to compare)
- **Blog Teasers:** latest 3
- **Mid-page CTA:** **Schedule Free Assessment** (green)
- **Footer CTA:** Book a discovery call + privacy reassurance

**Rationale:** Matches the current look and sharpens conversion hierarchy with green as the action colour.

---

### 5.2 Services → DBA-as-a-Service
**Goal:** Make tier choice obvious; remove ambiguity on scope.  
**Content:** tier comparison (monitoring, cadence, alerting, RCA reports, on-site days, SLAs, code review boundaries, hotfix policy).  
**Add-ons:** performance deep-dives, migrations, Fabric modelling consults.  
**Rationale:** Transparency reduces churn and protects margins.

---

### 5.3 Solutions (Problem-first)
Template: **Problem → Why it happens → What we do → Proof → CTA**.  
Example: *Slow reporting on Azure MI subscriber* (replica indexing, hourly ETL cache, job logic around PBI sessions, etc.).  
**Rationale:** SEO for real queries, demonstrates practical expertise.

---

### 5.4 Products → aDBA
**Include:** what it is, modules, integrations (Ola/FRK/WhoIsActive/SQLWatch), install approach (dbatools + JSON config), roadmap, diagrams, FAQ, demo CTA.  
**Rationale:** Productises IP; reinforces automation-first edge.

---

### 5.5 Resources → Blog & Playbooks
- **Blog:** MDX content; code/diagrams; pragmatic fixes.  
- **Playbooks:** gated downloads — “SQL Healthcheck Checklist”, “Migration Cutover Runbook”, “Index Tuning Cheatsheet”.

**Rationale:** SEO + lead magnets; fuels LinkedIn content.

---

### 5.6 About
**Angle:** often the first *real* DBA in the building. Talks (AI Summit London 2023), open-source contributions, philosophy (reduce break-fix via standards + automation). Photo, short origin, values.

---

### 5.7 Contact / Book
**Options:** MS Bookings/Calendly; short form; email.  
**Trust:** data handling statement; response time.

---

## 6) Visual & Brand System — Visual Keys (locked to current live site)

**Reference:** reviewed the live site (hero, strapline, CTAs, section layout, footer).

### 6.1 Colour System
- **Primary (CTAs):** **Green** — all conversion actions (Schedule a Call / Free Assessment). Hover deepens; focus is clearly visible.  
- **Links:** Blue for inline/body links to preserve scannability; never out-compete CTAs.  
- **Secondary accent:** restrained purple for highlights/badges only.  
- **Backgrounds:** twilight hero (deep indigo → slate) with soft cloud overlay; inner sections white.  
- **Surfaces & Borders:** white cards; light cool-grey separators.  
- **Text:** very dark blue-black headings; neutral body; muted helper text.  
- **States:** success (distinct from CTA green), warning (amber), destructive (red).  
- **Depth/Shape:** soft shadows; generous radii (not pill-shaped).

### 6.2 Typography & Voice
- **Headings:** modern grotesk/sans, tight tracking, strong weight (H1/H2).  
- **Hero copy:** as above; keep concise.  
- **Voice:** plain English, direct, buyer-oriented.  
- **Mono:** reserved for code in articles only.

### 6.3 Component Look & Feel
- **Navbar:** transparent over hero; on scroll/inner: white background with subtle bottom border.  
- **Hero:** headline + strapline + two CTAs (primary green, secondary neutral).  
- **Mid-page CTA band:** “Ready to optimise your SQL?” → **Schedule Free Assessment** (green).  
- **Cards:** white surfaces, soft shadows, generous padding, optional small icon chip.  
- **Buttons:** primary solid green; secondary ghost/outline; clear hover/focus; minimal animation.  
- **Forms:** spacious fields, clear labels, concise helper text; semantic error styling.  
- **Footer:** compact, two-column (Company, Resources) + legal lines; privacy link.

### 6.4 Imagery & Background
- Subtle twilight gradient + sparse vector clouds; no heavy photo textures.  
- Minimal line diagrams for pipelines and aDBA modules; consistent stroke weight.  
- Photography sparingly; cool temperature; low contrast.

### 6.5 Motion & Interaction
- Fast, calm fades; respect reduced-motion.  
- Light elevation on card hover; subtle nav underline animation.

### 6.6 Layout & Spacing
- Comfortable reading width; hero text ~20–22ch.  
- Two/three-column card grids; strong vertical rhythm; generous whitespace.

### 6.7 Accessibility & Contrast
- Primary green on white: meet AA for normal text (AAA for large where possible).  
- Always show focus indicators; don’t rely on colour alone.

**Outcome:** Visual keys now mirror the live site and enforce **green** as the conversion colour.

---

## 7) Conversion Design
- **Primary CTA:** *Schedule a Call* (green, sticky on mobile/desktop nav where suitable).  
- **Secondary CTA:** *Run a 2-minute SQL Self-Check* (lightweight questionnaire) or *View Services*.  
- **Lead Magnets:** gated Playbooks; newsletter “SQL Made Simple”.

**Rationale:** Capture ready buyers; nurture the rest.

---

## 8) SEO & Content Architecture
**Technical:** SSG/ISR; clean URLs; XML sitemap; robots.txt; schema (`Organization`, `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`).  
**CWV targets:** LCP < 2.0s, CLS < 0.05, INP < 200ms.  
**Images:** responsive `srcset`, AVIF/WebP, hero <150KB, lazy-load below fold.  
**On-page:** unique H1; 155-char meta descriptions; internal links between problem pages ↔ services ↔ blog.

**Initial Blog Plan (8 posts):**
1) The 90-Minute SQL Stabilisation Checklist  
2) Azure SQL MI Subscriber: Fast Reporting Without Killing OLTP  
3) Stop Guessing: Index Audit That Actually Saves Money  
4) Fabric Foundations for SQL-Centric Teams  
5) Incident RCA: The 5-Doc Pack We Use  
6) DBA-as-a-Service: What’s In, What’s Out (and Why)  
7) How We Use FRK/Ola/dbatools Together  
8) Deadlocks 101 for Busy Developers

---

## 9) Tech Stack & Ops
- **Framework/Host:** Next.js on **Azure Static Web Apps** (Functions for forms).  
- **UI:** Tailwind + shadcn/ui (theme mapped to green primary).  
- **Content:** Git-based MDX; consider Decap CMS later if needed.  
- **Automation:** Microsoft Forms/Bookings + Power Automate → Teams/Planner.  
- **Analytics:** Microsoft Clarity + (optional) GA; Lighthouse CI for perf gates.  
- **Status:** simple uptime/perf snapshot page (optional).

**Rationale:** Minimal ops, fast pages, Microsoft-aligned.

---

## 10) Accessibility & Compliance
WCAG 2.2 AA; keyboard nav; visible focus; colour contrast validated.  
Cookie/privacy policy; UK/ICO compliance; DPA statement.

---

## 11) Performance Budget
JS < 180KB gzip initial; CSS < 30KB; hero image < 150KB; no heavy 3rd-party scripts.

---

## 12) Content & Assets
Founder photo; 3–5 diagrams; aDBA module diagram; 2 anonymised case studies; icon set; twilight background; certification badges.

---

## 13) Roadmap
**Foundations (Weeks 1–2):** IA, scaffold, Home + Services + Blog skeleton, basic SEO, forms wired, 3 posts.  
**Building (Weeks 3–4):** Solutions pages, aDBA page, case studies v1, 2 playbooks, analytics/Clarity, Lighthouse CI, optional Status page.  
**Polished (Weeks 5–6):** Accessibility sweep, copy edit, image optimisation, schema markup, perf hardening, CMS (if needed), complete 8-post plan.

---

## 14) KPIs
**Acquisition:** organic sessions; top-20 keyword growth (90 days).  
**Activation:** discovery call CVR > 2.5%; lead magnet CVR > 3.5%.  
**Outcome:** tier upgrades (Visibility → Resilience), proposal accept rate, retention.

---

## 15) Risks & Mitigations
- **Tier scope creep:** explicit boundaries; policy pages.  
- **Perf regressions:** CI Lighthouse gates; strict budgets.  
- **Content stagnation:** weekly 500–900-word posts; repurpose to LinkedIn.

---

## 16) Strong Opinions
- Ship **green** as the one true conversion colour; keep blue for links only.  
- Build the **2-minute SQL Self-Check** early—it’s the growth lever.  
- Keep CMS out until content demand forces it.  
- No gimmicks. Speed, clarity, calm.
