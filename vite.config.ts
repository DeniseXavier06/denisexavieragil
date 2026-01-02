import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
//import { componentTagger } from "lovable-tagger";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
 
  plugins: [react()],
  base: command === "build" ? "/denisexavieragil/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
}));