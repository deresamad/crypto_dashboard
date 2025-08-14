import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* Performance optimizations */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static optimization
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
};

module.exports = withBundleAnalyzer(nextConfig);
