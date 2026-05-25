# NIIT Sales & Engagement Hub

Internal enablement hub for NIIT Consulting & Advisory sales and engagement teams.

**Live:** https://niit-deploy.vercel.app
**Repo:** https://github.com/muskananeja/NIIT

## What's here

A single-page application that helps the team:

- **Get in the room** — outreach plays, account routing, email templates (opens in Outlook)
- **Industry Brief** — 5-minute context briefs to read before a call
- **Discover** — 7 non-negotiable discovery question themes + a practice diagnostic
- **Follow-up** — handoff to the right Consulting Director after a call
- **Storefront** — all 14 consulting & advisory offerings, each with a Challenge → What We Do → Process → Outcomes → Client Stories landing page

## Project structure

```
niit-deploy/
├── index.html              # HTML shell — nav + page containers + script tags
├── css/
│   ├── core.css            # base styles, layout, nav, typography, utilities
│   ├── ui.css              # v2 components — cards, app-hero, themes, move-detail,
│   │                       #   industry detail, Industry Brief
│   └── storefront.css      # offering landing pages + case study modal
└── js/
    ├── data.js             # all data tables — industries, moves, offerings,
    │                       #   themes, diagnostic Qs, CDs, routes
    ├── content.js          # offering landing page content (challenge, perspective,
    │                       #   process, outcomes, client stories)
    ├── helpers.js          # _md (markdown bold), _splitSentences, _hasRealMetrics,
    │                       #   _findCD, _outcomeHook, getRelationshipLabel
    ├── nav.js              # routing, page transitions, nav history, back button
    ├── industry.js         # Industry Brief: grid renderer + detail page
    ├── moves.js            # Get in the room: tier moves + move detail + Outlook
    │                       #   integration + account router
    ├── offerings.js        # Storefront: grid + offering landing pages + case modal
    ├── diagnostic.js       # discovery diagnostic engine + UI + engagement detail
    ├── discover.js         # Discover page: theme expand
    ├── pulse.js            # Tier 1 pulse check tool
    └── app.js              # bootstrap (CD directory render + init calls + ESC handler)
```

## Stack

- Pure HTML / CSS / vanilla JS — no framework, no build step
- Vercel for hosting (static deploy, SPA-style rewrites in `vercel.json`)
- Fonts: Poppins (via Google Fonts CDN)

## Local development

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

```bash
npx vercel --prod
```

## Audience

Internal only — NIIT Consulting & Advisory sales enablement, engagement managers, consulting directors.
