/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";

import { compression } from "vite-plugin-compression2";
import viteCompression from "vite-plugin-compression";
import * as path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

import { ManifestOptions, VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2, // 2 years
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});
const pwaOptions: Partial<VitePWAOptions> = {
  mode: "production",
  base: "/",
  includeAssets: ["favicon.svg"],
  registerType: "autoUpdate",
  workbox: {
    clientsClaim: false,
    skipWaiting: true,
    navigateFallbackDenylist: [/^\/backoffice/],
    disableDevLogs: true,
    runtimeCaching: [
      getCache({
        pattern: /^https:\/\/adminlte-vite-js.netlify.app\/assets/,
        name: "local-images1",
      }),
      getCache({
        pattern: /^https:\/\/adminlte-vite-js.netlify.app\/assets\/css/,
        name: "local-css",
      }),
    ],
  },
  manifest: {
    name: "Admin Lte",
    short_name: "Admin Lte",
    theme_color: "#ffffff",
    icons: [
      {
        src: "icons/pwa-192x192.png", // <== don't add slash, for testing
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/pwa-512x512.png", // <== don't remove slash, for testing
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "icons/pwa-512x512.png", // <== don't add slash, for testing
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },

  devOptions: {
    enabled: process.env.SW_DEV === "true",
    /* when using generateSW the PWA plugin will switch to classic */
    type: "module",
    navigateFallback: "index.html",
  },
};

const replaceOptions = { __DATE__: new Date().toISOString() };
const claims = process.env.CLAIMS === "true";
const reload = process.env.RELOAD_SW === "true";
const selfDestroying = process.env.SW_DESTROY === "true";

if (process.env.SW === "true") {
  pwaOptions.srcDir = "src";
  pwaOptions.filename = claims ? "claims-sw.ts" : "prompt-sw.ts";
  pwaOptions.strategies = "injectManifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).name =
    "PWA Inject Manifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).short_name = "PWA Inject";
}

if (claims) pwaOptions.registerType = "autoUpdate";

if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = "true";
}

if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      VitePWA(pwaOptions),
      compression({
        algorithm: "brotliCompress",
      }),
      createHtmlPlugin({
        minify: {
          minifyCSS: true,
          minifyJS: true,
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true,
        },
        entry: "./src/main.tsx",
        template: "index.html",
      }),
      splitVendorChunkPlugin(),
      viteCompression(),
    ],
    cacheControl: "max-age=3600",
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets/*"),
        "@components": path.resolve(__dirname, "./src/components/index.ts"),
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]_[hash:base64:2]",
      },
    },
    build: {
      emptyOutDir: true,
      outDir: "build",
      sourcemap: false,
      minify: true,
      cssCodeSplit: true,
      modulePreload: true,
      cacheControl: "max-age=3600",
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[hash].js",
          entryFileNames: "assets/js/[hash].js",
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
              return "assets/images/[hash][extname]";
            }
            if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
              return "assets/font/[hash][extname]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[hash][extname]";
            }
            return "assets/[hash][extname]";
          },
        },
      },
    },
  };
});
