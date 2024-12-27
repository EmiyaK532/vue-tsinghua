import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: true,
      prodEnabled: true,
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
      prodMockData: () => {
        const modules = import.meta.glob("./mock/**/*.ts");
        return Object.values(modules).map((mod) => mod());
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
  server: {
    port: 8082,
    open: true,
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
