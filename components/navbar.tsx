'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
          KRE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <a
            href="mailto:e.karthickraja2004@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Get in touch
          </a>
        </div>

        <div className="md:hidden">
          <a
            href="mailto:e.karthickraja2004@gmail.com"
            className="inline-flex items-center justify-center p-2 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
