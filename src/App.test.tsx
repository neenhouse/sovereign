import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the header with Sovereign branding', () => {
    render(<App />)
    expect(screen.getByText('Sovereign')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('renders the Launch App CTA button', () => {
    render(<App />)
    expect(screen.getByText('Launch App')).toBeInTheDocument()
  })

  it('has accessible mobile navigation toggle', () => {
    render(<App />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile navigation on button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByLabelText('Toggle navigation menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
