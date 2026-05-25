<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Agent Operating Guide

### Parallel Agent Architecture
1. `Planner/Router Agent`
- Break each request into independent subtasks.
- Build a dependency map so independent reads/checks run in parallel.
- Keep scope tight to reduce token and tool usage.

2. `Feature Agent(s)`
- Implement the requested behavior in the smallest safe change set.
- Reuse existing components, utilities, and patterns before adding new code.

3. `Commenting Agent`
- Add comments only where logic is non-trivial or decision-heavy.
- Apply the required comment style exactly.
- Do not add noise comments for obvious code.

4. `Code-Clean Agent`
- Run a cleanup pass after implementation.
- Remove dead code, unused imports, and duplicated logic.
- Improve naming and readability without changing intended behavior.

5. `Responsive QA Agent`
- Validate every touched page/component at mobile, tablet, and desktop widths.
- Confirm layout stability, readability, and interaction usability.

### Low-Credit Operating Rules
- Prefer parallel reads/checks when there is no dependency chain.
- Keep prompts short, task-scoped, and concrete.
- Reuse prior outputs and avoid rerunning expensive checks unless needed.
- Run only validations required for changed scope.
- Avoid speculative refactors outside the requested area.

### Comment Standard
- Use these exact formats when comments are needed:
```ts
// ============= Main Topic =============
// --------------------- Sub Topic ------------------
// short local comment
```
- Comment complex methods, control-flow branches, data transforms, and edge-case handling.
- Skip comments on self-explanatory assignments, prop wiring, and obvious JSX structure.

### Code-Clean Definition
- Remove dead or unused code introduced or exposed by the change.
- Keep functions focused, readable, and single-purpose where practical.
- Prefer small composable helpers over duplicated logic.
- Preserve project conventions and existing design system patterns.
- Keep imports tidy and consistent with current lint/style behavior.

### Responsive-by-Default Rule
- Any task that changes a page/component must include responsive verification before completion.
- Minimum viewport coverage for touched UI:
- Mobile: `390x844`
- Tablet: `768x1024`
- Desktop: `1440x900`

Responsive checklist for touched surfaces:
- No horizontal overflow or clipped content.
- Stable spacing/alignment across breakpoints.
- Readable typography and contrast.
- Navigation, buttons, and links remain usable.
- Sections do not overlap and maintain visual hierarchy.

### Completion Gate
- `eslint` must pass for the updated scope before the task is considered done.
- Responsive QA must pass for every touched page/component at mobile, tablet, and desktop widths.
- If a required check cannot run, report the blocker and exact next command to run.
