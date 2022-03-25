/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.mdx$/,
        use: [{ loader: '@mdx-js/loader' }]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    );

    return config;
  }
}

module.exports = nextConfig
