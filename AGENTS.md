<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This codebase uses Next.js 16.x with breaking changes across APIs, conventions, and file structure.
Before making API-level or routing changes, review the matching guide in `node_modules/next/dist/docs/` and follow deprecation guidance.
<!-- END:nextjs-agent-rules -->

# Repository guide

## Stack and commands

- This is a Next.js 16.3 preview App Router application with React 19, strict TypeScript, Tailwind CSS 4, Framer Motion, and Lenis. Use npm and the committed `package-lock.json`.
- `npm run dev` starts the development server; `npm run lint` runs ESLint; `npm run build` runs `next build`; `npm start` serves a build. There is currently no test or typecheck script.
- `tsconfig.json` enables strict checking and maps `@/*` to the repository root. `eslint.config.mjs` uses the Next core web vitals and TypeScript presets.

## Current structure

```text
app/
  layout.tsx                         Global layout, metadata, fonts, scripts, and shared UI
  globals.css                        Tailwind import, design tokens, theme, motion, and layout CSS
  (portfolio)/page.tsx               / route; renders HomePage
  (portfolio)/recognitions/page.tsx  /recognitions route, including gallery interaction
src/
  _pages/home/
    HomePage.tsx                      Home section composition
    components/                       Sections, navigation, theme, carousel, shared section UI
    seeds/                            Portfolio content: JSON plus typed achievements.ts
    assets/                           Imported profile and achievement images
  components/                         Shared layout UI and interaction helpers
public/                               URL-addressable favicons, images, and SVG assets
```

- The `(portfolio)` route group is organizational and does not appear in URLs. Keep `/` and `/recognitions` working during route or file changes.
- `app/layout.tsx` owns the theme initialization script, Google Analytics, skip link, scroll progress, Lenis provider, footer, and hire popup. Keep shared page chrome there.
- `HomePage.tsx` composes navigation, hero, featured contributions, about, skills, projects, GitHub graph, experience, education, achievements, and contact in that order. Change section order only when requested.
- `src/_pages/home/seeds/` is the content source. Most content is JSON; `achievements.ts` is typed because it imports images and is shared by the home page and recognitions route. Update seed shape and consuming component props together. The GitHub graph gets live activity through `react-github-calendar`.
- `section-nav.ts` defines the `PortfolioSectionId` type and derives the navigation registry from `nav-links.json`. Navigation lists selected sections, not every rendered section. Keep listed anchor IDs aligned with rendered section IDs; `HomePage.tsx` controls actual composition order.
- Reuse `SectionShell`, `ContentCard`, `Reveal`, and existing shared components before creating another wrapper. React components use PascalCase filenames; utilities such as `section-nav.ts` use lowercase or kebab-case filenames. Next route files keep framework names such as `page.tsx` and `layout.tsx`.

## Rendering and design conventions

- Keep server components by default. Add `"use client"` only where state, effects, event handlers, browser APIs, or client-only libraries require it. Keep browser globals out of server render paths.
- Use typed props and the existing `@/` import alias. Preserve existing exported types and section props unless a task intentionally changes their contracts.
- Use Tailwind utilities for component layout and `app/globals.css` for shared visual rules. Prefer semantic CSS variables and Tailwind tokens (`app-bg`, `app-fg`, `surface`, `muted-fg`, `accent`, borders) over hard-coded theme colors.
- Light and dark palettes are defined in `app/globals.css` through `data-theme`. `theme.ts` initializes the theme before hydration; `ThemeToggle.tsx` persists `preferred-theme` and synchronizes theme changes. Preserve the `?theme=light|dark` override and the `?qa=1` / `?motion=off` motion controls used for deterministic captures.
- Respect reduced-motion behavior and the existing motion tokens when changing animations. Preserve keyboard access, focus indicators, the skip link, and usable touch targets.
- Use `next/image` for portfolio imagery. Local imported images live under `src/_pages/home/assets/`; URL-addressable assets live under `public/`. `next.config.ts` currently allows `picsum.photos` as the only remote image host; update its `remotePatterns` when a new remote image source is required.
- Add comments where logic is non-trivial, especially state coordination, effects, fallbacks, and transformations. Use these exact styles when comments are needed; do not narrate obvious assignments or markup:

```ts
// ============= Main Topic =============
// --------------------- Sub Topic ------------------
// short local comment
```

## Change workflow

1. Plan dependencies and identify affected routes, seeds, components, and shared styles before editing. Use parallel agents for independent reads or checks when that helps; keep implementation, commenting, cleanup, and responsive QA responsibilities clear. Keep the edit set focused and preserve visible behavior unless the request changes it.
2. For structural refactors, prefer path-only moves and import updates. Preserve routes, rendered output, UX behavior, and stable public types; keep a transition export when callers still use an old internal path.
3. Remove stale imports, dead code introduced by the change, and duplicate helpers without expanding into unrelated refactors.
4. Run `npm run lint` for code changes. Run `npm run build` for structural, routing, config, or API changes. There is no test suite configured; add focused verification only when the change needs it. Avoid speculative checks and refactors outside the changed scope.
5. For any page or component UI change, validate at `390x844`, `768x1024`, and `1440x900`. Check horizontal overflow, clipping, spacing, contrast, readable text, interaction usability, and section overlap. Check both themes and reduced motion when affected.
6. If a required check cannot run, report the blocker and the exact command needed to complete it.
