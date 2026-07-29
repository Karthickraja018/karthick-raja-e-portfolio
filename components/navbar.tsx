'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      {/* Logo mark */}
      <a
        href="#hero"
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.65rem',
          fontWeight: 800,
          letterSpacing: '0.06em',
          color: 'rgba(255,255,255,0.65)',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)'
          ;(e.currentTarget as HTMLAnchorElement).style.color = 'white'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)'
          ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'
        }}
      >
        KR
      </a>

      {/* Center nav */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
        className="nav-links"
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'white')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right: Email CTA */}
      <a
        href="mailto:e.karthickraja2004@gmail.com"
        className="btn-pill"
        style={{ padding: '8px 18px', fontSize: '0.8125rem' }}
      >
        Hire Me
      </a>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
