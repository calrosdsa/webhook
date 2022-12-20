/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },   
}

// module.exports = withPlugins(nextConfig)
module.exports = nextConfig

