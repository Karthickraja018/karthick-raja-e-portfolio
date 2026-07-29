'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-overline" style={{ marginBottom: 18 }}>Contact</p>
          <h2 className="section-title">Let's<br />Work<br />Together.</h2>
          <div className="divider" />
        </div>

        {/* CTA row */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: '0 48px',
            marginBottom: 80,
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: 480,
            }}
          >
            I'm open to full-time roles, contract work, and collaboration on
            interesting AI problems. Reach out — I respond promptly.
          </p>

          <a
            href="mailto:e.karthickraja2004@gmail.com"
            className="btn-pill"
            style={{ fontSize: '0.9375rem', flexShrink: 0 }}
          >
            Send an email <span className="arrow">→</span>
          </a>
        </div>

        {/* Social links */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 80,
          }}
        >
          {[
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/karthickraja-e/',
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              ),
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Karthickraja018',
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="btn-pill"
            >
              {social.icon}
              {social.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
            }}
          >
            © 2026 Karthick Raja E
          </p>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
            }}
          >
            AI Engineer · Aspiring GenAI Engineer
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact .cta-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
