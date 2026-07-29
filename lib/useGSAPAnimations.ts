'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gsap: typeof import('gsap').gsap
    ScrollTrigger: any
  }
}

export function useGSAPAnimations() {
  useEffect(() => {
    let ctx: any;

    const initGSAP = () => {
      if (typeof window === 'undefined') return
      if (!window.gsap || !window.ScrollTrigger) {
        setTimeout(initGSAP, 100)
        return
      }

      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Animate all elements with data-gsap-fade attribute
        const elements = document.querySelectorAll('[data-gsap-fade]')
        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            }
          )
        })

        // Staggered children animations
        const staggerGroups = document.querySelectorAll('[data-gsap-stagger]')
        staggerGroups.forEach((group) => {
          const children = group.children
          gsap.fromTo(
            children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.1,
              scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                once: true,
              },
            }
          )
        })
      })
    }

    const timer = setTimeout(initGSAP, 100)
    
    return () => {
      clearTimeout(timer)
      if (ctx) ctx.revert()
    }
  }, [])
}
