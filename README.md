# SRI SARAVANA'S TEXTILES — Premium Digital Showroom

Official website for **SRI SARAVANA'S TEXTILES**, a textile and clothing store on Middle Street, Rameswaram, Tamil Nadu, India.

A golden-gradient themed digital showroom built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Lucide React**. It is a business showcase only — there is no cart, checkout, payment, ordering or database.

## Key facts

- **Business name:** SRI SARAVANA'S TEXTILES
- **Address:** 5, Middle St, Rameswaram, Tamil Nadu 623526, India
- **Phone:** +91 99446 87843 *(owner confirmation required)*
- **Google Maps:** https://maps.app.goo.gl/XMeU39x8U2jmCiW28
- **Coordinates:** 9.287858, 79.3155488
- **Hours:** 6:00 AM – 10:00 PM daily *(owner confirmation required)*

## Pages

| Route | Purpose |
| --- | --- | --- |
| `/` | Hero, about preview, featured collections, gallery preview, customer reviews preview, contact preview, visit banner |
| `/about` | Business introduction, shop location, real photographs, verified collections |
| `/collections` | Editorial catalogue of confirmed categories with real photographs |
| `/gallery` | Filterable photo grid with lightbox, keyboard navigation and captions |
| `/reviews` | Google Reviews hub — read reviews, write a review, share private feedback |
| `/feedback` | Private customer feedback via the owner's Google Form |
| `/contact` | Call / WhatsApp / Email / Directions, plus the email-drafting form and map |
| `/visit-us` | Full visit details, opening hours, map and directions |
| `/privacy-policy` | Plain-English privacy notice — what is and is not collected |
| `/terms-and-conditions` | Terms of use, purchasing in-store, reviews policy, liability |
| 404 / error | Calm, reassuring status pages (see below) |

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server on http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Performance and scale

The site is engineered to stay fast and steady under heavy traffic, with a deliberately simple architecture: **static pages + static images, and nothing else.**

### Static-first architecture

Every one of the 14 routes is **prerendered at build time**. There is no server function, no database, no API route and no request-time rendering in the path of a visitor. On Vercel that means pages are served from the edge network, so traffic is absorbed by the CDN rather than by an application server.

### Images are static files, not a serverless function

Next.js normally routes images through a runtime optimiser — a serverless function in front of every image request. That is a cold-start and a bottleneck under load. Instead, every photograph is **pre-rendered into content-hashed WebP variants** at build time:

```
public/images/variants/<folder>/<name>-<width>-<hash>.webp
```

- The browser downloads the smallest file that fits the screen, from a `srcSet` of 320w → 2400w.
- The content hash means each file can be cached **`immutable` for a year** and still change the instant a photograph is replaced.
- **No runtime image optimiser is involved at all** — measured request time for a 1024w variant was **p50 11 ms / p95 24 ms** from a single local process, which a CDN edge improves on further.

`ResponsiveImage` (`src/components/ui/ResponsiveImage.tsx`) renders these with explicit dimensions, so **the layout never shifts** while images load.

### Regenerating images

```bash
npm run images:optimize   # regenerates variants + manifest (needs Python + Pillow)
npm run images:verify    # checks every referenced file exists
```

`images:verify` runs automatically before `npm run build` and `npm run dev`, so a missing file can never reach production. After replacing a photograph, run `npm run images:optimize` and commit the updated `public/images/variants/` folder plus `src/generated/image-variants.json`.

### Measured load

1,800 requests fired concurrently against a single local Node process:

| Request | Count | Concurrency | p50 | p95 | Errors |
| --- | --- | --- | --- | --- | --- |
| HTML `/` | 600 | 60 | 55 ms | 101 ms | 0 |
| HTML `/gallery` | 400 | 50 | 23 ms | 30 ms | 0 |
| Image variant (1024w) | 800 | 80 | 11 ms | 24 ms | 0 |

On Vercel these are served from the edge, so capacity is not bounded by this project's server. If you expect sustained traffic far beyond this, add a CDN in front (Cloudflare) — the pages and images are already fully cacheable.

### Other performance choices

- **Fonts** are self-hosted through `next/font` and preloaded, with `display: swap`.
- **JavaScript is minimal** — the only client components are the header, the gallery lightbox, the scroll-reveal helper and the contact form.
- **No layout shift** — every image and block reserves its space.

## Calm error and loading states

Nobody should leave our site feeling flustered. Every failure path is written in warm, reassuring language and always offers a way forward.

| File | When it appears |
| --- | --- |
| `src/app/not-found.tsx` | A page that does not exist — *"We could not find that page… Nothing is lost."* |
| `src/app/error.tsx` | A page failed to render — offers a one-click **Try again** |
| `src/app/global-error.tsx` | The whole app failed — a self-contained, branded fallback with no dependency on the layout |
| `src/app/loading.tsx` | A route is loading — soft golden skeletons that pulse gently instead of a spinning wheel |

