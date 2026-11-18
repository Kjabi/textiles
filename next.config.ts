import type { NextConfig } from "next";

/**
 * The site is fully prerendered. Static assets are served straight from the
 * CDN, and every photograph is pre-rendered into content-hashed variants,
 * so no runtime image optimiser sits between a visitor and an image.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Original photographs are replaced occasionally, so cache for a week.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Content-hashed variants can be cached forever. Declared last so it
        // takes precedence over the rule above.
        source: "/images/variants/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
