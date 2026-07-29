'use client'

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-overline" style={{ marginBottom: 18 }}>About Me</p>
          <h2 className="section-title">
            I Build<br />
            Intelligent<br />
            Systems.
          </h2>
          <div className="divider" />
        </div>

        {/* Two-column layout */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0 80px',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio */}
          <div>
            <p
              className="section-body"
              style={{ marginBottom: 32 }}
            >
              I graduated with a degree in Artificial Intelligence & Machine
              Learning, and I now build AI-powered applications, backend
              systems, and GenAI solutions for real-world use cases at{' '}
              <span style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>
                Hexaware Technologies
              </span>
              .
            </p>

            <p className="section-body" style={{ marginBottom: 40 }}>
              My focus is on turning research-grade AI into production-ready
              systems — RAG pipelines, multi-agent orchestration, and fast
              backend APIs that scale.
            </p>

            <a
              href="#contact"
              className="btn-pill"
            >
              Get in touch <span className="arrow">→</span>
            </a>
          </div>

          {/* Right: Focus areas */}
          <div>
            <p
              className="section-overline"
              style={{ marginBottom: 24 }}
            >
              Focus Areas
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                'Generative AI & LLMs',
                'RAG Pipelines',
                'Multi-Agent Systems',
                'Backend APIs & Microservices',
                'Prompt Engineering',
                'Semantic Search & Embeddings',
              ].map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderBottom: '1px solid var(--border)',
                    transition: 'padding-left 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.paddingLeft = '8px'
                    const span = e.currentTarget.querySelector('.item-arrow') as HTMLSpanElement
                    if (span) span.style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'
                    const span = e.currentTarget.querySelector('.item-arrow') as HTMLSpanElement
                    if (span) span.style.opacity = '0'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {item}
                  </span>
                  <span
                    className="item-arrow"
                    style={{
                      color: 'rgba(255,255,255,0.25)',
                      fontSize: '0.8rem',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
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
          #about .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
