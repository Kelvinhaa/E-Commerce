# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint via Next.js

npm run test:e2e         # Run Playwright e2e tests (headless)
npm run test:e2e:ui      # Playwright test runner UI
npm run test:e2e:headed  # Run with visible browser

npm run generate:types   # Regenerate src/payload-types.ts from Payload schema
npm run db:fresh         # Drop and re-run all Payload migrations (destructive)
```

E2e tests auto-start the dev server if one isn't running. Run a single spec:
```bash
npx playwright test tests/products.spec.ts
```

## Environment

Copy `.env.example` to `.env` and provide:
- `DATABASE_URI` — MongoDB connection string
- `PAYLOAD_SECRET` — random string for Payload auth

## Architecture

This is **BrewMarket**, a specialty coffee marketplace. The codebase has two co-located apps in one Next.js project:

### Route groups
- `src/app/(app)/` — the public-facing storefront (layout, pages, components)
  - `(home)/` — nested group that wraps pages with the `Navbar`
  - Pages: `/`, `/products`, `/cart`, `/sell`, `/about`, `/contact`, `/pricing`, `/sign-in`, `/sign-up`
- `src/app/(payload)/` — Payload CMS admin panel at `/admin` and REST/GraphQL API at `/api`

### Payload CMS (headless backend)
Config lives in `src/payload.config.ts`. Collections:
- **Users** — auth-enabled; also the `seller` relation on Products
- **Products** — coffee-specific fields: `roastLevel` (light/medium/dark), `origin`, `images[]` (upload relation to Media), `stock`, `seller`
- **Categories** — for product categorisation
- **Media** — upload collection managed by Payload

After any collection field change, run `npm run generate:types` to keep `src/payload-types.ts` in sync.

### Frontend conventions
- UI primitives come from **shadcn/ui** (new-york style). Add new components with `npx shadcn@latest add <component>` — they land in `src/components/ui/`.
- Animations use **framer-motion** with typed `Variants` objects defined at the top of each file.
- Icons are from **lucide-react**.
- Fonts: `--font-body` (Inter, `font-sans`) and `--font-display` (Playfair Display, `font-display` class). Apply the display font for headings via `font-display` Tailwind class.
- Color palette is warm coffee browns: text `#5C4033`, headings `#3C2A21`, muted `#826251`, borders `#EAE0D5`. These are used as inline Tailwind arbitrary values throughout, not CSS variables.
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for all conditional class merging.
