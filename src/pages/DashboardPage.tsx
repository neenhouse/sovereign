import { useState, useEffect, useRef, useCallback } from 'react'
import './DashboardPage.css'

// =============================================
// Types
// =============================================

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

interface KnowledgeDoc {
  id: string
  name: string
  type: string
  size: string
  indexed: boolean
}

interface ModelInfo {
  name: string
  size: string
  category: string
  performance: string
  description: string
  installed: boolean
}

// =============================================
// Simulated AI Responses
// =============================================

const AI_RESPONSES: Record<string, string> = {
  default: "I'm your local AI assistant running on Sovereign. I can help with questions, analysis, and creative tasks — all processed on your hardware. No data leaves your network. What would you like to explore?",
  hello: "Hello! I'm running locally on your machine. All inference happens right here — no cloud servers involved. How can I help you today?",
  privacy: "Great question about privacy! With Sovereign, your data never leaves your hardware. I process everything locally using open-source models. There's zero telemetry, zero cloud dependencies, and every decision I make is fully auditable. Your conversations are stored only in your browser's localStorage.",
  help: "Here's what I can help with:\n\n- Answer questions using locally-loaded knowledge\n- Analyze documents from your knowledge base\n- Write and review content\n- Code assistance and debugging\n- Brainstorming and creative tasks\n\nAll processed on your hardware, completely private.",
  models: "Sovereign supports multiple open-source models:\n\n- Llama 3.1 (8B) — Great all-around performance\n- Mistral 7B — Fast inference, good reasoning\n- CodeLlama — Specialized for code tasks\n- Phi-3 — Compact, runs on lower-end hardware\n\nYou can switch models from the Model Marketplace.",
  status: "System Status:\n- Model: Llama 3.1 8B (loaded)\n- RAM Usage: 6.2 GB / 16 GB\n- Inference Speed: ~45 tokens/sec\n- Uptime: 4h 23m\n- Knowledge Base: 127 documents indexed\n- Privacy Score: 100/100",
}

function getAIResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return AI_RESPONSES.hello
  if (lower.includes('privacy') || lower.includes('data') || lower.includes('secure')) return AI_RESPONSES.privacy
  if (lower.includes('help') || lower.includes('what can')) return AI_RESPONSES.help
  if (lower.includes('model') || lower.includes('llama')) return AI_RESPONSES.models
  if (lower.includes('status') || lower.includes('system')) return AI_RESPONSES.status
  return AI_RESPONSES.default
}

// =============================================
// Icons
// =============================================

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

// =============================================
// Data
// =============================================

const INITIAL_DOCS: KnowledgeDoc[] = [
  { id: '1', name: 'Company Handbook.pdf', type: 'PDF', size: '2.4 MB', indexed: true },
  { id: '2', name: 'Q4 Report.xlsx', type: 'Spreadsheet', size: '856 KB', indexed: true },
  { id: '3', name: 'Meeting Notes — March.md', type: 'Markdown', size: '12 KB', indexed: true },
  { id: '4', name: 'Product Roadmap.docx', type: 'Document', size: '340 KB', indexed: true },
  { id: '5', name: 'API Documentation.md', type: 'Markdown', size: '67 KB', indexed: true },
  { id: '6', name: 'Research Papers/', type: 'Folder', size: '18.2 MB', indexed: false },
]

const MODELS: ModelInfo[] = [
  { name: 'Llama 3.1 8B', size: '4.7 GB', category: 'Chat', performance: 'Fast', description: 'Excellent general-purpose model. Great for conversation and analysis.', installed: true },
  { name: 'Mistral 7B v0.3', size: '4.1 GB', category: 'Chat', performance: 'Very Fast', description: 'Quick inference with strong reasoning capabilities.', installed: true },
  { name: 'CodeLlama 13B', size: '7.3 GB', category: 'Code', performance: 'Medium', description: 'Specialized for code generation, review, and debugging.', installed: false },
  { name: 'Phi-3 Mini', size: '2.3 GB', category: 'Chat', performance: 'Ultra Fast', description: 'Compact model that runs well on lower-end hardware.', installed: false },
  { name: 'LLaVA 1.6', size: '5.8 GB', category: 'Vision', performance: 'Medium', description: 'Multimodal model — understands images and text together.', installed: false },
  { name: 'Whisper Large v3', size: '3.1 GB', category: 'Audio', performance: 'Medium', description: 'Speech-to-text transcription with high accuracy.', installed: false },
]

// =============================================
// Dashboard Tabs
// =============================================

type TabId = 'chat' | 'knowledge' | 'models' | 'privacy'

// =============================================
// Chat Panel Component
// =============================================

