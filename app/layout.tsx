import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

// Using Montserrat for a more modern, entertainment-industry feel
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian Patterson - Director of Web, Data & Tools',
  description: 'Innovation-focused technology leader with proven success in pushing boundaries of marketing technology in the entertainment industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800`}>
        {/* Decorative background element */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl transform -translate-y-1/2"></div>
          </div>
        </div>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}