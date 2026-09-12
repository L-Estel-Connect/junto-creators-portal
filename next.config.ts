import type { NextConfig } from "next";
import { basePath } from "./lib/base-path";

const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Static export has no image server to optimize on-demand, so serve originals as-is.
  images: { unoptimized: true },
  ...(isGithubPagesBuild
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
