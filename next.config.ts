import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Ignore the _resources folder during build
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/_resources/**']
    };
    return config;
  },
};

export default nextConfig;
