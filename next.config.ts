import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback — on the photographic art used across
    // the site these land roughly 50% and 30% below the JPEG source, and the
    // browser picks whichever it supports.
    formats: ["image/avif", "image/webp"],
    // Narrower than the defaults: the widest any image renders is the 88rem
    // (1408px) container, so generating 2048/3840 variants only wastes build
    // time and cache space.
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Strip the framework's identifying response header.
  poweredByHeader: false,
};

export default nextConfig;
