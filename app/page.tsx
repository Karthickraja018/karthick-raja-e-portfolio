'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Contact from '@/components/contact'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <main className="overflow-hidden">
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
