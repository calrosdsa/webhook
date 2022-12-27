/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    app_id: process.env.app_id,
    app_secret: process.env.app_secret,
  },
}

// module.exports = withPlugins(nextConfig)
module.exports = nextConfig

