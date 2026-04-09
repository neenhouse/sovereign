# Sovereign

Own your context in a world of commoditized AI.

Sovereign is an open-source personal AI platform that separates your context from the model. Your accumulated intelligence — documents, habits, preferences, communication style — stays under your control permanently. Models are swappable commodities.

## Why

Every AI assistant you use builds an understanding of you: your work patterns, your writing style, the connections between your documents. Over months, this becomes a second brain.

Today, that second brain belongs to someone else. When you stop paying, the accumulated intelligence disappears. When they change terms, your data serves their purposes.

Sovereign inverts this. You own your context graph. Models plug in and out.

## Quick Start

```bash
# Prerequisites: Node.js 24+, pnpm
git clone https://github.com/your-org/sovereign.git
cd sovereign
pnpm install
pnpm dev
```

## Commands

```bash
pnpm dev           # Start dev server
pnpm build         # TypeScript check + Vite production build
pnpm test          # Run tests (Vitest)
pnpm lint          # Lint (ESLint)
```

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 8
- **Styling**: CSS custom properties (emerald/blue design system, dark theme)
- **Testing**: Vitest + React Testing Library
- **Deploy**: Cloudflare Pages via GitHub Actions
- **Tooling**: pnpm, mise (runtime versions)

## Project Structure

```
sovereign/
  docs/
    vision.md          # Strategic vision, business model, moat analysis
    prd.md             # Product requirements, GTM, feature phases
  src/
    pages/
      LandingPage.tsx  # Context-ownership landing page
      DashboardPage.tsx # AI dashboard demo (chat, knowledge, models, privacy)
    App.tsx            # Router and layout
  CLAUDE.md            # Development conventions
```

## Vision

As AI models commoditize, value migrates from the model to the context — the persistent understanding of YOU. Sovereign's thesis: separate the context from the model. You own your context graph permanently, and the model is a replaceable commodity.

Read the full vision: [docs/vision.md](docs/vision.md)

## Roadmap

**Phase 1 (Current):** Landing page + interactive dashboard demo. Establishing the narrative.

**Phase 2:** Core platform — context graph engine, model orchestration, integration framework.

**Phase 3:** Sovereign Cloud (managed hosting) + community marketplace.

See the full product requirements: [docs/prd.md](docs/prd.md)

## Contributing

Sovereign is early-stage and open to contributors. The best way to start:

1. Read [docs/vision.md](docs/vision.md) to understand the thesis
2. Read [docs/prd.md](docs/prd.md) to understand what we're building
3. Check open issues for good first contributions
4. Run `pnpm dev` and explore the codebase

## License

MIT
