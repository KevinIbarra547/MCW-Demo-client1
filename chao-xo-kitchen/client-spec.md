# Client spec: Chào XO Kitchen

- **Mode:** Demo
- **Business type / template:** Restaurant / `restaurant.html`
- **Language:** English (Kevin confirmed 2026-09-29; Spanish can be added later)
- **Status:** Draft, 2026-09-29

## Facts (each with its source)
| Fact | Value | Source |
| --- | --- | --- |
| Name | Chào XO Kitchen | Google listing (screenshot from Kevin) |
| Address | 1420 E Plaza Blvd Ste D-05, National City, CA 91950 | Google listing |
| Hours | Mon–Tue, Thu–Sat 11 AM–8 PM; Wed closed; **Sunday unknown** | Web search (Mindtrip/restaurant listings); Google showed "Closes 8 PM" |
| Phone | **Placeholder** (619) 555-0123 (fake 555 number) | Kevin said a real number isn't needed for the demo |
| Email | none | |
| Cuisine | Asian fusion / "Asian comfort food" | Google listing ("Asian"), cups ("Asian Fusion"), chaoxo.com banner ("ASIAN COMFORT FOOD") |
| Tagline | "made with love" | chaoxo.com and their cups |
| About text (Our Story) | Their own "About us" paragraph | chaoxo.com, copied word for word |
| Catering | Offers catering, food trays, custom event menus | chaoxo.com |
| Price range | $10–20 per person | Google listing |
| Google rating | 4.6 from 412 reviews | Google listing screenshot, 2026-09-29 |
| Menu (65 items, prices, descriptions) | Phở, Rice, Noodles, Appetizers, Drinks, Desserts | chaoxo.com online ordering (Square store data), pulled 2026-09-29 with Kevin's OK. Typos fixed (cotiija, unsweetend, "then bitterness"); descriptions over 140 characters trimmed to their first sentence |
| Party trays | 12 trays, priced by size | chaoxo.com; listed in the catering line, not the menu |

chaoxo.com's hours, phone and address blocks are Square template filler ((555) 555-5555, San Francisco), so they were **not** used. The menu comes from Square's store data, which Kevin approved reading for this demo.
| Ordering | Own Square online ordering at chaoxo.com (pickup + delivery); also DoorDash | chaoxo.com; web search |

## Brand
- Accent color: `#C4441C` (from the orange "CHÀO" logo on their cups, darkened to 5.0:1 with white text)
- Logo: don't have a file; nav uses the name in text

## Optional sections (Step 3)
| Section | On? | Confirmed by / date |
| --- | --- | --- |
| Announcement bar | no | nothing to announce |
| Today's deal card | no | no confirmed deal |
| Delivery apps ("Also on") | yes, DoorDash only | public DoorDash listing |
| Instagram grid | no | handle unknown |
| Our Story | yes, their own About text | chaoxo.com |
| Catering tag + line | yes | chaoxo.com |
| Family owned tag | no | not confirmed |
| First-time offer | no | not confirmed |

## Photos
| Slot | Source | Permission from / date | File |
| --- | --- | --- | --- |
| Hero | Google Maps photo of the dining room (sent by Kevin, cropped to remove Maps buttons/caption; marked "may be subject to copyright") | **Not yet** — ask owner at pitch; swap for stock if no | `images/dining-room.webp` |
| Menu: Birria Pho | Google listing photo | Not yet | `images/birria-pho.webp` |
| Menu: Birria Dumplings | Google listing photo | Not yet | `images/birria-dumplings.webp` |
| Menu: Lomo Saltado | Google listing photo (Kevin chose to keep this name 2026-09-29; not on their online menu, so the price slot is hidden) | Not yet | `images/lomo-saltado.webp` |
| Menu: Ube Coffee | Google listing photo (matched to their menu item) | Not yet | `images/purple-drinks.webp` |
| Menu: Mango Fruit Drinks | Google listing photo. No exact match on their menu (compared with Mango Calamansi and Pineapple Tamarindo photos), so Kevin OK'd a descriptive name; price hidden | Not yet | `images/fruit-drinks.webp` |
| Menu: 17 more dish/drink photos | Their own product photos from chaoxo.com online ordering, downloaded 2026-09-29 with Kevin's OK. Skipped Anthony Bourdain Pho (has a "Hypic" app watermark) | Kevin OK'd for the demo; confirm with owner | `images/menu/*.webp` |
| Menu: Pandan Halo | Google listing photo (matches their description: jellies, pandan, ube ice cream) | Not yet | `images/dessert.webp` |
| Our Story | Reuses fruit-drinks photo as a stand-in | Not yet | `images/fruit-drinks.webp` |
| Owner | none yet | | |

Kevin chose to use Google photos for this private pitch demo (2026-09-29). The page is `noindex`; only show the link to the owner.

## Reviews used
| Reviewer | Source | OK to show? |
| --- | --- | --- |
| Mireya M. (5★, ~6 months ago) | Google review, screenshot from Kevin | Yes, trimmed with "…" |
| Kristina B. (5★, ~7 months ago) | Google review, screenshot from Kevin | Yes, trimmed with "…" |

## Files
- `data/site.js`: **all content** (business info, hours, menu, reviews, story, analytics keys). Edit this to update the site.
- `index.html`: page skeleton, the same for every restaurant (only `<title>` and meta description are per-client)
- `js/render.js`: builds the page from `data/site.js`, including the JSON-LD
- `js/main.js`: menu tabs, Open-now badge, button tracking, Cloudflare beacon
- `css/styles.css`: all styles; brand colors and fonts are the `:root` variables at the top
- `images/`: photos (see Photos above)

The data file is `.js`, not `.json`, so the site still works when opened straight from a folder (browsers block reading `.json` files that way).

## Forms
- None. Call and Directions buttons only.

## Missing / before launch
- [ ] Real phone number (replace every `+16195550123` / `(619) 555-0123`)
- [ ] Sunday hours
- [ ] Owner's OK to use their Google photos (or replace them)
- [ ] Lomo Saltado and Mango Fruit Drinks: ask the owner for real names/prices
- [ ] Owner confirms menu prices are current (pulled 2026-09-29)
- [ ] Owner's photo for Our Story (text now comes from their About us)
- [ ] Instagram handle (turns on the Instagram grid)
- [ ] Remove `noindex` in `index.html` and set `demo: false` in `data/site.js`
- [ ] Fill `analytics` in `data/site.js` (siteKey, hubUrl, cfToken)
