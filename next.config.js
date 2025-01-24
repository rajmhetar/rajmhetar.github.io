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
};

module.exports = nextConfig;
