# Sovereign — Product Requirements Document

## Overview

Sovereign is an open-source personal AI platform that separates context from model — you own your accumulated intelligence permanently, and the model is a swappable commodity. The product consists of a public landing page that communicates the context-ownership thesis, an interactive dashboard that demonstrates platform capabilities, and (eventually) the core platform itself.

## Strategic Context

This product exists at a specific moment in the AI market's structural inversion. Models are commoditizing. The value is migrating to context — the persistent understanding of the user. Every feature decision should be evaluated against one question: **does this deepen the user's context graph or make the platform more valuable the longer they use it?**

Features that don't contribute to context accumulation, model flexibility, or ecosystem growth should be deprioritized. Features that create organic switching costs through genuine value (not lock-in) should be prioritized.

## Positioning

**Narrative:** As AI models commoditize, value migrates to context — the persistent understanding of you. Sovereign lets you own that context permanently while treating models as swappable commodities.

**Emotional hook:** You wouldn't rent your memories from a landlord who could change the locks. Why rent your AI's understanding of you?

**Primary audience:** Developers who want full control of their AI stack. They are the distribution strategy — they adopt first, contribute, evangelize, then set up Sovereign for their teams and families.

**Secondary audience:** Privacy-conscious professionals (lawyers, therapists, journalists) who handle data that legally or ethically cannot touch corporate cloud. For them, Sovereign isn't a preference — it's a professional requirement.

**Tertiary audience:** Technical families reached via Sovereign Cloud, managed by the developer who set it up.

## Product Phases

### Phase 1: Landing + Demo (Current)

Establish the narrative. Prove the vision is compelling before building the platform. The landing page IS the product at this stage — it recruits contributors, captures early adopters, and pressure-tests the positioning.

**Success metric:** GitHub stars, waitlist signups, developer engagement with the vision.

### Phase 2: Core Platform (Next)

Ship the local-first AI platform with context graph persistence. This is the product that earns developer love.

**Success metric:** Weekly active self-hosted users, context graph depth (documents indexed, integrations connected), contributor count.

### Phase 3: Cloud + Marketplace

Launch Sovereign Cloud for convenience-seekers and the marketplace for ecosystem builders.

**Success metric:** Cloud conversion rate, marketplace listing count, MRR.

## Go-to-Market

The flywheel doesn't start itself. Here's how each phase acquires users.

### Phase 1 GTM: Narrative-Led Developer Acquisition

The product is a landing page. The distribution is the *idea.* Context ownership is a novel framing that doesn't exist in public discourse yet. Owning this narrative early creates brand association before competitors can.

**Channels:**
- **Hacker News / Reddit (r/selfhosted, r/LocalLLaMA)** — Publish the context-ownership thesis as long-form posts. These communities are pre-qualified: privacy-conscious, technically capable, early-adopter-minded. Target 2–3 high-quality posts that frame the structural market shift, not the product.
- **GitHub presence** — Open-source everything from day one. Position as the "personal AI platform" category. No competitor owns this label on GitHub. Early stars = social proof for Phase 2.
- **Technical blog** — Deep dives on context graph architecture, model orchestration design, privacy-by-design decisions. This content attracts contributors (the community flywheel fuel).

**What success looks like:** 500+ GitHub stars, 200+ waitlist signups, 5+ contributors opening PRs. These numbers mean the narrative resonates with developers who will build the platform with you.

**What failure looks like:** High landing page traffic but zero GitHub engagement. This means the narrative is interesting but not actionable — the product vision isn't concrete enough to attract builders. Fix: ship a working alpha faster.

### Phase 2 GTM: Product-Led OSS Growth

The product exists. Distribution shifts from narrative to experience.

**Channels:**
- **Developer word-of-mouth** — Every self-hosted user who shows a colleague is free acquisition. The product must be remarkable enough to demo unprompted.
- **Integration partnerships** — Home Assistant, Ollama, and Obsidian communities are natural allies. Co-build integrations that serve both ecosystems. Each integration is a distribution channel into that community.
- **Conference circuit** — "Context Ownership in the Age of Commoditized AI" as a talk. Not a product pitch — a thesis talk that happens to have a working demo.
- **Documentation as marketing** — Exceptional docs convert tire-kickers into users. Sovereign's docs should be the best in the self-hosted AI space.

**What success looks like:** 10K+ self-hosted users, organic mentions in "awesome-selfhosted" lists, integration authors building without being asked.

### Phase 3 GTM: Professional and Managed Channels

Cloud and Pro tiers need different distribution than OSS.

