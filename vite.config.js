import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-html-purgecss";

export default defineConfig({
  plugins: [htmlPurge()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        success: "success.html",
      },
    },
    assetsInlineLimit: 0, // Ensure no assets are inlined as base64
  },
  assetsInclude: ["**/*.svg"],
});
