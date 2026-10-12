import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about/research",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/about/technology",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/about/ventures",
        destination: "/business",
        permanent: true,
      },
      {
        source: "/journal",
        destination: "/writing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;