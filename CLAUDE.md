# Client Site — repo rules
<!-- Location: in EACH client repo, e.g. ~/Mainstreet/clients/MCW-Demo-client1/CLAUDE.md -->

## What this is
- One client's website. Built with the mainstreet-client-site skill.
- Content lives in `data/site.js`. Pages read from it. Change content there, not in the layout.
- This repo: Chao XO Kitchen (`chao-xo-kitchen/`) · Status: demo

## Design
- Shared layout pattern: photo hero (full-width photo, see-through nav, bold headline, main button + Call Now).
- Unique styling per client. No shared stylesheet, and no copying code from other client repos.
- Motion allowed: GSAP + ScrollTrigger, Lottie, View Transitions.
- Buttons get a small magnetic pull only, never a color-fill hover. A soft glow follows the cursor over cards, buttons, and links.
- Always support `prefers-reduced-motion`. Check phone (375px) and desktop (1440px).

## Restaurant content
- Every restaurant site has: menu, prices, deals/combos, location, reviews.
- **Menus must be real HTML text** (headings, lists, prices as text). Never images or PDFs.
- Record each photo's source in `data/site.js`: client's own, Google photo with permission, or placeholder stock.

## Local SEO
- Add Restaurant JSON-LD schema built from `data/site.js` only.
- Skip any field you don't have. Never invent hours, prices, or reviews.
- **Demo sites:** add `noindex`, no schema, and a visible "Concept, not a real business" label.
- **Paying clients:** schema on, indexing on.

## Hosting (planned)
- Cloudflare Pages. Not Vercel Hobby (non-commercial only).
- The client buys and owns the domain. We only point it to the site.
