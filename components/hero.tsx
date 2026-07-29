'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Profile Photo in Rounded Container */}
        <div className="animate-fade-in mb-12">
          <div className="relative w-72 h-80 mx-auto rounded-3xl overflow-hidden bg-card border border-border/50">
            <Image
              src="/profile-nobg.png"
              alt="Karthick Raja E"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Name with Accent */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight tracking-tight">
          <span className="text-accent">KARTHICK</span>
          <br />
          <span>RAJA E</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          AI Engineer / Generative AI Specialist
        </p>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground/10 transition-all duration-300 group font-medium mb-20"
        >
          Get in touch
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <ChevronDown size={32} className="text-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
