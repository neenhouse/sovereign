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
