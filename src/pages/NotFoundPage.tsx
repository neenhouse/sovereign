import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '40px 24px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        color: 'var(--color-text)',
      }}
    >
      <p style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>404</p>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Page not found</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', maxWidth: '360px' }}>
        That page doesn't exist. Your data is still safe.
      </p>
      <Link
        to="/"
        style={{
          padding: '10px 24px',
          background: 'var(--color-primary)',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '14px',
        }}
      >
        Back to home
      </Link>
    </div>
  )
}
