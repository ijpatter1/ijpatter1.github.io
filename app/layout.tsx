import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import ThemeToggle from './components/ThemeToggle'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900 bg-white transition-colors`}>
        <ThemeProvider>
          {/* Background gradient with entertainment-focused overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
            </div>
          </div>
          
          {/* Theme toggle button */}
          <ThemeToggle />
          
          {/* Main content */}
          <div className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}