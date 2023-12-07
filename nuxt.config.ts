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
  modules: [
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-vuefire'
  ],
  vuefire: {
    config: {
      apiKey: 'AIzaSyCsuGQRR99Z6Pe-qaemhfuJH35kO5q4XCs',
      authDomain: 'nuxtblog-d3327.firebaseapp.com',
      projectId: 'nuxtblog-d3327',
      storageBucket: 'nuxtblog-d3327.appspot.com',
      messagingSenderId: '315398547712',
      appId: '1:315398547712:web:27a377e1579e5c3f87ebe5'
    }
  },
  swiper: {
    modules: ['navigation', 'pagination', 'effect-creative']
  },
  image: {
    dir: 'assets'
  }
})
