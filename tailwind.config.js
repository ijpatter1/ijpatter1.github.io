/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'agency-blue': 'rgb(81, 186, 249)',
        'agency-red': 'rgb(236, 76, 39)',
        'agency-yellow': 'rgb(246, 188, 65)',
        'agency-green': 'rgb(116, 251, 183)',
        'agency-pink': 'rgb(234, 54, 127)',
        'agency-violet': 'rgb(111, 43, 245)',
      },
    },
  },
  plugins: [],
}