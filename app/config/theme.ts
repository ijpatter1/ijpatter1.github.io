// theme.ts
export const theme = {
  colors: {
    primary: {
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      text: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
      solid: 'text-indigo-600',
      hover: 'hover:text-indigo-700',
      badge: 'bg-indigo-100 text-indigo-700 border border-indigo-200',
      accent: 'bg-indigo-50'
    },
    background: {
      card: 'bg-white/80 backdrop-blur-sm',
      hover: 'hover:bg-gray-50/80',
      section: 'bg-gray-50/50'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500'
    }
  }
}