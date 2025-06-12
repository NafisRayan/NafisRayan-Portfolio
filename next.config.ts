import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
  images: {
    formats: ["image/webp", "image/avif"], // Prefer modern image formats
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