All four share `src/components/ui/StatusPanel.tsx`, so the tone stays consistent, and every one of them links back to the shop's phone number so a visitor is never stuck.

## Design system

The primary identity is the golden gradient, defined once in `src/app/globals.css`:

```css
background: #fceabb;
background: -webkit-linear-gradient(to left, #f8b500, #fceabb);
background: linear-gradient(to left, #f8b500, #fceabb);
```

Design tokens:

| Token | Value | Use |
| --- | --- | --- |
| `--color-gold` | `#f8b500` | Accents, active nav, borders |
| `--color-light-gold` | `#fceabb` | Gradient highlight |
| `--color-cream` | `#fffaf0` | Page background |
| `--color-dark` | `#302312` | Headings, body text, dark buttons |
| `--color-brown` | `#594016` | Secondary headings, supporting text |
| `--color-muted` | `#8b7355` | Helper and caption text |
| `--gradient-primary` | `linear-gradient(to left, #f8b500, #fceabb)` | Hero, banners, active states |

Golden gradients are used for the hero, the visit banner, active navigation, card accents and primary buttons. Cream is used for content sections so the site never becomes overwhelmingly yellow.

## Animations

Animations are implemented in **pure CSS plus one small `IntersectionObserver` component** — no animation library was added. This keeps the JavaScript bundle small, avoids layout shift, and every animation still runs with JavaScript disabled (a `<noscript>` fallback reveals all scroll content).

- **Page transitions** — `src/app/template.tsx` remounts on every navigation, triggering a soft fade-and-rise.
- **Hero** — animated gradient drift, slow image push-in, staggered headline/description/button entrance, gently floating textile motifs.
- **Scroll reveal** — `ScrollReveal` fades and lifts sections into view, with per-section stagger delays.
- **Cards & images** — hover lift, gentle image zoom, overlay and caption reveal.
- **Navigation** — animated active underline, sticky header transition, smooth mobile menu.
- **Buttons** — hover, focus and pressed states.
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses every animation to an instant state.

## Central configuration

| File | Contains |
| --- | --- |
| `src/config/business.ts` | Name, phone, address, city, state, postal code, country, coordinates, opening hours, website URL, plus derived `telHref`, `fullAddress`, `directionsUrl`, `mapEmbedUrl` |
| `src/config/integrations.ts` | `ownerEmail`, `googleFeedbackFormUrl`, `googleMapsListingUrl`, `googleReviewUrl`, `whatsappNumber` + helpers |
| `src/config/collections.ts` | Collection catalogue with `status` and `visible` flags |
| `src/config/gallery.ts` | Gallery photographs with captions and alt text |
| `src/config/navigation.ts` | Navigation destinations |

Business information is never hard-coded in components — every page reads from these files.

### Integrations requiring owner configuration

All live in `src/config/integrations.ts`. Unconfigured integrations show a professional setup note instead of a broken link — nothing ever pretends to work.

| Key | Status | What it needs | Used by |
| --- | --- | --- | --- |
| `ownerEmail` | ✅ `abirudhu@gmail.com` | — | `/contact` email-drafting form, footer, contact cards, JSON-LD |
| `whatsappNumber` | ✅ `919944687843` | — | WhatsApp buttons, mobile contact bar |
| `googleFeedbackFormUrl` | ✅ configured | — | `/feedback` form embed + "open in a new tab" fallback |
| `googleReviewUrl` | ⬜ pending | Business Profile → Read Reviews → Get more reviews → Copy link | "Write a Google Review" button |
| `googleMapsListingUrl` | ✅ configured | Public Maps listing | "Read Reviews on Google" buttons |

### The Google Form

Your form — *"Sri Saravanas Textiles Customer Feedback"* (`https://forms.gle/yyBBAYDi4odRejHd8`) — is live and embedded on `/feedback`.

### ⚠️ One setting to change in your Google Form

Right now the form shows a **"Sign in to continue"** prompt, so visitors cannot submit it anonymously. This is a Google Form setting, not a website issue.

**To fix it — about 30 seconds:**

1. Open the form → **Settings** (the sliders icon at the top)
2. Go to **Responses**
3. Find **Collect email addresses** and change it to **Do not collect** (or *Responder input*)
4. Save

While that setting is in place the website still works — the form is embedded below a prominent **"Open in a new tab"** button, and the copy explains that the form opens best in its own tab. But fixing the setting makes it seamless.

**Technical note for future reference:** Google's `?embedded=true` endpoint returns **HTTP 401** for this form while it is framed (verified repeatedly, with and without `sandbox`), which shows the sign-in wall instead of the form. The canonical `viewform` URL renders the complete, interactive form inside the iframe, so that is what the site uses:

```
https://docs.google.com/forms/d/e/1FAIpQLScDQdIlMQvPUDtbx-IfdSgaVy5we7ttE9K9sAx9mMklobDgdQ/viewform
```

