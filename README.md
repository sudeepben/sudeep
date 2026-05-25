# BSSP / Sudeep Builds

Creative personal portfolio for Benarjee Sudeep Sampath Pyla, built around the concept of **The Builder's Console**.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
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

## GitHub Pages

The Vite base path is configured for:

```ts
base: "/sudeep-builds/"
```

Push to `main` on `sudeepben/sudeep-builds` and the workflow in `.github/workflows/deploy.yml` will build and deploy the site to GitHub Pages.
