import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/shared": path.resolve(__dirname, "src/shared"),
    },
  },
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:8000",
        changeOrigin: false,
        secure: true,
        ws: true,
      },
    },
  },
});
