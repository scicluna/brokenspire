import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/server/Footer'
import Nav from '@/components/server/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Broken Spire Games',
  description: 'Level up your table',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-stone-500 text-stone-50`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
