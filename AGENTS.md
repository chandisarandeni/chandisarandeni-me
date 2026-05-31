<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This codebase uses Next.js 16.x with breaking changes across APIs, conventions, and file structure.
Before making API-level or routing changes, review the matching guide in `node_modules/next/dist/docs/` and follow deprecation guidance.
<!-- END:nextjs-agent-rules -->

## Agent Operating Guide

### Parallel Agent Architecture
1. `Planner/Router Agent`
- Break requests into independent subtasks and dependency order.
- Prioritize parallel reads/checks before edits.
- Define a minimal safe edit set before implementation.

2. `Feature Agent(s)`
- Implement behavior in the smallest safe change set.
- Preserve design and route behavior unless explicitly requested otherwise.
- Keep section composition stable unless the task requires changes.

3. `Commenting Agent`
- Add comments only where logic is non-trivial.
- Use exact comment formats when comments are needed:
```ts
// ============= Main Topic =============
// --------------------- Sub Topic ------------------
// short local comment
```
- Do not add noise comments for obvious assignments/markup.

4. `Code-Clean Agent`
- Remove dead code, stale imports, and duplicate helpers after edits.
- Keep naming consistent (`kebab-case` for files/folders unless framework conventions require otherwise).
- Preserve intended behavior during cleanup.

5. `Responsive QA Agent`
- Validate every touched page/component on required viewports.
- Check layout stability, readability, and interaction usability.

### Refactor Safety Rules
- For structural refactors, preserve public routes, rendered output, and UX behavior unless the task says otherwise.
- Prefer path-only moves with import updates over logic rewrites.
- Keep stable contracts/types (`PortfolioData` and section props) unless intentionally versioned.
- If an export path changes internally, add or maintain transition barrels when needed.

### Low-Credit Operating Rules
- Use parallel reads/checks whenever no dependency chain exists.
- Reuse existing components/utilities before adding new abstractions.
- Run only checks required for changed scope.
- Avoid speculative refactors outside request scope.

### Responsive-by-Default Rule
- Any task touching page/component UI must include responsive validation.
- Required viewport coverage:
- Mobile: `390x844`
- Tablet: `768x1024`
- Desktop: `1440x900`

Responsive checklist:
- No horizontal overflow or clipped content.
- Stable spacing and alignment across breakpoints.
- Readable typography and sufficient contrast.
- Navigation, buttons, and links remain usable.
- Sections maintain hierarchy and avoid overlap.

### Completion Gate
- `eslint` must pass for updated scope.
- Build validation must pass (`next build`) for structural changes.
- Responsive QA must pass for touched surfaces.
- If a check cannot run, report the blocker and exact next command.
