/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This ensures the app works with GitHub Pages
  basePath: "",
  // This prevents using React's strict mode, which can cause issues with hydration
  reactStrictMode: false,
  // Makes sure the site works on GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
}

module.exports = nextConfig

