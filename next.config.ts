import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 genera una versione statica nella cartella /out
 * (usata per l'anteprima online). Senza la variabile il sito gira
 * normalmente con `npm run dev` / `npm run build && npm start`.
 */
const isExport = process.env.STATIC_EXPORT === "1";
/** Sottocartella per GitHub Pages, es. BASE_PATH=/studio-aurora-demo */
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // Cache Components / Partial Prefetching non sono supportati in export statico
  cacheComponents: !isExport,
  ...(isExport ? {} : { partialPrefetching: true }),
  ...(isExport ? { output: "export" as const, trailingSlash: true } : {}),
  ...(basePath ? { basePath } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isExport,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
