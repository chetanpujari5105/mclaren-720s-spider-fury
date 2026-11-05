# McLaren 720S Spider "Fury" — Scroll Experience

A cinematic product landing page for the McLaren 720S Spider, built with Next.js. A 240-frame image sequence of the car is scrubbed on a canvas as the user scrolls, followed by specs, features and a quote banner.

## Features

- **Scroll-scrubbed car animation**: `FuryScrollCanvas` draws frames from `public/images/fury-sequence/1.jpg … 240.jpg`, driven by Framer Motion's `useScroll` over a locked 600vh section.
- **FuryExperience**: text overlays that animate in step with scroll progress.
- **SpecsGrid**: performance specifications, from `src/data/carData.ts`
- **Features** and **QuoteBanner** sections, plus a `Navbar` and `Footer`

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion, clsx, tailwind-merge

## Project structure

```
src/app/          layout.tsx, page.tsx, globals.css
src/components/   FuryScrollCanvas, FuryExperience, SpecsGrid, Features, ...
src/data/         carData.ts
public/images/fury-sequence/   240 animation frames
```

### Source design assets (repo root)

These are the original materials used while designing the site. The site does not load them at runtime.

- `ChatGPT Image May 9, 2026, 02_37_46 PM.png`: AI reference render
- `Rotate_car_to_back_202605091450.mp4`, `f vif.mp4`: car-rotation videos the frame sequence was made from
- `mclaren-720s-spider-5120x2880-17810.jpg`: 5K wallpaper
- `Screenshot 2026-05-09 at 3.17.57 PM.png`: design screenshot
- `docs/McLaren-720S-Spider-Fury-Build-Guide.pdf`: build guide for this site

> The local `ezgif-87d977c8c7b46072-jpg/` folder is git-ignored on purpose. Its 240 frames are byte-identical to `public/images/fury-sequence/` (only the file names differ), so they are already in this repository.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm start
```

No environment variables are required.
