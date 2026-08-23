# Shree Sangmeshwar — Painting Company Website (English / Marathi)

A responsive, animated React site inspired by the reference "Shree Sangmeshwar" layout —
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
