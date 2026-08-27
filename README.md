# Paintwell — Painting Company Website (English / Marathi)

A responsive, animated React site inspired by the reference "Paintwell" layout —
illustrated character, cream/orange/yellow palette, floating stat badges —
with a language toggle: **English by default, Marathi as an option**.

## Run it locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host.

## Routing

The site uses **react-router-dom**. `App.jsx` renders `Navbar` and `Footer`
as a persistent layout, with `<Routes>` swapping the page content:

- `/` → `src/pages/Home.jsx` (all the homepage sections: Hero, About,
  Services, Testimonials, FAQ, ConsultCTA, Blog, Contact)
- `/services/residential-project` → `src/pages/ResidentialProject.jsx`, a
  dedicated detail page

Clicking the **"Residential Project"** card in the Services section
navigates to that page (`Services.jsx` → `ServiceCard` calls
`useNavigate()` on click, using the `slug` field on the service item).

### Adding a page for another service

Each service item in `content.js` already has a `slug` (`commercial-project`,
`wallpapering`, `restoration-project`) — only `residential-project` has a
page built for it so far. To add another:

1. Duplicate `src/pages/ResidentialProject.jsx` (e.g. `CommercialProject.jsx`)
   and adjust its content source.
2. Add matching `commercialProject` copy blocks to both `en` and `mr` in
   `content.js` (same pattern as `residentialProject`).
3. Register the route in `App.jsx`:
   ```jsx
   <Route path="/services/commercial-project" element={<CommercialProject />} />
   ```

The card's `onClick` already builds the path from the item's `slug`, so no
change is needed in `Services.jsx` — it'll just work once the route exists.

### Deploying with routing

Because this is client-side routing, your static host needs to serve
`index.html` for unknown paths (so a direct link or refresh on
`/services/residential-project` doesn't 404). This repo includes:
- `public/_redirects` for Netlify
- `vercel.json` for Vercel

Other hosts (S3/CloudFront, GitHub Pages, nginx) need an equivalent
"fallback to index.html" rule — check your host's docs for SPA hosting.

## Language toggle

Click the **EN / मराठी** pill in the navbar (top right) to switch the entire
site between English and Marathi instantly — no page reload. English loads
by default for every visitor.

- `src/data/content.js` — a `translations` object with two top-level keys,
  `en` and `mr`, each holding the **same structure**: nav labels, hero copy,
  service descriptions, testimonials, FAQ, blog posts, form labels, footer —
  everything. To edit wording, find the key under the language you want to
  change.
- `src/context/LanguageContext.jsx` — a small React context (`useLanguage()`)
  that holds the current language and exposes `t` (the active translation
  object) to every component, plus `toggleLang()` to switch it.
- Every section component reads its copy through `useLanguage()` instead of
  a static import, so switching language re-renders the whole page with the
  new text immediately.

## Where everything else lives

- `src/components/Painter.jsx` — the illustrated painter character (an
  original flat-SVG illustration, not a copy of the reference image), with
  five pose variants: `roller`, `tipHat`, `shout`, `thinking`, `pointUp`.
- `src/components/IllustrationBlob.jsx` — wraps the character in the yellow
  circular blob with the small pink/blue/green accent dashes seen throughout
  the reference design.
- `src/components/StatBadge.jsx` — the floating orange stat cards over the
  hero illustration ("369 Projects Completed", "7+ Years of Experience").
- Each section (`Hero`, `About`, `Services`, `Testimonials`, `FAQ`,
  `ConsultCTA`, `Blog`, `Contact`, `Footer`) is its own file in
  `src/components/`.

## Fonts

Headings use **Baloo 2** and body text uses **Mukta** — both support Latin
*and* Devanagari script, so the same typefaces render correctly in either
language without swapping fonts on toggle.

## Customizing

- **Colors**: `tailwind.config.js` — `orange`, `hathat` (yellow), `cream`,
  `pink`, `skyline` (blue), `leaf` (green).
- **Add a third language**: add a new key (e.g. `hi` for Hindi) to the
  `translations` object in `content.js` with the same shape as `en`/`mr`,
  then extend `toggleLang` in `LanguageContext.jsx` to cycle through it.
- **Photos instead of illustrations**: the design currently uses the hand-
  built `Painter` SVG throughout instead of photography, so there are no
  external image dependencies. Swap `IllustrationBlob` for real project or
  team photos whenever you have them.
- **Contact form**: `Contact.jsx`'s `handleSubmit` currently only shows a
  success message. Wire it to your email service or backend when ready.

## Tech

React 18 + Vite 5, Tailwind CSS 3, Framer Motion 11, lucide-react icons.
