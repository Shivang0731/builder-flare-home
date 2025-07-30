import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/builder-flare-home/", // essential for correct asset paths on GitHub Pages
});
