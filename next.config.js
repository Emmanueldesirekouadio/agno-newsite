/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  telemetry: false,
  eslint: {
    // we use biome for linting
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost"],
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  swcMinify: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
