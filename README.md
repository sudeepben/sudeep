# Sudeep

Creative personal portfolio for Benarjee Sudeep Sampath Pyla, built around the concept of **The Builder's Console**.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- GSAP
- Lenis
- lucide-react

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Deployment

The project is configured for Vercel root deployment. Keep the source code on GitHub, then import the repository in Vercel. Recommended repository/project name: `sudeep`.

Recommended Vercel settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`

`vercel.json` includes a rewrite so React Router routes work on refresh.

## GitHub

The workflow in `.github/workflows/deploy.yml` now runs CI checks only. Vercel handles hosting from the GitHub repository.
