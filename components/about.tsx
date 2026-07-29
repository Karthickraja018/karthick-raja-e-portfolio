'use client'

export default function About() {
  const technologies = [
    { name: 'Python', category: 'Language' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'LangChain', category: 'AI Framework' },
    { name: 'PyTorch', category: 'ML' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'LangGraph', category: 'AI Framework' },
    { name: 'CrewAI', category: 'Multi-Agent' },
  ]

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div data-scroll-animate className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About me</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I&apos;m Karthick, an aspiring AI Engineer with a strong passion for Artificial Intelligence and Machine Learning. I&apos;m currently pursuing my BTech in AI & ML at SNS College of Technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have hands-on experience building AI-powered applications, from multi-agent RAG systems to computer vision solutions. I&apos;m eager to learn, adaptable, and committed to staying at the cutting edge of AI technology.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">I work with</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
