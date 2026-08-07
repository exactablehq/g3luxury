import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    minimumCacheTTL: 31536000, // 1 year cache TTL for optimized images
    formats: ["image/avif", "image/webp"],
  },
  // allowedDevOrigins: ["192.168.1.8"],
  output: "export",
};

export default nextConfig;
