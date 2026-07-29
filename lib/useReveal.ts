'use client'

import { useEffect, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    // Observe all .reveal and .reveal-stagger elements
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
