'use client'

const skillCategories = [
  {
    label: 'Languages',
    items: ['Python', 'C#'],
  },
  {
    label: 'AI / ML',
    items: ['Machine Learning', 'Generative AI', 'Prompt Engineering', 'RAG', 'Semantic Search', 'Embeddings', 'Multi-Agent Systems', 'MLflow'],
  },
  {
    label: 'AI Frameworks',
    items: ['PyTorch', 'LangChain', 'LangGraph', 'CrewAI', 'Gemini API', 'ChromaDB', 'FAISS', 'MCP'],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Flask', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MS SQL Server'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container">

        {/* Section header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-overline" style={{ marginBottom: 18 }}>Expertise</p>
          <h2 className="section-title">Skills</h2>
          <div className="divider" />
        </div>

        {/* Skills grid */}
        <div
          className="reveal skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px 64px',
          }}
        >
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 16,
                }}
              >
                {cat.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  )
}
