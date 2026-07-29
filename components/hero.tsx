'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              KARTHICK
              <br />
              RAJA E
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              AI Engineer / GenAI & Backend Developer
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            Aspiring AI Engineer passionate about building intelligent systems. Specializing in Generative AI, RAG systems, and scalable backend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:e.karthickraja2004@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all duration-300 group"
            >
              Get in touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-card transition-all duration-300"
            >
              View my work
            </Link>
          </div>
        </div>

        <div className="relative h-80 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl"></div>
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Karthick Raja E"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
