// Shared with next.config.ts so unoptimized <Image> sources (which don't get
// Next's automatic basePath prefixing) resolve correctly on GitHub Pages.
export const basePath =
  process.env.GITHUB_PAGES === "true" ? "/junto-creators-portal" : "";
