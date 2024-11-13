import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './components/providers'
import { ThemeToggle } from './components/theme/theme-toggle'

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
      <body className={inter.className}>
        <Providers>
          {/* Background with theme support */}
          <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"></div>
            </div>
          </div>
          
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Main content */}
          <main className="relative min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}