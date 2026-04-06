import { Link } from 'react-router-dom'
import './LandingPage.css'

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
    </svg>
  )
}

function WifiOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="1" y1="1" x2="23" y2="23"/>
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
      <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/>
      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

const features = [
  {
    icon: <ShieldIcon />,
    title: 'Privacy-First',
    description: 'Zero telemetry. Zero cloud. Your conversations and data never leave your network.',
  },
  {
    icon: <WifiOffIcon />,
    title: 'Offline Capable',
    description: 'Full AI functionality without an internet connection. Your assistant works when the cloud doesn\'t.',
  },
  {
    icon: <CodeIcon />,
    title: 'Open Source',
    description: 'Every line of code is auditable. No black boxes, no hidden data collection, no surprises.',
  },
  {
    icon: <UsersIcon />,
    title: 'Community Models',
    description: 'A marketplace of open-source models vetted by the community. Choose what fits your needs.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Install on Your Hardware',
    description: 'One command to set up Sovereign on any Linux machine, Raspberry Pi, or home server.',
  },
  {
    number: '02',
    title: 'Choose Your Models',
    description: 'Browse the community marketplace and install models optimized for your hardware.',
  },
  {
    number: '03',
    title: 'Own Your AI',
    description: 'Your assistant learns from your documents, habits, and preferences — all locally.',
  },
]

const stats = [
  { value: '100%', label: 'Data Privacy' },
  { value: '50+', label: 'Open Models' },
  { value: '12k+', label: 'Community Members' },
  { value: '<2s', label: 'Local Inference' },
]

export default function LandingPage() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-badge">
            <ShieldIcon />
            Open-Source Personal AI
          </div>
          <h1 id="hero-heading">
            Your AI.{' '}
            Your Hardware.{' '}
            <span className="gradient-text">Your Data.</span>
          </h1>
          <p className="hero-subtitle">
            The open-source personal AI stack that runs entirely on your own hardware.
            No corporate cloud. No data harvesting. No compromises.
          </p>
          <div className="hero-actions">
            <Link to="/dashboard" className="btn btn-primary">
              Launch Dashboard
              <ArrowRightIcon />
            </Link>
            <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
          <div className="hero-terminal" aria-label="Installation command">
            <code>curl -sSL https://sovereign.ai/install | sh</code>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading">Built for the privacy-conscious</h2>
          <p className="section-subtitle">
            Everything you need to run a personal AI assistant without sacrificing your data.
          </p>
          <div className="features-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" aria-labelledby="how-heading">
        <div className="container">
          <h2 id="how-heading">Up and running in minutes</h2>
          <p className="section-subtitle">
            Three steps to your own private AI assistant.
          </p>
          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="social-proof" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-card">
            <h2 id="cta-heading">Take back control of your AI</h2>
            <p>Join thousands of privacy-conscious users running their own AI stack.</p>
            <Link to="/dashboard" className="btn btn-primary btn-lg">
              Get Started Free
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.25rem' }}>Sovereign</span>
            <p>Your AI. Your Hardware. Your Data.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-col">
              <h4>Product</h4>
              <Link to="/dashboard">Dashboard</Link>
              <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">Documentation</a>
              <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">Changelog</a>
            </div>
            <div className="footer-col">
              <h4>Community</h4>
              <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/neenhouse/sovereign/discussions" target="_blank" rel="noopener noreferrer">Discussions</a>
              <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">Contributing</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">License (MIT)</a>
            </div>
          </nav>
          <div className="footer-bottom">
            <p>&copy; 2026 Sovereign. Open-source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
