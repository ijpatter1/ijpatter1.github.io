/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ijpatter1' : '', // Add your repo name
  trailingSlash: true, // Recommended for GitHub Pages
}

module.exports = nextConfig