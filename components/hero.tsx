'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // CSS animation entrance — no GSAP dependency
    const el = contentRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    children.forEach((child, i) => {
      child.style.opacity = '0'
      child.style.transform = 'translateY(20px)'
      child.style.transition = `opacity 0.75s ease ${200 + i * 150}ms, transform 0.75s ease ${200 + i * 150}ms`
      // Force reflow then trigger
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          child.style.opacity = '1'
          child.style.transform = 'translateY(0)'
        })
      })
    })
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        padding: '100px 32px 60px',
        overflow: 'hidden',
        background: '#000000',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Image
          src="/bg-image.png"
          alt="Karthick Raja E"
          fill
          priority
          style={{
            objectFit: 'contain',
            objectPosition: 'left center',
            opacity: 0.9,
          }}
        />
        {/* Right fade for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'right',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          maxWidth: '680px',
          width: '100%',
          marginRight: '4%',
        }}
      >
        {/* Role label */}
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: 20,
          }}
        >
          AI Engineer · Aspiring GenAI Engineer
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            color: 'white',
            marginBottom: 28,
          }}
        >
          KARTHICK
          <br />
          RAJA E
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.01em',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 360,
          }}
        >
          Building intelligent systems at the intersection of AI and software engineering.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="#projects" className="btn-pill">
            View Work <span className="arrow">→</span>
          </a>
          <a
            href="mailto:e.karthickraja2004@gmail.com"
            className="btn-pill"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(255,255,255,0.12)',
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 26,
            height: 42,
            borderRadius: 13,
            border: '1.5px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '6px 0',
          }}
        >
          <div
            style={{
              width: 3,
              height: 7,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.35)',
              animation: 'scrollDot 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(10px); opacity: 1; }
        }

        @media (max-width: 768px) {
          #hero {
            align-items: flex-end !important;
            justify-content: center !important;
            padding-bottom: 120px !important;
          }
          #hero .hero-content {
            text-align: center !important;
            align-items: center !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
