# Chandisa Randeni · Portfolio (React + Vite + TypeScript)

Modern, terminal-inspired portfolio site with smooth-scrolling navigation, animated cards, and structured content for a software developer.

## Features
- Sticky top navigation with smooth scroll anchors (`Home`, `Log`, `Education`, `Work`, `Stack`)
- Hero with dual-column layout, availability and location badges, focus areas, and collaboration signals
- Sections for terminal-style intro log, education timeline, projects, and skills/tools
- Subtle “cloud” background layer plus reveal-on-scroll animations for cards
- Dark, developer-first theme using Tailwind CSS utilities

## Tech Stack
- React 19, TypeScript, Vite
- Tailwind CSS (utility classes + a few custom CSS animations)

## Getting Started
1) Install dependencies:
   ```bash
   npm install
   ```
2) Run the dev server:
   ```bash
   npm run dev
   ```
3) Production build:
   ```bash
   npm run build
   ```
4) Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure
- `src/pages/Home.tsx` — page shell, layout order, and section composition
- `src/components/` — hero, header/nav, projects, skills, education, terminal log, footer
- `src/utils/data.ts` — single place to edit profile info, projects, skills, education, and social links
- `src/index.css` — global theme, smooth scrolling, cloud/reveal animations, base styles

## Customizing Content
Update `src/utils/data.ts`:
- `hero`: name, role, tagline, summary, contact links, profile image
- `projects`: name, description, stack, link, status
- `skills`/`tools`: edit arrays to match your stack
- `education`: titles, places, years, and notes (bulleted automatically)

## Notes
- Smooth scrolling is enabled globally; section anchors include `scroll-mt-28` to offset the sticky nav.
- Text selection and image dragging are disabled in global styles; adjust in `src/index.css` if you want them enabled.
