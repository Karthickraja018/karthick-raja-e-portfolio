'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealElement {
  ref: React.RefObject<HTMLElement>
  isVisible: boolean
}

export default function About() {
  const section = useRef<HTMLDivElement>(null)
  const greeting = useRef<HTMLDivElement>(null)
  const description = useRef<HTMLDivElement>(null)
  
  const [greetingVisible, setGreetingVisible] = useState(false)
  const [descriptionVisible, setDescriptionVisible] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === greeting.current) {
            setGreetingVisible(true)
          }
          if (entry.target === description.current) {
            setDescriptionVisible(true)
          }
        }
      })
    }, observerOptions)

    if (greeting.current) observer.observe(greeting.current)
    if (description.current) observer.observe(description.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={section} className="py-32 md:py-40 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Greeting */}
          <div
            ref={greeting}
            className={`transition-all duration-1000 ease-out ${
              greetingVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Hi, I&apos;m Karthick, an aspiring GenAI Engineer.
            </h2>
          </div>

          {/* Right - Description */}
          <div
            ref={description}
            className={`transition-all duration-1000 ease-out delay-300 ${
              descriptionVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
              Currently working at Hexaware Technologies as a GenAI Engineer, I&apos;ve recently started my career in Artificial Intelligence and Machine Learning. Through building multiple projects and hands-on experience with cutting-edge AI technologies, I&apos;ve developed strong expertise in Generative AI, RAG systems, and backend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
