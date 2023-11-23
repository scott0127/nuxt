// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css'
  ],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt/' : '/',
    buildAssetsDir: '/assets/_nuxt'
  },
  modules: ['@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt']
})
