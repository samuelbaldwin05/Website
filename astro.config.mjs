import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://sambaldwin.dev",
  output: "static",
  integrations: [pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
