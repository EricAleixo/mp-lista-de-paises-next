import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Isso permite qualquer domínio
      },
    ],
  }
};

export default nextConfig;
