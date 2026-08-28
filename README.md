# Raccoons at Work Studios

Website for Raccoons at Work Studios.

## Stack
- React + TypeScript
- Vite
- React Router
- styled-components

## Routes
- `/` — Home / showreel tablet
- `/about-us` — About the cooperative
- `/contact` — Contact form

## Run locally
```bash
npm install
npm run dev
```

## Video
Place the final showreel at `public/videos/showreel.mp4` or update the source in `src/pages/Home.tsx`.

## Logo
The supplied logo should be exported into `public/` and can replace the CSS fallback mark in `src/components/Topbar.tsx` once the image asset is committed.

## Contact form
The form UI is implemented. Connect it to the chosen backend/email service before production launch.
