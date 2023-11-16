import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  content: {
    highlight: {
      theme: "min-dark",
      preload: ["php", "ts", "js", "bash", "xml"],
    },
  },
  googleFonts: {
    families: {
      Nunito: [400, 700],
    },
  },
});
