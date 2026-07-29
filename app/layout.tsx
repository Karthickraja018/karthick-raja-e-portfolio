import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karthick Raja E — AI Engineer',
  description:
    'AI Engineer at Hexaware Technologies specializing in Generative AI, RAG Systems, Multi-Agent Systems, and Backend APIs.',
  keywords: ['AI Engineer', 'Generative AI', 'RAG', 'LangChain', 'FastAPI', 'Karthick Raja'],
  authors: [{ name: 'Karthick Raja E' }],
  openGraph: {
    title: 'Karthick Raja E — AI Engineer',
    description: 'AI Engineer at Hexaware Technologies building GenAI solutions for real-world use cases.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
