// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    // '@vueuse/core',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],
  // css
  css: ['~/assets/sass/app.scss'],
})
