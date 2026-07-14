/** @type {import('next').NextConfig} */

// GitHub Pages serves the repo under a sub-path (…/VekilRasadBayramov/) and has
// no Node server, so that build is a static export. Vercel runs Next.js
// natively, so it needs none of that — it gets the default config (image
// optimization, root path, SSG/SSR).
//
// The Pages GitHub Actions workflow sets PAGES_BASE_PATH; Vercel does not.
const basePath = process.env.PAGES_BASE_PATH || "";
const isPages = Boolean(basePath);

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export", // fully static HTML/CSS/JS for GitHub Pages
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true }, // no optimizer on Pages
        trailingSlash: true, // /gizlilik/index.html
      }
    : {}),
};

export default nextConfig;
