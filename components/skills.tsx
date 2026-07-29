'use client'

interface SkillCategory {
  name: string
  items: string[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming',
      items: ['Python', 'C#'],
    },
    {
      name: 'AI & ML',
      items: [
        'Machine Learning',
        'Generative AI',
        'Prompt Engineering',
        'RAG Systems',
        'Semantic Search',
        'Embeddings',
        'Multi-Agent Systems',
      ],
    },
    {
      name: 'Frameworks',
      items: [
        'PyTorch',
        'LangChain',
        'LangGraph',
        'CrewAI',
        'Google Gemini API',
        'ChromaDB',
        'FAISS',
        'MCP',
      ],
    },
    {
      name: 'Backend',
      items: [
        'FastAPI',
        'Flask',
        'ASP.NET Core',
        'Entity Framework Core',
        'RESTful APIs',
      ],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server'],
    },
    {
      name: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
    },
  ]

  return (
    <section className="py-20 md:py-28 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div data-scroll-animate className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
