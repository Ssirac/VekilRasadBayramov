/** @type {import('next').NextConfig} */

// GitHub Pages serves the repo under a sub-path (…/VekilRasadBayramov/).
// The Pages build sets PAGES_BASE_PATH; local dev leaves it empty (root).
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export", // fully static HTML/CSS/JS → deployable to GitHub Pages
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true, // no image-optimization server on GitHub Pages
  },
  trailingSlash: true, // emit /gizlilik/index.html so Pages serves it cleanly
  reactStrictMode: true,
};

export default nextConfig;
