'use client'  // Add this at the top of the file

import { Download } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-8 px-4 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Ian Patterson</h1>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">
          Director of Web, Data & Tools
        </p>
        <div className="mt-2 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="mailto:ianjamespatterson@gmail.com" className="hover:text-gray-900 dark:hover:text-white">
            ianjamespatterson@gmail.com
          </a>
          <a href="tel:+14406507810" className="hover:text-gray-900 dark:hover:text-white">
            +1 440-650-7810
          </a>
          <a href="https://linkedin.com/in/ianpatterson31" 
             target="_blank" 
             rel="noopener noreferrer"
             className="hover:text-gray-900 dark:hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
      >
        <Download size={20} />
        Download PDF
      </a>
    </header>
  )
}