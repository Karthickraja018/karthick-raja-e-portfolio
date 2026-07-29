'use client'

interface EducationItem {
  type: string
  institution: string
  program: string
  period: string
  achievement: string
}

export default function Education() {
  const education: EducationItem[] = [
    {
      type: 'Degree',
      institution: 'SNS College of Technology',
      program: 'Bachelor of Technology in AI & ML',
      period: '2022-2026',
      achievement: 'CGPA: 8.81',
    },
    {
      type: 'Higher Secondary',
      institution: 'DSM Higher Secondary School',
      program: 'HSE',
      period: '2019-2022',
      achievement: 'Percentage: 89%',
    },
  ]

  const certifications = [
    'Data Science & ML Professional – Western State University, California (Jul 2026)',
    'Computer Vision (12-week course) - NPTEL (Jul – Oct 2024)',
    'GenerativeAI Solution Development - Databricks (Oct 2025)',
    'GenAI-Powered Data Analytics Job Simulation - Tata Forage (Jun 2025)',
    'Blackbelt Program (ML & Analytics Track) - Analytics Vidhya (Oct - Dec 2025)',
    'Python for Placement Readiness - ByteXL (Aug – Sep 2025)',
  ]

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div data-scroll-animate className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Education & Certifications</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent font-semibold text-sm">
                        {item.type === 'Degree' ? '🎓' : '📚'}
                      </div>
                      {index < education.length - 1 && <div className="w-1 h-24 bg-border/50 my-2"></div>}
                    </div>

                    <div className="pb-6 flex-1">
                      <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">
                        {item.type}
                      </p>
                      <h4 className="text-xl font-bold text-foreground mb-1">{item.institution}</h4>
                      <p className="text-muted-foreground mb-2">{item.program}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <span className="text-muted-foreground">{item.period}</span>
                        <span className="hidden sm:inline text-border">•</span>
                        <span className="text-accent font-medium">{item.achievement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border/50 bg-card/40 hover:border-accent/50 hover:bg-card/60 transition-all duration-300"
                  >
                    <p className="text-sm text-muted-foreground">{cert}</p>
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
