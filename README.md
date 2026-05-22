# NIIT Sales & Engagement Hub

Internal enablement hub for NIIT Consulting & Advisory sales and engagement teams.

**Live:** https://niit-deploy.vercel.app

## What's here

A single-page application that helps the team:

- **Get in the room** — outreach plays, account routing, email templates (now opens in Outlook)
- **Prep** — industry context to read 5 minutes before a call
- **Discover** — 7 non-negotiable discovery question themes + a practice diagnostic
- **Follow-up** — handoff to the right Consulting Director after a call
- **Storefront** — all 14 consulting & advisory offerings, grouped by cluster

## Stack

- Pure HTML / CSS / vanilla JS — no framework
- Single `index.html` (~265 KB)
- Vercel for hosting (static deploy, SPA rewrites in `vercel.json`)

## Local development

Just open `index.html` in a browser. No build step.

## Deploy

```bash
npx vercel --prod
```

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app — markup, styles, diagnostic engine, routing |
| `vercel.json` | Static-site config + SPA rewrites |
| `favicon.svg` | Browser tab icon |
| `package.json` | Vercel deploy metadata |

## Audience

Internal only — NIIT Consulting & Advisory sales enablement, engagement managers, consulting directors.
