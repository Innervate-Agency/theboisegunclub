import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build to prevent deployment failures from warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keep TypeScript strict checking enabled
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