**Channels:**
- **Compliance-focused content** — Blog posts and guides for regulated industries: "HIPAA-compliant AI assistants with Sovereign," "Client confidentiality and AI: a guide for law firms." These rank for high-intent searches.
- **Consultant partnerships** — Legal tech consultants, health IT advisors, and security consultants who recommend tools to their clients. One consultant can drive dozens of Pro subscriptions.
- **Case studies** — Early professional adopters become proof points. "How [law firm] uses Sovereign to analyze case documents without cloud exposure."
- **Marketplace seeding** — Fund or co-develop the first 20 marketplace integrations to demonstrate ecosystem viability. After that, the economics (70/30 split + captive audience) attract independent authors.

**What success looks like:** 2%+ Cloud conversion, 5+ marketplace integrations built by non-team contributors, first professional case study published.

## Features — Phase 1 (Current Build)

### 1. Landing Page

The landing page communicates the context-ownership thesis through a specific narrative arc: problem (you're renting your intelligence) → thesis (context outlasts models) → solution (own your context graph) → proof (features, stats, community) → action (install or join waitlist).

- Hero section with context-ownership messaging and emotional hook
- Gradient text effects with emerald-to-blue palette
- Feature cards: Context Ownership, Local-First, Model Freedom, Community Ecosystem
- How-it-works section (3-step flow: Install → Build Context → Own Intelligence)
- Social proof / stats section
- Install command CTA
- Footer with navigation and links

### 2. AI Dashboard — Chat Interface

Demonstrates the local AI experience. The chat interface isn't just a demo — it shows what "your AI, your hardware" feels like in practice.

- Simulated local AI chat with streaming-style responses
- Message history persisted to localStorage (foreshadows context persistence)
- System status indicator (model loaded, inference speed)
- Dark layered command-center aesthetic

### 3. Privacy Scanner

Concrete proof that local-first matters. Makes the abstract privacy argument tangible by scoring it.

- Visual privacy score widget (0–100)
- Animated score gauge
- Breakdown of privacy metrics (data locality, encryption, telemetry)
- Comparison with cloud alternatives

### 4. Knowledge Base Manager

Early demonstration of the context graph concept. Shows users what "indexing your documents" looks like.

- Sidebar listing indexed documents
- Upload simulation for new documents
- Search within knowledge base
- Document metadata display

### 5. Model Marketplace Browser

Demonstrates model-agnosticism. Shows that Sovereign treats models as swappable commodities.

- Grid of available open-source models
- Model cards with size, performance, and category
- Filter by task type (chat, code, vision, audio)
- Install/download simulation

## Features — Phase 2 (Core Platform, Planned)

### 6. Setup Wizard

Reduces self-hosting friction — the #1 adoption risk. Makes the first 5 minutes feel effortless. Ships with the core platform, not the demo.

- Step-by-step onboarding flow
- Hardware requirements check
- Model selection
- Configuration summary

### 7. Context Graph Engine

The core differentiator. Indexes user data, builds associations, learns patterns. This is where the individual flywheel starts spinning.

- Document ingestion (files, emails, calendar, notes)
- Relationship extraction and association learning
- Communication style modeling
- Workflow pattern detection
- Full data export (maximum portability = maximum trust)

### 8. Model Orchestration Layer

The model-agnostic routing layer. Makes "swap models freely" a reality.

- Local model management (Ollama, llama.cpp, vLLM)
- Hybrid cloud routing (local for private, cloud for complex)
- User-controlled privacy/capability tradeoff dial
- Model performance benchmarking on user's hardware

### 9. Integration Framework

Each integration deepens the context graph and raises organic switching costs.

- Calendar integration (learn scheduling patterns)
- Email integration (learn communication style per recipient)
- File system watcher (learn document relationships)
- API for community-built integrations

### 10. Sovereign Cloud

The monetization layer. Must be a first-class path, not an afterthought — self-hosting friction is the #1 adoption risk.

- Managed hosting with zero-knowledge encryption
- Mobile access to your context graph
- Automatic updates and backups
- Family/team multi-user support

## Technical Constraints

- React 19 + TypeScript (frontend)
- CSS custom properties only (no CSS frameworks)
- React Router for navigation
- localStorage for state persistence (Phase 1 demo)
- SVG icons only
- 8px grid system
- Mobile-responsive
- Dark theme with emerald (#10B981) and electric blue (#3B82F6) accents

## Design Principles

Every design decision should reinforce the narrative: **this is YOUR space, under YOUR control.**

- Dark theme = command center, operator in control
- Emerald accent = growth, organic, alive (the context graph growing)
- Clean data displays = transparency, nothing hidden
- Local status indicators = "this is running on YOUR machine"
- No tracking pixels, no analytics scripts, no third-party requests on the landing page (practice what you preach)

## What We Don't Build

- **A chat wrapper.** Many competitors are chat UIs over APIs. Sovereign is a platform with a context graph.
- **A privacy tool.** Privacy is a property of the architecture, not a feature to market. The product is context ownership.
- **An AI model.** Models are commodities. We build the layer above: context accumulation and model orchestration.
- **A product for everyone.** Developers first. Professionals second. Families third. Resist the urge to broaden prematurely.
