/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    HOST: process.env.HOST,
    NEXT_PUBLIC_ZEGO_APP_ID: process.env.NEXT_PUBLIC_ZEGO_APP_ID,
    NEXT_PUBLIC_ZEGO_SERVER: process.env.NEXT_PUBLIC_ZEGO_SERVER
  },
  images: {
    domains: ['localhost', '192.168.0.59'],
  },
};

module.exports = nextConfig;
