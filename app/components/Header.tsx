'use client'

import { Download } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Ian Patterson
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-light text-gray-600 dark:text-gray-300">
                Director of Web, Data & Tools
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a 
                  href="mailto:ianjamespatterson@gmail.com" 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  ianjamespatterson@gmail.com
                </a>
                <a 
                  href="tel:+14406507810" 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  +1 440-650-7810
                </a>
                <a 
                  href="https://linkedin.com/in/ianpatterson31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
              <span className="font-medium">Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}