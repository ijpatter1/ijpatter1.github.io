import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  // Including regular, medium, semibold and bold weights
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ian Patterson - Director, Web, Data & Tools',
  description: 'Innovation-focused technology leader with proven success in pushing boundaries of marketing technology in the entertainment industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="relative min-h-screen bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  )
}