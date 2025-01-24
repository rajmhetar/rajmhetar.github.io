const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: isProd ? '/rajmhetar.github.io' : '',
  assetPrefix: isProd ? '/rajmhetar.github.io/' : '',
  trailingSlash: true, // Ensures trailing slashes for GitHub Pages
  output: 'export', // Enables static export
};

module.exports = nextConfig;
