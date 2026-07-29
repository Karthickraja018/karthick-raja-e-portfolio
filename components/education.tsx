'use client'

const certifications = [
  { name: 'Data Science & ML Professional', issuer: 'Western State University' },
  { name: 'Computer Vision', issuer: 'NPTEL' },
  { name: 'GenAI Solution Development', issuer: 'Databricks' },
  { name: 'GenAI-Powered Data Analytics', issuer: 'Tata Forage' },
  { name: 'Blackbelt Program', issuer: 'Analytics Vidhya' },
  { name: 'Python for Placement Readiness', issuer: 'ByteXL' },
]

export default function Education() {
  return (
    <section
      id="education"
      className="section section-alt"
    >
      <div className="container">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-overline" style={{ marginBottom: 18 }}>Background</p>
          <h2 className="section-title">Education<br />&amp; Certs</h2>
          <div className="divider" />
        </div>

        {/* Two-column layout */}
        <div
          className="edu-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0 80px',
            alignItems: 'start',
          }}
        >
          {/* Left: Degree */}
          <div className="reveal">
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 28,
              }}
            >
              Degree
            </p>

            <div
              className="card"
              style={{ padding: '28px 28px 28px 28px', position: 'relative' }}
            >
              {/* Year badge */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  marginBottom: 14,
                }}
              >
                2022 – 2026
              </span>

              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  marginBottom: 8,
                }}
              >
                SNS College of Technology
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: 20,
                  lineHeight: 1.6,
                }}
              >
                B.Tech — Artificial Intelligence &amp; Machine Learning
              </p>

              {/* CGPA badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  CGPA
                </span>
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  8.81
                </span>
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="reveal">
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 28,
              }}
            >
              Certifications
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  style={{
                    padding: '16px 0',
                    borderBottom: i < certifications.length - 1 ? '1px solid var(--border)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        marginBottom: 3,
                      }}
                    >
                      {cert.name}
                    </p>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
