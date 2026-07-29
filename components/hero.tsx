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
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-visible">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Card Container with overlapping image */}
        <div className="relative w-full max-w-3xl overflow-visible">
          {/* Large Grey Rectangle Box */}
          <div className="relative bg-card/50 rounded-3xl border border-border/30 px-8 md:px-16 pt-56 md:pt-64 pb-16 md:pb-20 overflow-visible shadow-lg">
            {/* Profile Photo Overlapping from Top */}
            <div className="absolute -top-40 md:-top-48 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
              <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-background border-4 border-background shadow-xl">
                <Image
                  src="/profile-nobg.png"
                  alt="Karthick Raja E"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Name with Accent - Inside the Box */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight tracking-tight">
              <span className="text-accent">KARTHICK</span>
              <br />
              <span>RAJA E</span>
            </h1>

            {/* Subtitle - Inside the Box */}
            <p className="text-base md:text-lg text-muted-foreground mb-10">
              AI Engineer / Generative AI Specialist
            </p>

            {/* CTA Button - Inside the Box */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-foreground text-foreground hover:bg-foreground/10 transition-all duration-300 group font-medium"
            >
              Get in touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

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
