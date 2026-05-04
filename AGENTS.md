# AGENTS.md — digital-collections

This is the NYPL Digital Collections frontend — a Next.js (TypeScript) app.
For pipeline architecture, triage patterns, and cross-repo context, see the
workspace-level `AGENTS.md` and `dapa-dev-docs/docs/`.

## Design system (Reservoir)

Digital Collections uses the **NYPL Reservoir Design System**:

- **Package:** `@nypl/design-system-react-components`
- **Pinned version:** `4.0.2` (see `package.json`)
- **GitHub:** https://github.com/NYPL/nypl-design-system
- **Storybook / component docs:** https://nypl.github.io/nypl-design-system/reservoir/v4/

When proposing or reviewing UI changes:

- **Prefer DS components** over custom HTML or third-party components. Most
  common UI primitives (buttons, links, icons, banners, text, headings, form
  elements, layout boxes) are available in Reservoir.
- **Check Storybook for props.** The v3 Storybook is the authoritative
  reference for available props, variants, and usage patterns at this version.
- **Import from the package root:** `import { ... } from "@nypl/design-system-react-components"`.
  Deep imports (e.g. `dist/src/...`) are used sparingly for types; avoid them
  for component usage.
- When debugging a visual or layout bug, check whether the DS component itself
  has a relevant prop (e.g. `size`, `isFullWidth`, `noSpace`) before adding
  custom CSS.
- When suggesting a new component, note if it requires a DS version bump and
  flag that for human review — version upgrades to Reservoir can have broad
  visual impact.

## Architecture

### Component rendering model

Nearly all components under `app/src/components/` are `"use client"` components.
Server-side data fetching happens **only at the page level** (`app/*/page.tsx`).
Do not move data fetching into shared components, and do not make page-level
components client components to pass fetched data down — keep the server/client
boundary at the page.

### Data fetching

All API calls go through the static client classes in
`app/src/utils/apiClients/apiClients.tsx`:

- **`CollectionsApi`** — Collections API (search, items, collections, manifests)
- **`RepoApi`** — legacy Repo API (featured items, item totals)

Both delegate to the `fetchApi()` wrapper (`app/src/utils/fetchApi/fetchApi.ts`),
which handles auth headers, a 10-second timeout, and error logging. Do not add
raw `fetch()` calls elsewhere — use these classes. Auth tokens and base URLs come
from `appConfig.ts` and environment variables (see `ENVIRONMENTVARS.md`).

### State management

URL search params are the **source of truth for all search/filter/page state**.
React Context (`SearchProvider`, `CanvasProvider`, `FeedbackProvider`) wraps
manager classes around URL state — it does not duplicate it in React state.
When debugging or proposing changes to search/filter behavior:

- Read state from `searchParams` (server components) or `useSearchParams()` (client)
- Write state via `router.push()` with an updated query string
- Do not reach for `useState` to track query values

### Data models

`app/src/models/item.ts` (`ItemModel`) and the corresponding collection model
normalize raw API responses into shapes consumed by components. Use these models
rather than accessing raw API response fields directly in components — they are
the decoupling layer between API shape and UI.

### Middleware

`middleware.ts` handles slug-to-UUID rewrites for `/collections` and `/divisions`
routes, and transforms legacy query params (e.g. `collection_keywords` → `q`).
These rewrites are SEO- and backward-compatibility-critical. Test middleware
changes carefully and flag them for human review.

## Testing conventions

- **Mock `fetchApi`, not the API client classes.** Tests import and mock
  `app/src/utils/fetchApi/fetchApi.ts` directly, then assert on the URLs and
  options passed to it.
- **Mock `next/navigation`** with `jest.mock("next/navigation")` for any component
  that uses `useRouter()` or `usePathname()`.
- **Mock data** lives in `__tests__/__mocks__/data/`. Add new fixtures there.
- **Accessibility tests** use `jest-axe` (`toHaveNoViolations()`). Include an
  a11y assertion in every new component test.

## Logging

The logger (`logger.js`) uses **Winston** in local/AWS environments and falls back
to `console` when `VERCEL=1`. Tests mock `console.error`/`console.warn` to suppress
expected noise — do not suppress unexpected errors in test setup.

## Build and test

```
npm run dev          # local dev server
npm run test         # unit tests (Jest)
npm run test:all     # full test suite
npm run lint         # ESLint + Prettier
```

## Key directories

- `app/` — Next.js App Router pages and layouts
- `app/src/components/` — shared UI components (most import from DS)
- `app/src/utils/` — helpers, data-fetching utilities, API clients
- `app/src/models/` — `ItemModel`, `CollectionModel` — normalize API responses
- `app/src/context/` — `SearchProvider`, `CanvasProvider`, `FeedbackProvider`
- `app/src/hooks/` — custom hooks (breakpoints, header state, UV integration)
- `__tests__/` — unit and integration tests

## Sensitive areas

- Any change to shared layout components (`pageLayout`, `header`) affects
  every page — flag for extra review.
- `middleware.ts` — slug/UUID rewrites and legacy param transforms; SEO impact.
- `appConfig.ts` and `ENVIRONMENTVARS.md` — environment configuration.
