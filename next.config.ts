import type { NextConfig } from "next";
const repo = "d3haka.github.io/frontend-mentor-four-card-feature-section";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default nextConfig;
