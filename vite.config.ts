import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginChecker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react(), pluginChecker({ typescript: true })],
});
