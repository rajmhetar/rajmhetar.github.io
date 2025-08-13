/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Since your repo is directly rajmhetar.github.io, no basePath is needed
  basePath: '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  // Configure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // Use the standard 'out' directory
  distDir: 'out',
}

module.exports = nextConfig

