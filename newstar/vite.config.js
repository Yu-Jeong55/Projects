import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "common", replacement: "/src/common" },
      { find: "components", replacement: "/src/components" },
      { find: "data", replacement: "/src/data" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "pages", replacement: "/src/pages" },
      { find: "state", replacement: "/src/state" },
      { find: "styles", replacement: "/src/styles" },
    ],
  },
  base: "/projects/newstar/",
});
