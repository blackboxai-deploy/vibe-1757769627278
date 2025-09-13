import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Fine Dining - Hotel Bintang 5',
  description: 'Pengalaman kuliner eksklusif dengan cita rasa internasional dan presentasi yang memukau',
  keywords: 'fine dining, hotel bintang 5, kuliner mewah, wagyu, lobster, caviar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}