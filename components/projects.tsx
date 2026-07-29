'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  shortDesc: string
  technologies: string[]
  highlights: string[]
  date: string
  color: string
}

const projects: Project[] = [
  {
    id: 'axivora',
    title: 'Axivora',
    shortDesc: 'Academic Intelligence Platform',
    description: 'AI-powered academic analytics platform',
    technologies: ['FastAPI', 'PostgreSQL', 'LangGraph', 'LLMs', 'RAG', 'NLP-to-SQL'],
    highlights: [
      'Multi-agent RAG pipeline with semantic search',
      'NLP-to-SQL for natural language queries',
      'AI-driven risk scoring and analytics',
      'Contextual memory for institutional data',
    ],
    date: 'Jan – Apr 2026',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'dataviz',
    title: 'Data Visualization AI',
    shortDesc: 'Interactive Data Exploration Chatbot',
    description: 'Python & Streamlit-based interactive data tool',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'LLMs'],
    highlights: [
      'Real-time chart generation from user datasets',
      'Dynamic summaries and data insights',
      'No-code data exploration for non-technical users',
      'Improved analysis efficiency',
    ],
    date: 'Jan–Feb 2025',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'detection',
    title: 'Animal Detection System',
    shortDesc: 'Computer Vision with YOLOv8',
    description: 'Real-time object detection in images and videos',
    technologies: ['YOLOv8', 'Computer Vision', 'Deep Learning', 'Python'],
    highlights: [
      'Real-time animal detection in images and videos',
      'Advanced image preprocessing and labeling',
      'Model evaluation and optimization',
      'Practical surveillance and safety applications',
    ],
    date: 'Oct 2024 – Dec 2024',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-scroll-animate className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Latest work</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <div className="rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                  <div className={`h-48 md:h-64 bg-gradient-to-br ${project.color} opacity-10 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-foreground/20 mb-4">
                          {project.title.charAt(0)}
                        </div>
                        <p className="text-foreground/30 font-medium">{project.shortDesc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 bg-card/40 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.date}</p>
                      </div>
                      <div className="text-accent group-hover:translate-x-1 transition-transform">
                        <ExternalLink size={24} />
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {expandedId === project.id && (
                      <div className="pt-6 border-t border-border/50 space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex gap-2">
                                <span className="text-accent">→</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
