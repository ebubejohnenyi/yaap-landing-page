# Yaap Landing Page — Build Plan

Stack: **Vite + React + Tailwind CSS v4**, icons via `lucide-react`.
Project: `~/yaap-landing-page`. Run with `npm run dev`.

Structure:
```
src/
  components/ui/        Container, Button
  components/sections/  one file per section (below)
  data/content.js       all copy/content in one place — edit here first
  App.jsx                composes sections in order
```

Status legend: ✅ scaffolded with real layout & interaction · 🖼 needs real
asset (photo/illustration) to replace the icon/placeholder · ✍️ needs real copy.

## 1. Announcement bar — ✅ / ✍️
Dismissible top strip. `AnnouncementBar.jsx`. Edit text in
`data/content.js → nav.announcement`.

## 2. Navbar — ✅ / ✍️
Logo, 4 nav links, Login + Sign Up. Responsive: collapses to a hamburger
menu under `md`. `Navbar.jsx`.

## 3. Hero — ✅ / 🖼 / ✍️
Two-column: headline (with italic serif accent word) + body + CTA + star
rating on the left; a 2×2 tile grid on the right (phone mockup, currency
count, active users, savings figure). Currently the phone tile and avatar
tile are icon placeholders — swap in a real phone-app screenshot and user
avatar photos. `Hero.jsx`.

## 4. Logo cloud — ✅ / 🖼
Row of partner/press logos. Currently rendered as text wordmarks — replace
with actual SVG logos (Loom, HubSpot, OpenAI, Raycast, Zenefits, or your
own set) once you have permission/assets to use them. `LogoCloud.jsx`.

## 5. About — "One app for all your money things" — ✅ / 🖼
Two feature cards: dark "Grow savings faster" bar-chart card, light "Send
across the global" card with a globe + transfer chips. Chart is CSS bars,
not a real chart lib — fine for a static marketing figure. Could later
swap the globe icon for an actual world-map/dotted-globe illustration.
`About.jsx`.

## 6. Values — "Make your spend, Well-spent" — ✅ / ✍️
Three cards (Transparency, Creative expansion, Private Credit Investments),
last one highlighted in cream. Copy is placeholder — needs real value-prop
text. `Values.jsx`.

## 7. Stats banner — ✅ / 🖼
Dark full-bleed banner, two big stats + headline. Uses a CSS
gradient + subtle diagonal sheen as a stand-in for the silk/fabric
texture photo in the reference — drop a real texture image into
`background-image` once you have one licensed. `StatsBanner.jsx`.

## 8. FAQ — ✅ / ✍️
Accordion, one item open by default, Plus/X toggle icon. Content in
`data/content.js → faq.items` — replace with your actual support answers.
`FAQ.jsx`.

## 9. Closing CTA — ✅ / 🖼
Repeats the hero headline treatment in a dark rounded banner with a coin
icon in place of the reference's cash/coin photo. `CTABanner.jsx`.

## 10. Footer — ✅ / ✍️
4-column link grid + brand + address + legal links. Links currently point
to `#` — wire up real routes once pages exist. `Footer.jsx`.

---

## What's genuinely done
Every section above is implemented, responsive, and composed in
`App.jsx` in the same order as the reference. It builds clean
(`npm run build`) and was verified in a headless browser with no console
errors — screenshot matches the reference structure section-for-section.

## What's left (in priority order)
1. **Real copy** — replace placeholder microcopy (Values card bodies, FAQ
   answers, stat labels) with actual product content.
2. **Real assets** — phone screenshot, partner logos, user avatars, the
   silk-texture banner background, coin/cash photography.
3. **Brand tokens** — colors/fonts in `src/index.css` (`@theme` block) are
   a reasonable guess at the reference's deep-green + cream palette and an
   Instrument Serif italic accent; swap for your actual brand tokens.
4. **Links & routing** — nav links, footer links, and CTAs all currently
   point to `#`.
5. **SEO/meta** — `index.html` has a placeholder title; add description,
   OG tags, favicon.
