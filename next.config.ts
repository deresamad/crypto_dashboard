import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Disable optimizeCss as it's causing issues
    // optimizeCss: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
