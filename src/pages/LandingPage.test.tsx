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
    expect(heading).toHaveTextContent('Your Hardware.')
    expect(heading).toHaveTextContent('Your Data.')
  })

  it('renders all four feature cards', () => {
    renderWithRouter()
    expect(screen.getByText('Privacy-First')).toBeInTheDocument()
    expect(screen.getByText('Offline Capable')).toBeInTheDocument()
    expect(screen.getByText('Open Source')).toBeInTheDocument()
    expect(screen.getByText('Community Models')).toBeInTheDocument()
  })

  it('renders the how-it-works section with three steps', () => {
    renderWithRouter()
    expect(screen.getByText('Install on Your Hardware')).toBeInTheDocument()
    expect(screen.getByText('Choose Your Models')).toBeInTheDocument()
    expect(screen.getByText('Own Your AI')).toBeInTheDocument()
  })

  it('renders social proof stats', () => {
    renderWithRouter()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Data Privacy')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
  })

  it('renders the install command', () => {
    renderWithRouter()
    expect(screen.getByText('curl -sSL https://sovereign.ai/install | sh')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    renderWithRouter()
    expect(screen.getByText('Take back control of your AI')).toBeInTheDocument()
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    renderWithRouter()
    expect(screen.getByText(/2026 Sovereign/)).toBeInTheDocument()
  })

  it('has accessible section headings', () => {
    renderWithRouter()
    expect(screen.getByText('Built for the privacy-conscious')).toBeInTheDocument()
    expect(screen.getByText('Up and running in minutes')).toBeInTheDocument()
  })
})
