import Dock from './components/Dock.jsx'

const items = [
  {
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m3.5 10 8.5-7 8.5 7v10a1 1 0 0 1-1 1h-5.2v-6.5h-4.6V21H4.5a1 1 0 0 1-1-1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    active: true,
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },

  {
    label: 'Menu',
    icon: (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 8h12v7a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Z" strokeLinejoin="round" />
        <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3c0 1 1 1 1 2M12 3c0 1 1 1 1 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    onClick: () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    label: 'Reviews',
    icon: (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 21s-7.5-4.4-7.5-10.2A4.3 4.3 0 0 1 12 8.2a4.3 4.3 0 0 1 7.5 2.6C19.5 16.6 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 13h2l1.2-2.5 1.5 5 1.1-2.5h1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    onClick: () => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    label: 'Book',
    icon: (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h3M8 17h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    onClick: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    label: 'Moments',
    icon: (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 5.5h16v13H4z" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="m5 17 4.2-4 3.1 2.7 2.2-2 4.5 3.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    onClick: () => document.getElementById('moments')?.scrollIntoView({ behavior: 'smooth' }),
  },
]

function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <Dock
        items={items}
        position="bottom"
        theme="light"
        baseItemSize={48}
        magnification={64}
        panelHeight={64}
        autoHide
        className="pointer-events-auto"
      />
    </nav>
  )
}

export default Navbar
