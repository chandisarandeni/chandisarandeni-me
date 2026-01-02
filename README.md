# Chandisa Randeni Portfolio (React + Vite + TypeScript)

Terminal-inspired single-page portfolio with sticky navigation, reveal-on-scroll cards, and structured data-driven sections.

## Features
- Sticky header with smooth-scroll anchors for hero, log, education, achievements, work, and stack sections
- Hero layout with availability and location badges plus quick links to email, GitHub, and LinkedIn
- Terminal-style intro log paired with an Ops Pulse status card for current focus and availability
- Education timeline and achievements ledger with date chips and subtle accent borders
- Projects grid with status tags and stack badges, plus skills and tools grouped for quick scanning
- Layered gradient and cloud background with scroll-triggered reveal animations in a dark Tailwind theme

## Tech Stack
- React 19, TypeScript, Vite
- Tailwind CSS utilities with a few custom animations
- ESLint + TypeScript build for quality checks

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
5) Lint the project:
   ```bash
   npm run lint
   ```

## Project Structure
- `src/pages/Home.tsx` - page shell, section order, and reveal observer wiring
- `src/components/Header.tsx` - sticky nav and contact calls to action
- `src/components/Hero.tsx` - hero layout, badges, and primary CTAs
- `src/components/TerminalLog.tsx` - terminal-style intro entries
- `src/components/Education.tsx` - education timeline
- `src/components/Achievements.tsx` - achievements list
- `src/components/Projects.tsx` - work/projects grid
- `src/components/Skills.tsx` - skills and tools grid
- `src/components/Footer.tsx` - footer contact links
- `src/utils/data.ts` - single place to edit profile, projects, education, achievements, and skills data
- `src/index.css` - global theme, smooth scrolling, cloud and reveal animations, base styles

## Customizing Content
Edit `src/utils/data.ts`:
- `hero`: name, role, tagline, summary, contact links, profile image
- `terminalEntries`: prompts and outputs for the terminal log
- `projects`: name, description, stack, link, and status labels
- `skills`/`tools`: arrays for stack and tooling
- `education`: titles, places, years, and notes
- `achievements`: title, place, year, and optional note

## Notes
- Smooth scrolling is enabled globally; section anchors include `scroll-mt-28` to offset the sticky nav.
- Text selection and image dragging are disabled in global styles; adjust in `src/index.css` if you want them enabled.
