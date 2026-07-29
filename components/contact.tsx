'use client'

import NextLink from 'next/link'
import { Mail, Share2, GitBranch, ExternalLink } from 'lucide-react'

export default function Contact() {
  const socials = [
    {
      name: 'Email',
      url: 'mailto:e.karthickraja2004@gmail.com',
      icon: Mail,
      label: 'e.karthickraja2004@gmail.com',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/karthickrajae',
      icon: Share2,
      label: 'LinkedIn',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: GitBranch,
      label: 'GitHub',
    },
  ]

  return (
    <section className="py-20 md:py-28 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div data-scroll-animate className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <NextLink
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-border text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon size={20} />
                  <span className="font-medium">{social.label}</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </NextLink>
              )
            })}
          </div>

          <div className="pt-8 border-t border-border space-y-4">
            <p className="text-sm text-muted-foreground">
              Phone: <span className="text-foreground font-medium">+91-8098620388</span>
            </p>
            <p className="text-xs text-muted-foreground">
              © 2026 Karthick Raja E. Built with care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
