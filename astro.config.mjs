// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "astro-sitemap"; 

export default defineConfig({
  site: "https://clinicadentalsanpatricio.com", 
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()], 
});



