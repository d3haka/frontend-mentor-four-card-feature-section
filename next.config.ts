import type { NextConfig } from "next";
const repo = "frontend-mentor-four-card-feature-section";
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  /* config options here */
  // assetPrefix: assetPrefix,
  basePath,
  images: {
    path: "/frontend-mentor-four-card-feature-section",
  },
};

export default nextConfig;
