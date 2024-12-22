import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8081,
    open: true,
    historyApiFallback: true,
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "element-plus",
      "nprogress",
      "gsap",
      "@vueuse/motion",
      "vue-i18n",
    ],
    force: true,
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    chunkSizeWarningLimit: 1500,
  },
});
