# Sovereign

Open-source personal AI stack that runs on your own hardware. Your data stays yours.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 7
- **Styling**: CSS custom properties (emerald/blue design system, dark theme)
- **Deploy**: Cloudflare Pages via GitHub Actions
- **Testing**: Vitest + React Testing Library
- **Tooling**: pnpm (package manager), mise (runtime versions)

## Commands

```bash
pnpm dev           # Start dev server
pnpm build         # TypeScript check + Vite production build
pnpm test          # Run Vitest
pnpm lint          # ESLint
```

## Conventions

- Use **pnpm** as package manager
- Use **mise** for runtime versions (see `.mise.toml`)
- CSS custom properties for theming (no Tailwind/MUI)
- React Router for navigation
- SVG icons only (no icon libraries)
- 8px grid system
- Mobile-first responsive design

## Design System

| Token | Value |
|-------|-------|
| Primary | `#10B981` (emerald) |
| Accent | `#3B82F6` (electric blue) |
| Background | `#0a0f1a` (deep dark) |
| Surface | `#111827` |
| Text | `#f1f5f9` |
| Muted | `#94a3b8` |
