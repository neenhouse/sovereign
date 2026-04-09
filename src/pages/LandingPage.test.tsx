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
