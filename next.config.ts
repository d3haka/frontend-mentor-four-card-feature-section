import type { NextConfig } from "next";
const repo = "four-card-feature-section-master";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default nextConfig;
