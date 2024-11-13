import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {/* Background gradient with subtle overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 blur-3xl"></div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative min-h-screen text-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}