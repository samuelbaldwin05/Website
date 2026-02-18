import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";

export default defineConfig({
  output: "static",
  integrations: [pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
