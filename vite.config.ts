import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";

import viteCompression from "vite-plugin-compression";
import * as path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: {
          minifyCSS: true,
          minifyJS: true,
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true
        },
        entry: "./src/main.tsx",
        template: "index.html"
      }),
      splitVendorChunkPlugin(),
      viteCompression()
    ],
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets/*"),
        "@components": path.resolve(__dirname, "./src/components/index.ts")
      }
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]_[hash:base64:2]"
      }
    },
    build: {
      emptyOutDir: true,
      outDir: "build",
      sourcemap: false,
      minify: true,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[hash].js",
          entryFileNames: "assets/js/[hash].js",
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
              return "assets/images/[hash][extname]";
            }
            if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
              return "assets/font/[hash][extname]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[hash][extname]";
            }
            return "assets/[hash][extname]";
          }
        }
      }
    }
  };
});
