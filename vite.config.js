import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@images", replacement: "/src/assets/images" },
      { find: "@style", replacement: "/src/styles" },
      { find: "@info", replacement: "/src/info" },
      { find: "@functions", replacement: "/src/functions" },
      // { find: "", replacement: "" },
    ],
  },
});
