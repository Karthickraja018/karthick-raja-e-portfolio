'use client'

const projects = [
  {
    id: 'axivora',
    index: '01',
    title: 'Axivora',
    subtitle: 'Academic Intelligence Platform',
    description: 'AI-powered academic analytics platform with multi-agent RAG, NLP-to-SQL, and risk scoring for college administrators.',
    tags: ['RAG', 'Multi-Agent', 'NLP-to-SQL', 'FastAPI'],
  },
  {
    id: 'dataviz',
    index: '02',
    title: 'Data Viz AI',
    subtitle: 'Intelligent Visualization Chatbot',
    description: 'Interactive Streamlit tool for real-time chart generation and data insights from user-uploaded datasets.',
    tags: ['Streamlit', 'LLM', 'Data Analysis'],
  },
  {
    id: 'detection',
    index: '03',
    title: 'Animal Detector',
    subtitle: 'Computer Vision System',
    description: 'Computer vision system using YOLOv8 for real-time animal detection in images and video streams.',
    tags: ['YOLOv8', 'Computer Vision', 'PyTorch'],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section-alt"
    >
      <div className="container">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-overline" style={{ marginBottom: 18 }}>Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
        </div>

        {/* Project rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr auto',
                gap: '0 32px',
                alignItems: 'start',
                padding: '40px 0',
                borderBottom: '1px solid var(--border)',
                transition: 'opacity 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                // Dim siblings
                const siblings = e.currentTarget.parentElement?.children
                if (siblings) {
                  Array.from(siblings).forEach((s, si) => {
                    if (si !== i) (s as HTMLElement).style.opacity = '0.4'
                  })
                }
              }}
              onMouseLeave={e => {
                const siblings = e.currentTarget.parentElement?.children
                if (siblings) {
                  Array.from(siblings).forEach(s => {
                    (s as HTMLElement).style.opacity = '1'
                  })
                }
              }}
            >
              {/* Index */}
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  paddingTop: 4,
                }}
              >
                {project.index}
              </span>

              {/* Content */}
              <div>
                <div style={{ marginBottom: 12 }}>
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      marginBottom: 4,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: 520,
                    marginBottom: 20,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Arrow icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  flexShrink: 0,
                  transition: 'all 0.2s',
                  marginTop: 4,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-hover)'
                  ;(e.currentTarget as HTMLDivElement).style.color = 'white'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.color = 'var(--text-muted)'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #projects .project-row {
            grid-template-columns: 40px 1fr !important;
          }
          #projects .project-arrow { display: none !important; }
        }
      `}</style>
    </section>
  )
}
