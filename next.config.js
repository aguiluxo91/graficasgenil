/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_BASE_URL: 'https://graficasgenil.netlify.app/api',
  },
  eslint: { ignoreDuringBuilds: true }
}

module.exports = nextConfig
