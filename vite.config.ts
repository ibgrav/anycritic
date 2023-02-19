import { join } from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  clearScreen: false,
  server: {
    port: 5173,
    host: "0.0.0.0"
  },
  resolve: {
    alias: { src: join(process.cwd(), "src") }
  },
  build: {
    assetsInlineLimit: 0
  }
});