function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('sovereign-chat')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    localStorage.setItem('sovereign-chat', JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (messagesEndRef.current && typeof messagesEndRef.current.scrollIntoView === 'function') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  const sendMessage = useCallback(() => {
    const trimmed = input.trim()
    if (!trimmed || isTyping) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmed,
      timestamp: Date.now(),
    }

    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(trimmed),
        timestamp: Date.now(),
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 800 + Math.random() * 1200)
  }, [input, isTyping])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([])
    localStorage.removeItem('sovereign-chat')
    inputRef.current?.focus()
  }

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div className="chat-model-info">
          <CheckCircleIcon />
          <span>Llama 3.1 8B</span>
          <span className="chat-speed">~45 tok/s</span>
        </div>
        <button className="chat-clear-btn" onClick={clearChat} aria-label="Clear chat history">
          Clear
        </button>
      </div>

      <div className="chat-messages" role="log" aria-label="Chat messages" aria-live="polite">
        {messages.length === 0 && (
          <div className="chat-empty">
            <p>Ask me anything. All processing happens locally on your hardware.</p>
          </div>
        )}
        {messages.map(msg => (
          <div key={msg.id} className={`chat-message chat-message-${msg.role}`}>
            <div className="chat-message-label">{msg.role === 'user' ? 'You' : 'Sovereign AI'}</div>
            <div className="chat-message-content">{msg.content}</div>
          </div>
        ))}
        {isTyping && (
          <div className="chat-message chat-message-assistant">
            <div className="chat-message-label">Sovereign AI</div>
            <div className="chat-typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message... (try 'help', 'privacy', or 'status')"
          className="chat-input"
          aria-label="Chat message input"
          disabled={isTyping}
        />
        <button
          className="chat-send-btn"
          onClick={sendMessage}
          disabled={!input.trim() || isTyping}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  )
}

// =============================================
// Knowledge Base Panel
// =============================================

function KnowledgePanel() {
  const [docs] = useState<KnowledgeDoc[]>(INITIAL_DOCS)
  const [search, setSearch] = useState('')

  const filtered = docs.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="knowledge-panel">
      <div className="knowledge-header">
        <h3>Knowledge Base</h3>
        <span className="knowledge-count">{docs.filter(d => d.indexed).length} indexed</span>
      </div>

      <div className="knowledge-search">
        <SearchIcon />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search documents..."
          aria-label="Search knowledge base"
        />
      </div>

      <div className="knowledge-list" role="list" aria-label="Knowledge base documents">
        {filtered.map(doc => (
          <div key={doc.id} className="knowledge-item" role="listitem">
            <FileIcon />
            <div className="knowledge-item-info">
              <div className="knowledge-item-name">{doc.name}</div>
              <div className="knowledge-item-meta">{doc.type} &middot; {doc.size}</div>
            </div>
            <div className="knowledge-item-status">
              {doc.indexed ? <CheckCircleIcon /> : <AlertIcon />}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="knowledge-empty">No documents found.</div>
        )}
      </div>

      <button className="knowledge-upload-btn" aria-label="Upload document to knowledge base">
        + Add Documents
      </button>
    </div>
  )
}

// =============================================
// Models Panel
// =============================================

