# Sovereign Strategy — Vision Depth Pass

## Status: Design Spec

## AI-Future Thesis

The AI market is undergoing a structural inversion across three phases:

**2023-2025 — The Model Era.** Value lives in the model. Companies compete on intelligence. Users pay for access to the best brain. Moat = model capability.

**2026-2028 — The Commoditization Squeeze.** Open-source models close the gap. Running a capable model locally becomes trivial. The model itself stops being a differentiator.

**2028+ — The Context Era.** When every model is smart enough, the winner is whoever has the deepest, most persistent understanding of YOU — your work patterns, communication style, health data, financial situation, family context. This is the new oil, and right now it's being extracted by cloud providers who own both the model AND your context.

**Sovereign's thesis: Separate the context from the model.** You own your context graph permanently. Models are pluggable, swappable, upgradeable commodities. Instead of renting context access from a model provider, you own your context and rent (or self-host) the model.

**Why this is durable:** Context accumulates. Every day you use Sovereign, it gets harder to leave — not because of lock-in tricks, but because your AI genuinely knows you better. No cloud provider can replicate 2 years of your indexed documents, habits, and preferences.

## Strategic Direction

**Endgame: Platform play, bootstrapped through open-source movement.**

The current vision's strongest ideas — swappable models, community marketplace — are inherently platform concepts. But platforms can't launch cold. The path: build an opinionated open-source tool that developers love, then let the ecosystem grow into a platform. This is the Home Assistant playbook — passionate OSS project becomes the de facto standard, then monetizes through a managed service.

**Primary user progression:**
1. Developers first — they build on the platform, contribute, and evangelize
2. Privacy-conscious professionals second — they need it for work
3. Families last — requires a mature, low-friction product

## Business Model: Open Core + Marketplace

| Tier | Price | What You Get |
|------|-------|-------------|
| **Core (OSS)** | Free forever | Full platform, local models, self-hosted |
| **Sovereign Cloud** | ~$9/mo | Managed hosting, automatic updates, encrypted remote backup of context graph, mobile access |
| **Sovereign Pro** | ~$29/mo | Priority model access, hybrid cloud routing (route to cloud models when local can't handle it), team/family sharing |
| **Marketplace** | 70/30 split | Community-contributed model adapters, integrations, skill packs |

The free tier is genuinely complete — no crippled features. Paid tiers add convenience (managed hosting) and capability (hybrid routing). The OSS community never feels exploited; paying customers get real value.

**Revenue path:** Monetize at ~10K active self-hosted users via Cloud tier. At 2% conversion: 200 users x $9/mo = ~$1,800/mo starting MRR. Marketplace revenue scales with ecosystem.

## Moat Analysis

| Layer | Strength | Reasoning |
|-------|----------|-----------|
| **Personal context graph** | Strong | Accumulates over time, deeply personal. 2 years of indexed documents + habits = massive switching cost |
| **Community model adapters** | Medium | Network effect — more adapters attract more users attract more contributors. Weak early, strong at scale |
| **Open-source trust** | Medium | In privacy AI, being auditable IS the moat. Proprietary competitors can't credibly claim "trust us" |
| **Integration ecosystem** | Weak → Strong | Calendar, email, file system, smart home — each integration deepens context and raises switching costs |
| **Brand as privacy AI standard** | Medium | First-mover in niche. Defensible only with strong execution |

### Context Graph Portability Paradox

The moat isn't the raw data — it's the accumulated structure, relationships, and model fine-tuning on top of that data. You can export documents and calendar entries, but you can't easily export:
- Learned associations between documents and habits
- Communication style model trained on your writing
- Workflow automations tuned to your patterns
- Model adapter configurations optimized for your use cases

Maximum portability creates maximum trust creates maximum retention. "You can leave anytime" attracts users; the accumulated intelligence keeps them.

## Competitive Positioning

The correct competitive frame is NOT Alexa/Siri/Google (wrong weight class). The real landscape:

| Competitor | What They Do | Sovereign's Edge |
|------------|-------------|------------------|
| **Ollama** | Local model runner | No context graph, no integrations, no persistence. Sovereign uses Ollama as a component |
| **Home Assistant** | Smart home automation | Different domain. Instructive business model (Nabu Casa). Potential integration partner |
| **Jan.ai** | Local AI chat app | Chat-focused, no platform ambitions. No marketplace, no context graph |
| **Apple Intelligence** | On-device AI | Closed ecosystem, Apple-only, limited model choice |
| **OpenWebUI** | Self-hosted chat UI | UI layer only. No context persistence, no ecosystem play |

**Key differentiation:** No competitor is building a persistent personal context graph with a model-agnostic orchestration layer. They solve pieces. Sovereign is the integration.

## Principle Revision

The current "zero cloud dependencies" principle should evolve:

**Before:** "Zero telemetry, zero cloud dependencies. Everything runs on hardware you physically control."

**After:** "Zero required cloud dependencies. Everything CAN run on hardware you control. Cloud features are optional, encrypted, and you hold the only key. Local-first, cloud-optional."

This is critical — dogmatic local-only positioning becomes a liability if frontier cloud models maintain a capability gap over local models. Hybrid routing (local for private/routine tasks, cloud for complex queries with minimal context exposure) lets users choose their own privacy/capability tradeoff.

## Risks and Mitigations

### Risk 1: Self-hosting friction kills adoption
**Severity:** High. Linux desktop is at ~4% after 30 years. Self-hosted email has zero consumer adoption.

**Mitigation:** Sovereign Cloud must be a first-class path, not an afterthought. The pitch is "your data, your control, your choice of how to run it" — not "self-host or nothing." Hardware is also getting easier (RPi 5, mini-PCs with NPUs).

**Precedent:** Home Assistant has 1M+ active installs despite requiring dedicated hardware. The privacy incentive for AI (which processes your most intimate data) is categorically stronger than for browsers or email.

### Risk 2: Context portability contradicts moat
**Severity:** Medium. If data is open and exportable, competitors can ingest it.

**Mitigation:** Raw data is portable; accumulated intelligence isn't. Portability builds trust, which builds retention. See "Context Graph Portability Paradox" above.

### Risk 3: Model capability gap doesn't close
**Severity:** Medium. If frontier models stay far ahead of local models, "model-agnostic" becomes "model-inferior."

**Mitigation:** Hybrid routing architecture. Local for private/routine tasks, cloud for complex tasks with minimal context exposure. Users choose their tradeoff. Sovereign is a privacy-aware router, not a local-only dogma.

## What This Changes From Current Vision

| Current vision.md | This spec |
|---|---|
| Privacy feature comparison vs Big Tech | Structural thesis: context ownership in the model commoditization era |
| No business model | Open core + marketplace with concrete tiers |
| "Zero cloud dependencies" as dogma | "Local-first, cloud-optional" with hybrid routing |
| Moat = privacy + open-source | Moat = accumulated context graph + community ecosystem + trust |
| Target: everyone who cares about privacy | Target: developers first, then professionals, managed tier for non-technical |
| Competitors: Alexa/Siri/Google | Competitors: Ollama, Jan.ai, OpenWebUI (correct weight class) |
