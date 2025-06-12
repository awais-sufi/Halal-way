/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables Gzip compression for all server-rendered content and static assets
  compress: true,

  // Custom headers for caching
  headers: async () => {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            // Cache static assets publicly for one year and mark them as immutable
            // This tells browsers and CDNs to aggressively cache these files
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
