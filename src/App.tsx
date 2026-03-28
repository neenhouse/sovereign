import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))

function ShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="shield-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
      <path d="M32 4L8 16v20c0 12.8 10.24 24.32 24 28 13.76-3.68 24-15.2 24-28V16L32 4z" stroke="url(#shield-grad)" strokeWidth="2.5" fill="none"/>
      <path d="M24 32l6 6 12-14" stroke="url(#shield-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header-logo" onClick={() => setMobileOpen(false)}>
          <ShieldIcon />
          Sovereign
        </Link>
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <MenuIcon />
        </button>
        <nav className={`header-nav${mobileOpen ? ' open' : ''}`} aria-label="Main navigation">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
          <a href="https://github.com/neenhouse/sovereign" target="_blank" rel="noopener noreferrer">GitHub</a>
          {!isDashboard && (
            <Link to="/dashboard" className="nav-cta" onClick={() => setMobileOpen(false)}>
              Launch App
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--color-text-muted)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 40,
          height: 40,
          border: '3px solid var(--color-border)',
          borderTopColor: 'var(--color-primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          margin: '0 auto var(--space-4)'
        }} />
        Loading...
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

function AppContent() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