function ModelsPanel() {
  const [filter, setFilter] = useState<string>('All')
  const categories = ['All', 'Chat', 'Code', 'Vision', 'Audio']

  const filtered = filter === 'All'
    ? MODELS
    : MODELS.filter(m => m.category === filter)

  return (
    <div className="models-panel">
      <div className="models-header">
        <h3>Model Marketplace</h3>
      </div>

      <div className="models-filters" role="tablist" aria-label="Filter models by category">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            className={`models-filter-btn${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="models-grid">
        {filtered.map(model => (
          <article key={model.name} className="model-card">
            <div className="model-card-header">
              <h4>{model.name}</h4>
              <span className={`model-badge model-badge-${model.category.toLowerCase()}`}>
                {model.category}
              </span>
            </div>
            <p className="model-description">{model.description}</p>
            <div className="model-meta">
              <span>{model.size}</span>
              <span>{model.performance}</span>
            </div>
            <button
              className={`model-action-btn${model.installed ? ' installed' : ''}`}
              aria-label={model.installed ? `${model.name} is installed` : `Install ${model.name}`}
            >
              {model.installed ? (
                <><CheckCircleIcon /> Installed</>
              ) : (
                <><DownloadIcon /> Install</>
              )}
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

// =============================================
// Privacy Panel
// =============================================

function PrivacyPanel() {
  const [score] = useState(100)
  const metrics = [
    { label: 'Data Locality', value: 100, status: 'All data stored locally' },
    { label: 'Encryption', value: 100, status: 'AES-256 at rest' },
    { label: 'Telemetry', value: 100, status: 'Zero outbound telemetry' },
    { label: 'Network Isolation', value: 100, status: 'No external API calls' },
    { label: 'Model Transparency', value: 100, status: 'Open-source, auditable' },
  ]

  const circumference = 2 * Math.PI * 54
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="privacy-panel">
      <div className="privacy-score-container">
        <div className="privacy-score-ring" aria-label={`Privacy score: ${score} out of 100`}>
          <svg viewBox="0 0 120 120" width="160" height="160">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-border)" strokeWidth="8" />
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="url(#privacy-gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 60 60)"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
            <defs>
              <linearGradient id="privacy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="privacy-score-text">
            <span className="privacy-score-number gradient-text">{score}</span>
            <span className="privacy-score-label">/ 100</span>
          </div>
        </div>
        <h3>Perfect Privacy Score</h3>
        <p>Your Sovereign instance has zero privacy vulnerabilities.</p>
      </div>

      <div className="privacy-metrics">
        {metrics.map(metric => (
          <div key={metric.label} className="privacy-metric">
            <div className="privacy-metric-header">
              <span className="privacy-metric-label">{metric.label}</span>
              <span className="privacy-metric-value">{metric.value}%</span>
            </div>
            <div className="privacy-metric-bar">
              <div
                className="privacy-metric-fill"
                style={{ width: `${metric.value}%` }}
                role="progressbar"
                aria-valuenow={metric.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${metric.label}: ${metric.value}%`}
              />
            </div>
            <span className="privacy-metric-status">{metric.status}</span>
          </div>
        ))}
      </div>

      <div className="privacy-comparison">
        <h4>vs. Cloud Assistants</h4>
        <table aria-label="Privacy comparison with cloud assistants">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Sovereign</th>
              <th>Cloud AI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Location</td>
              <td className="privacy-good">Your hardware</td>
              <td className="privacy-bad">Corporate servers</td>
            </tr>
            <tr>
              <td>Telemetry</td>
              <td className="privacy-good">None</td>
              <td className="privacy-bad">Extensive</td>
            </tr>
            <tr>
              <td>Offline Mode</td>
              <td className="privacy-good">Full</td>
              <td className="privacy-bad">None</td>
            </tr>
            <tr>
              <td>Audit Trail</td>
              <td className="privacy-good">Complete</td>
              <td className="privacy-bad">Opaque</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// =============================================
// System Status Widget
// =============================================

function SystemStatus() {
  return (
    <div className="system-status">
      <h3>System Status</h3>
      <div className="status-items">
        <div className="status-item">
          <div className="status-dot status-dot-green" />
          <span className="status-label">Model Loaded</span>
          <span className="status-value">Llama 3.1 8B</span>
        </div>
        <div className="status-item">
          <div className="status-dot status-dot-green" />
          <span className="status-label">Inference</span>
          <span className="status-value">~45 tok/s</span>
        </div>
        <div className="status-item">
          <div className="status-dot status-dot-green" />
          <span className="status-label">Memory</span>
          <span className="status-value">6.2 / 16 GB</span>
        </div>
        <div className="status-item">
          <div className="status-dot status-dot-green" />
          <span className="status-label">Privacy</span>
          <span className="status-value">100 / 100</span>
        </div>
        <div className="status-item">
          <div className="status-dot status-dot-blue" />
          <span className="status-label">Knowledge</span>
          <span className="status-value">127 docs</span>
        </div>
        <div className="status-item">
          <div className="status-dot status-dot-green" />
          <span className="status-label">Uptime</span>
          <span className="status-value">4h 23m</span>
        </div>
      </div>
    </div>
  )
}

// =============================================
// Dashboard Page
// =============================================

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('chat')

  const tabs: { id: TabId; label: string }[] = [
    { id: 'chat', label: 'Chat' },
    { id: 'knowledge', label: 'Knowledge Base' },
    { id: 'models', label: 'Models' },
    { id: 'privacy', label: 'Privacy' },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <SystemStatus />
        </aside>

        {/* Main */}
        <div className="dashboard-main">
          <nav className="dashboard-tabs" role="tablist" aria-label="Dashboard sections">
            {tabs.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`dashboard-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="dashboard-content" role="tabpanel" aria-label={`${activeTab} panel`}>
            {activeTab === 'chat' && <ChatPanel />}
            {activeTab === 'knowledge' && <KnowledgePanel />}
            {activeTab === 'models' && <ModelsPanel />}
            {activeTab === 'privacy' && <PrivacyPanel />}
          </div>
        </div>
      </div>
    </div>
  )
}