The console may show a *report-only* Content Security Policy notice about framing — that message comes from Google's own document, does not block the form, and does not affect your visitors' ability to complete it.

**Optional improvements to your form** — currently it asks for an overall rating (1–5), a fabric/clothing quality rating, and a required comment. To match the full private-feedback spec, you can optionally add:

1. **Customer Name** (short answer, optional)
2. **Customer Email** (short answer, optional)
3. **Feedback Category** (multiple choice: Product Variety · Product Quality · Customer Service · Store Experience · Other)

The website copy is deliberately form-agnostic, so it reads correctly whether or not you add them.

**Still to do:** copy the official review-composer link from your Business Profile into `googleReviewUrl`.

> The general Google Maps listing URL is **not** a review-composer link. `googleReviewUrl` must be copied from the Business Profile.

**WhatsApp number format:** stored as `919944687843` — digits only, including the India country code, as `wa.me` requires. The number matches your listed phone `+91 99446 87843`.

### Confirming details

In `src/config/business.ts` set `telephoneConfirmed: true` and `openingHoursConfirmed: true` once the owner has verified the phone number and opening hours. The JSON-LD structured data only publishes `openingHours` after that confirmation.

## Managing collections

Edit `src/config/collections.ts`. A category is shown publicly only when `status === "confirmed"` **and** `visible === true`, and it must point at a genuine photograph.

Currently confirmed: **Sarees**, **Blouse Pieces & Textiles**, **Men's Wear**.

Still pending (no photograph yet, so not displayed): Women's Kurtis, Readymade Garments, Boys' T-shirts, Undergarments.

Never add prices, stock counts, discounts or order buttons — this is not e-commerce.

## Photographs

All images are genuine photographs of the shop, supplied by the owner, stored as WebP and served through `next/image`.

| File | Folder | Shows |
| --- | --- | --- |
| `sri-saravana-textile-display.webp` | `public/images/hero/` | Display rack: sarees, blouse piece and folded textiles |
| `sri-saravana-shop-exterior.webp` | `public/images/shop-exterior/` | Shop front at night with the illuminated signboard |
| `sri-saravana-shop-interior.webp` | `public/images/shop-interior/` | Sarees on rails beneath the ceiling lights |
| `saree-collection-hanging-row.webp` | `public/images/collections/` | A row of sarees on display |
| `saree-collection-peacock-gold.webp` | `public/images/collections/` | White saree with gold peacock motifs |
| `saree-collection-printed-designs.webp` | `public/images/gallery/` | Printed saree designs |
| `textile-display-rack.webp` | `public/images/gallery/` | Display rack (gallery + collection card rendition) |

To add a photograph: save it into the matching folder and register it in `src/config/gallery.ts` with an `id`, `src`, descriptive `alt`, `caption` and `category`. The homepage preview, gallery grid and lightbox all read from that file.

Each photograph is referenced by exactly one URL so the eagerly-loaded hero is never shared with a lazily-loaded copy of the same file.

**After replacing a photograph**, regenerate the responsive variants and the manifest, then commit both:

```bash
npm run images:optimize
```

This rewrites `public/images/variants/` and `src/generated/image-variants.json`. The build then fails loudly (via `npm run images:verify`) if anything is missing.

**Never** use stock photography, competitor shop photographs, or AI-generated images as shop inventory.

## SEO and local search

- Page-specific titles and meta descriptions via `src/lib/seo.ts` and `src/lib/metadata.ts`
- Open Graph and Twitter card metadata with a real shop photograph
- `ClothingStore` JSON-LD with address, telephone, geo coordinates and the Maps URL
- XML sitemap (`/sitemap.xml`) covering all eight pages
- `robots.txt` pointing at the sitemap
- Semantic HTML, one `<h1>` per page, descriptive image alt text, internal linking
- Canonical URLs derived from `websiteUrl` in `src/config/business.ts`

No fabricated ratings, review counts or `AggregateRating` markup is ever emitted.

## Deployment to GitHub and Vercel

```bash
git init
git add .
git commit -m "Golden gradient digital showroom for Sri Saravana's Textiles"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then in Vercel: **Add New → Project → Import** the repository. Vercel detects Next.js automatically and every route is prerendered statically — no environment variables, no backend and no database are required.

For a custom domain: **Project Settings → Domains → Add**, then follow the DNS instructions and update `websiteUrl` in `src/config/business.ts` before rebuilding.

## Accessibility

Skip-safe semantic landmarks, visible focus rings, `aria-current` on active navigation, `aria-modal` lightbox with Escape / arrow-key support, keyboard-accessible menu and filters, 44px+ touch targets, descriptive alt text, `prefers-reduced-motion` support, and a `<noscript>` fallback so no content is ever hidden when JavaScript is unavailable.
