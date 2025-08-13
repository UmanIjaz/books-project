import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["d11d11e56032.ngrok-free.app"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
