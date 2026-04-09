# Sovereign Strategy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update vision docs, PRD, and landing page copy to reflect the deepened strategic positioning from the strategy spec.

**Architecture:** Content-only changes across 4 files. Vision doc gets a full rewrite. PRD gets updated positioning and priorities. Landing page gets evolved copy across hero, features, steps, stats, and CTA. Tests updated to match.

**Tech Stack:** React 19, TypeScript, Vitest + React Testing Library

---

### Task 1: Rewrite docs/vision.md

**Files:**
- Modify: `docs/vision.md`

- [ ] **Step 1: Replace vision.md with the deepened strategic vision**

```markdown
# Sovereign — Vision

## North Star

Own your context in a world of commoditized AI. Your data, your intelligence, your choice of model.

## The Thesis

As AI models commoditize, value migrates from the model to the context — the persistent, personal understanding of YOUR work patterns, communication style, documents, and daily life. Today, cloud providers own both the model and your context. Sovereign inverts this: you own your context permanently, and the model is a replaceable commodity.

## The Problem

Every major AI assistant sends your most intimate data to corporate servers. Your conversations, habits, preferences, and daily routines fuel models you never consented to train. But the deeper problem isn't privacy alone — it's ownership. When you stop paying, your context disappears. When they change terms, your data is theirs. You're renting access to your own intelligence.

## The Solution

Sovereign is an open-source personal AI platform that keeps your context graph — the accumulated understanding of you — under your control. Run it on your own hardware or use Sovereign Cloud with end-to-end encryption. Swap models freely. Your context accumulates over time, making your AI more valuable the longer you use it — and it's always yours.

## Principles

1. **Your Context Stays Yours** — The personal knowledge graph you build is portable, auditable, and permanently under your control.
2. **Local-First, Cloud-Optional** — Full functionality on your hardware. Cloud features are available, encrypted, and you hold the only key. Zero required cloud dependencies.
3. **Models Are Commodities** — Swap, upgrade, or self-host any model. No vendor lock-in to a single AI provider.
4. **Transparent by Default** — Every model, every inference, every decision is auditable. No black boxes.
5. **Community-Driven Intelligence** — A marketplace of open-source models and integrations contributed by the community.
6. **Human-First AI** — Technology that amplifies human capability without replacing human agency.

## Who It's For

**Primary: Developers** — Full control over their AI stack, contribute to and build on the platform.

**Secondary: Privacy-conscious professionals** — Lawyers, doctors, journalists, and others who handle sensitive data and cannot risk cloud exposure.

**Tertiary: Technical families** — Smart home AI without corporate surveillance, managed via Sovereign Cloud.

## Business Model

| Tier | Price | Value |
|------|-------|-------|
| Core (OSS) | Free forever | Full platform, local models, self-hosted |
| Sovereign Cloud | ~$9/mo | Managed hosting, encrypted backup, mobile access |
| Sovereign Pro | ~$29/mo | Hybrid cloud routing, advanced orchestration, team sharing |
| Marketplace | 70/30 split | Community model adapters, integrations, skill packs |

## Moat

The moat is not privacy (Apple already markets that), not open-source (necessary but not sufficient), and not the models (commoditizing fast). The moat is the **personal context graph** — the accumulated intelligence about you that deepens every day. Raw data is always exportable. But the learned associations, tuned workflows, and trained communication style create organic switching costs through genuine value, not lock-in.

The community marketplace adds network effects: more adapters attract more users attract more contributors.

## Competitive Positioning

| Competitor | What They Do | Sovereign's Edge |
|------------|-------------|------------------|
| Ollama | Local model runner | No context graph, no integrations. Sovereign uses Ollama as a component |
| Jan.ai | Local AI chat app | Chat-only, no platform ambitions |
| OpenWebUI | Self-hosted chat UI | UI layer only, no context persistence |
| Apple Intelligence | On-device AI | Closed ecosystem, Apple-only, limited model choice |
| Home Assistant | Smart home automation | Different domain. Potential integration partner |

**Key differentiation:** No competitor builds a persistent personal context graph with a model-agnostic orchestration layer. They solve pieces. Sovereign is the integration.
```

- [ ] **Step 2: Verify the file reads correctly**

Run: `head -5 docs/vision.md`
Expected: `# Sovereign — Vision` header with new North Star line.

- [ ] **Step 3: Commit**

```bash
git add docs/vision.md
git commit -m "docs: rewrite vision with context-ownership thesis, business model, and moat analysis"
```

---

### Task 2: Update docs/prd.md

**Files:**
- Modify: `docs/prd.md`

- [ ] **Step 1: Replace prd.md with updated product requirements**

