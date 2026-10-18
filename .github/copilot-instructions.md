<!-- Copilot instructions for AI coding agents working on this repo -->
# Repository quick‑start for AI coding agents

Purpose: help AI agents be productive quickly in this small Vite + React app.

Quick commands
- Dev server: `npm run dev` (uses `vite`). See [package.json](package.json#L1).
- Build: `npm run build` (Vite build).
- Preview production bundle: `npm run preview`.
- Lint: `npm run lint` (uses `oxlint`).

Big picture (what matters)
- This is a single‑page Vite React project. Entry point: [src/main.jsx](src/main.jsx#L1).
- Main UI lives in [src/App.jsx](src/App.jsx#L1). Reusable UI is under [src/components/](src/components/).
- Static public assets live in `public/` and compile‑time assets under `src/assets/` (imported directly).
- No backend or API integrations in the repository — treat this as a static frontend unless additional services appear.

Project conventions and discoverable patterns
- Components are plain React function components (no TypeScript typings enforced here).
- CSS is imported directly (global/component CSS files): examples: [src/App.css](src/App.css#L1) and [src/components/Producto.css](src/components/Producto.css#L1).
- File naming: components use PascalCase names (e.g., `Producto.jsx`) but may contain localized names — expect Spanish identifiers.
- Linting uses `oxlint` via `npm run lint`. Do not assume ESLint is present.

Integration points & workflow notes
- Hot Module Replacement (HMR) via Vite; developers rely on quick local feedback (`npm run dev`).
- When adding images or static assets, prefer placing them in `src/assets/` and importing them (e.g., `import heroImg from './assets/hero.png'` in [src/App.jsx](src/App.jsx#L1)).

Guidance for code edits
- Preserve Vite import styles and avoid changing `type: "module"` in `package.json` unless necessary.
- For UI changes, update component JSX and corresponding CSS files in `src/components/`.
- If you add new packages, update `package.json` and keep changes minimal; prefer devDependencies for build tools.

Examples (common tasks)
- Implement a new component scaffold:

  1. Create `src/components/MyComponent.jsx` exporting a default function component.
  2. Add `src/components/MyComponent.css` and import it in the component.
  3. Import and use the component in `src/App.jsx`.

- Fixing missing component: `src/components/Producto.jsx` currently is empty — implement the component and import `src/components/Producto.css`.

What not to assume
- There are no test runners configured — do not add tests without coordinating.
- There is no centralized state management (no Redux/MobX) — keep changes local unless introducing a clear need.

Where to look first
- Entry: [src/main.jsx](src/main.jsx#L1)
- App shell: [src/App.jsx](src/App.jsx#L1)
- Components: [src/components/](src/components/)
- Build scripts and lint: [package.json](package.json#L1)

If anything is ambiguous, ask the human maintainer before adding infrastructure (tests, CI, or new build tools).
