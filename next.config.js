/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_BASE_URL: 'http://localhost:3000/api',
  },
  eslint: { ignoreDuringBuilds: true }
}

module.exports = nextConfig
