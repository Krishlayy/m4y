import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress the lockfile workspace root warning
  turbopack: {
    root: __dirname,
  },

  // Performance: compress responses
  compress: true,

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Reduce bundle size — strip console in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Headers for better caching & security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
