import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import DashboardPage from './DashboardPage'

function renderDashboard() {
  return render(
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  )
}

describe('DashboardPage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the system status sidebar', () => {
    renderDashboard()
    expect(screen.getByText('System Status')).toBeInTheDocument()
    expect(screen.getByText('Model Loaded')).toBeInTheDocument()
    expect(screen.getByText('6.2 / 16 GB')).toBeInTheDocument()
    expect(screen.getByText('4h 23m')).toBeInTheDocument()
  })

  it('renders all dashboard tabs', () => {
    renderDashboard()
    const tablist = screen.getByRole('tablist', { name: 'Dashboard sections' })
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(4)
    expect(tabs[0]).toHaveTextContent('Chat')
    expect(tabs[1]).toHaveTextContent('Knowledge Base')
    expect(tabs[2]).toHaveTextContent('Models')
    expect(tabs[3]).toHaveTextContent('Privacy')
  })

  it('shows chat panel by default', () => {
    renderDashboard()
    expect(screen.getByLabelText('Chat message input')).toBeInTheDocument()
    expect(screen.getByLabelText('Send message')).toBeInTheDocument()
  })

  it('switches to Knowledge Base tab', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const tablist = screen.getByRole('tablist', { name: 'Dashboard sections' })
    const kbTab = within(tablist).getByRole('tab', { name: 'Knowledge Base' })
    await user.click(kbTab)
    expect(screen.getByLabelText('Search knowledge base')).toBeInTheDocument()
    expect(screen.getByText('Company Handbook.pdf')).toBeInTheDocument()
  })

  it('switches to Models tab and shows model cards', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const tablist = screen.getByRole('tablist', { name: 'Dashboard sections' })
    const modelsTab = within(tablist).getByRole('tab', { name: 'Models' })
    await user.click(modelsTab)
    expect(screen.getByText('Model Marketplace')).toBeInTheDocument()
    expect(screen.getByText('Mistral 7B v0.3')).toBeInTheDocument()
    expect(screen.getByText('CodeLlama 13B')).toBeInTheDocument()
  })

  it('switches to Privacy tab and shows score', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const tablist = screen.getByRole('tablist', { name: 'Dashboard sections' })
    const privacyTab = within(tablist).getByRole('tab', { name: 'Privacy' })
    await user.click(privacyTab)
    expect(screen.getByText('Perfect Privacy Score')).toBeInTheDocument()
    expect(screen.getByLabelText('Privacy score: 100 out of 100')).toBeInTheDocument()
  })

  it('sends a chat message', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const input = screen.getByLabelText('Chat message input')
    await user.type(input, 'hello')
    await user.click(screen.getByLabelText('Send message'))

    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('clears chat history', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const input = screen.getByLabelText('Chat message input')
    await user.type(input, 'test message')
    await user.click(screen.getByLabelText('Send message'))

    expect(screen.getByText('test message')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Clear chat history'))
    expect(screen.queryByText('test message')).not.toBeInTheDocument()
  })

  it('filters models by category', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const dashboardTabs = screen.getByRole('tablist', { name: 'Dashboard sections' })
    const modelsTab = within(dashboardTabs).getByRole('tab', { name: 'Models' })
    await user.click(modelsTab)

    const filterTabs = screen.getByRole('tablist', { name: 'Filter models by category' })
    const codeFilter = within(filterTabs).getByRole('tab', { name: 'Code' })
    await user.click(codeFilter)

    expect(screen.getByText('CodeLlama 13B')).toBeInTheDocument()
    expect(screen.queryByText('Mistral 7B v0.3')).not.toBeInTheDocument()
  })

  it('searches knowledge base documents', async () => {
    const user = userEvent.setup()
    renderDashboard()

    const dashboardTabs = screen.getByRole('tablist', { name: 'Dashboard sections' })
    const kbTab = within(dashboardTabs).getByRole('tab', { name: 'Knowledge Base' })
    await user.click(kbTab)

    const search = screen.getByLabelText('Search knowledge base')
    await user.type(search, 'handbook')

    expect(screen.getByText('Company Handbook.pdf')).toBeInTheDocument()
    expect(screen.queryByText('Q4 Report.xlsx')).not.toBeInTheDocument()
  })
})