```markdown
# Sovereign — Product Requirements Document

## Overview

Sovereign is a web-based dashboard and marketing site for an open-source personal AI platform. The product consists of a public landing page that communicates the context-ownership thesis and an interactive dashboard that demonstrates the platform's capabilities.

## Positioning

Sovereign's landing page communicates a specific strategic narrative: as AI models commoditize, value migrates to context — the persistent understanding of you. Sovereign lets you own that context permanently while treating models as swappable commodities.

**Primary audience:** Developers who want full control of their AI stack.
**Secondary audience:** Privacy-conscious professionals handling sensitive data.

## Features

### 1. Landing Page
- Hero section with context-ownership messaging
- Gradient text effects with emerald-to-blue palette
- Feature cards: Context Ownership, Local-First, Model Freedom, Community Ecosystem
- How-it-works section (3-step flow)
- Social proof / stats section
- Footer with navigation and links

### 2. AI Dashboard — Chat Interface
- Simulated local AI chat with streaming-style responses
- Message history persisted to localStorage
- System status indicator (model loaded, inference speed)
- Dark layered command-center aesthetic

### 3. Privacy Scanner
- Visual privacy score widget (0-100)
- Animated score gauge
- Breakdown of privacy metrics (data locality, encryption, telemetry)
- Comparison with cloud alternatives

### 4. Knowledge Base Manager
- Sidebar listing indexed documents
- Upload simulation for new documents
- Search within knowledge base
- Document metadata display

### 5. Model Marketplace Browser
- Grid of available open-source models
- Model cards with size, performance, and category
- Filter by task type (chat, code, vision, audio)
- Install/download simulation

### 6. Setup Wizard
- Step-by-step onboarding flow
- Hardware requirements check
- Model selection
- Configuration summary

## Technical Constraints

- React 19 + TypeScript
- CSS custom properties only (no CSS frameworks)
- React Router for navigation
- localStorage for state persistence
- SVG icons only
- 8px grid system
- Mobile-responsive
- Dark theme with emerald (#10B981) and electric blue (#3B82F6) accents
```

- [ ] **Step 2: Commit**

```bash
git add docs/prd.md
git commit -m "docs: update PRD with context-ownership positioning and audience priorities"
```

---

### Task 3: Update landing page tests (TDD — tests first)

**Files:**
- Modify: `src/pages/LandingPage.test.tsx`

- [ ] **Step 1: Update tests to expect the new copy**

The test file should be updated to match the new landing page content. Key changes:
- Feature card titles change from `Privacy-First`, `Offline Capable`, `Open Source`, `Community Models` to `Your Context, Forever`, `Local-First`, `Any Model, Anytime`, `Community Ecosystem`
- Section heading changes from `Built for the privacy-conscious` to `Own your AI intelligence`
- How-it-works step titles change
- Stats values change

Replace the full test file:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  )
}

