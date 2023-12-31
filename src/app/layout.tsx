import { outfit } from '@/styles/fonts'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Create Next App',
    default: 'Create Next App',
  },

  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className="antialiased">
      <body
        className={`${outfit.className} grid min-h-screen bg-zinc-800 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  )
}
