# jharrisonkeith.com

Harrison Keith's personal site. Static [Astro](https://astro.build) site with Tailwind CSS, hosted on Vercel.

## Pages

| Route | What it is | Edit |
| --- | --- | --- |
| `/` | Name, short intro, LinkedIn, headshot | `src/pages/index.astro` |
| `/path` | My Path: timeline with the year pinned while scrolling | `src/data/milestones.ts` |
| `/brand` | Logo, color, type, materials, topography, icons | `src/pages/brand.astro` |
| (404) | Not-found page | `src/pages/404.astro` |

My Interests is hidden: rename `src/pages/_interests.astro` back to `interests.astro`, restore its nav link in `Header.astro` and remove its redirect.

`vercel.json` redirects old URLs (`/about`, `/projects`, `/connect`, `/career`, `/timeline`).

## Run it

```bash
npm install
npm run dev
npm run build
```

## Design

- Colors: Carbon, Concrete, Chalk, Signal Yellow, Racing Red, Alpine Blue (HK Brand Kit v02, in `brand/` and `tailwind.config.mjs`).
- Stripes: three equal bars, yellow, red, blue, skewed -12 degrees.
- Type: Panchang and General Sans (loaded from Fontshare) and Martian Mono, standing in for the kit's licensed fonts.
- Logo files in `public/brand/` are cut from Harrison's artwork.
- Timeline logos are in `src/assets/marks/`.

## Scripts

- `node scripts/topography.mjs`: redraws the background contour lines.
- `node scripts/og-image.mjs`: redraws the link preview image.
- `node scripts/career-map.mjs`: redraws the state map. The map (`src/components/CareerMap.astro`) is switched off for now.

## Publishing

Work on a branch, review the Vercel preview, then merge into `main`, which deploys to the live site. Contact is LinkedIn only until mail is set up for the domain.

Content rule: never add accomplishments, dates or roles that Harrison hasn't confirmed.
