import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    buildModules: [
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: 'min-dark',
      preload: [
        'php',
        'ts',
        'js',
        'bash',
        'xml'
      ]
    }
  },
  googleFonts: {
    families: {
      Nunito: [400, 700]
    }
  }
})
