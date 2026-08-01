'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // CSS animation entrance
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
        minHeight: 'calc(100vh - 70px)',
        marginTop: '70px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'relative',
        padding: '32px 32px 60px',
        overflow: 'hidden',
        background: '#000000',
      }}
    >
      {/* Background Image Container */}
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
          src="/desktop.png"
          alt="Hero Background Desktop"
          fill
          priority
          className="bg-desktop"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Image
          src="/mobile.png"
          alt="Hero Background Mobile"
          fill
          priority
          className="bg-mobile"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
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
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          marginRight: '4%',
          marginBottom: '4%',
        }}
      >
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
          Let's Talk
        </a>
      </div>

      <style>{`
        .bg-desktop {
          display: block;
        }
        .bg-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .bg-desktop {
            display: none !important;
          }
          .bg-mobile {
            display: block !important;
          }
          #hero {
            align-items: flex-end !important;
            justify-content: center !important;
            padding-bottom: 60px !important;
          }
          #hero .hero-content {
            margin-right: 0 !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
