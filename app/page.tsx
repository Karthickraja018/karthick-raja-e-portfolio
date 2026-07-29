'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Contact from '@/components/contact'
import { useReveal } from '@/lib/useReveal'

export default function Home() {
  useReveal()

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
