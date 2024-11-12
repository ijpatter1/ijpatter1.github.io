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
        {/* Background gradient with entertainment-focused overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative min-h-screen text-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
}