describe('LandingPage', () => {
  it('renders the hero heading', () => {
    renderWithRouter()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Your AI.')
    expect(heading).toHaveTextContent('Your Context.')
    expect(heading).toHaveTextContent('Your Future.')
  })

  it('renders all four feature cards', () => {
    renderWithRouter()
    expect(screen.getByText('Your Context, Forever')).toBeInTheDocument()
    expect(screen.getByText('Local-First')).toBeInTheDocument()
    expect(screen.getByText('Any Model, Anytime')).toBeInTheDocument()
    expect(screen.getByText('Community Ecosystem')).toBeInTheDocument()
  })

  it('renders the how-it-works section with three steps', () => {
    renderWithRouter()
    expect(screen.getByText('Install Sovereign')).toBeInTheDocument()
    expect(screen.getByText('Build Your Context')).toBeInTheDocument()
    expect(screen.getByText('Own Your Intelligence')).toBeInTheDocument()
  })

  it('renders social proof stats', () => {
    renderWithRouter()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Context Ownership')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
  })

  it('renders the install command', () => {
    renderWithRouter()
    expect(screen.getByText('curl -sSL https://sovereign.ai/install | sh')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    renderWithRouter()
    expect(screen.getByText('Own your AI intelligence')).toBeInTheDocument()
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    renderWithRouter()
    expect(screen.getByText(/2026 Sovereign/)).toBeInTheDocument()
  })

  it('has accessible section headings', () => {
    renderWithRouter()
    expect(screen.getByText('The platform for context ownership')).toBeInTheDocument()
    expect(screen.getByText('Up and running in minutes')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests — expect failures**

Run: `pnpm test -- --run`
Expected: Multiple failures — landing page renders old copy, tests expect new copy.

- [ ] **Step 3: Commit failing tests**

```bash
git add src/pages/LandingPage.test.tsx
git commit -m "test: update landing page tests for context-ownership messaging (red)"
```

---

### Task 4: Update landing page copy

**Files:**
- Modify: `src/pages/LandingPage.tsx`

- [ ] **Step 1: Update the features array**

Replace the `features` array (lines 55-76) with:

```tsx
const features = [
  {
    icon: <ShieldIcon />,
    title: 'Your Context, Forever',
    description: 'Your personal knowledge graph — documents, habits, preferences — stays under your control and grows more valuable over time.',
  },
  {
    icon: <WifiOffIcon />,
    title: 'Local-First',
    description: 'Full AI on your hardware, no internet required. Cloud features are optional, encrypted, and you hold the only key.',
  },
  {
    icon: <CodeIcon />,
    title: 'Any Model, Anytime',
    description: 'Swap models freely as they improve. No vendor lock-in. Open-source, auditable, and always your choice.',
  },
  {
    icon: <UsersIcon />,
    title: 'Community Ecosystem',
    description: 'A marketplace of community-contributed models, integrations, and skill packs. The platform gets better as the community grows.',
  },
]
```

- [ ] **Step 2: Update the steps array**

Replace the `steps` array (lines 78-94) with:

```tsx
const steps = [
  {
    number: '01',
    title: 'Install Sovereign',
    description: 'One command to set up on any Linux machine, Raspberry Pi, or home server. Or start with Sovereign Cloud.',
  },
  {
    number: '02',
    title: 'Build Your Context',
    description: 'Index your documents, connect your calendar, and let Sovereign learn your patterns — all locally.',
  },
  {
    number: '03',
    title: 'Own Your Intelligence',
    description: 'Your AI gets smarter every day. Swap models anytime. Your accumulated context is always yours.',
  },
]
```

- [ ] **Step 3: Update the stats array**

Replace the `stats` array (lines 96-101) with:

```tsx
const stats = [
  { value: '100%', label: 'Context Ownership' },
  { value: '50+', label: 'Open Models' },
  { value: '0', label: 'Cloud Lock-in' },
  { value: '<2s', label: 'Local Inference' },
]
```

- [ ] **Step 4: Update hero section copy**

In the JSX, update the hero heading (around line 121) from:

```tsx
<h1 id="hero-heading">
  Your AI.{' '}
  Your Hardware.{' '}
  <span className="gradient-text">Your Data.</span>
</h1>
```

to:

```tsx
<h1 id="hero-heading">
  Your AI.{' '}
  Your Context.{' '}
  <span className="gradient-text">Your Future.</span>
</h1>
```

Update the hero subtitle (around line 126) from:

```tsx
<p className="hero-subtitle">
  The open-source personal AI stack that runs entirely on your own hardware.
  No corporate cloud. No data harvesting. No compromises.
</p>
```

to:

```tsx
<p className="hero-subtitle">
  The open-source personal AI platform where your context — documents, habits, preferences — stays
  yours forever. Models come and go. Your intelligence compounds.
</p>
```

- [ ] **Step 5: Update feature section heading**

Change the features section heading (around line 147) from:

```tsx
<h2 id="features-heading">Built for the privacy-conscious</h2>
<p className="section-subtitle">
  Everything you need to run a personal AI assistant without sacrificing your data.
</p>
```

to:

```tsx
<h2 id="features-heading">The platform for context ownership</h2>
<p className="section-subtitle">
  Own your AI intelligence. Swap models freely. Your context graph grows more valuable every day.
</p>
```

- [ ] **Step 6: Update CTA section**

Change the CTA (around lines 199-209) from:

```tsx
<h2 id="cta-heading">Take back control of your AI</h2>
<p>Join thousands of privacy-conscious users running their own AI stack.</p>
```

to:

```tsx
<h2 id="cta-heading">Own your AI intelligence</h2>
<p>Join developers building on the platform where your context is yours forever.</p>
```

- [ ] **Step 7: Update footer tagline**

Change the footer tagline (around line 216) from:

```tsx
<p>Your AI. Your Hardware. Your Data.</p>
```

to:

```tsx
<p>Your AI. Your Context. Your Future.</p>
```

- [ ] **Step 8: Run tests — expect all passing**

Run: `pnpm test -- --run`
Expected: All tests pass.

- [ ] **Step 9: Run build to verify no TypeScript errors**

Run: `pnpm build`
Expected: Clean build with no errors.

- [ ] **Step 10: Commit**

```bash
git add src/pages/LandingPage.tsx
git commit -m "feat: update landing page to context-ownership messaging"
```

---

### Task 5: Final verification

- [ ] **Step 1: Run full test suite**

Run: `pnpm test -- --run`
Expected: All tests pass.

- [ ] **Step 2: Run production build**

Run: `pnpm build`
Expected: Clean build.

- [ ] **Step 3: Run lint**

Run: `pnpm lint`
Expected: No errors.
