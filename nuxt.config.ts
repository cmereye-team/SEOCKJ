import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  
  ssr: true,
  
  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },
  
  // css
  css: ['~/assets/sass/vendor.scss', '~/assets/sass/app.scss'],
  
  // plugins
  plugins: ['~/plugins/navbar.ts'],
  
  // build
  build: {
    transpile: ['@headlessui/vue','gsap']
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@intlify/nuxt3',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    // '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm',
    '@nuxt/content',
    // 'nuxt-simple-sitemap',
    'nuxt-windicss',
    'nuxt-swiper'
  ],
  
  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // app config
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'hk',
      fallbackLocale: 'hk',
      availableLocales: ['hk','zh'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  // windicss: {
  //   analyze: {
  //     analysis: {
  //       interpretUtilities: false,
  //     },
  //     server: {
  //       port: 4000,
  //       open: false,
  //     },
  //   },
  //   scan: true,
  // },

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-T27LCDR',
        defer: false,
        compatibility: false,
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        devtools: true,
      },
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://ckjhk.com',
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    },
    devProxy: {
      // "/api": {
      //   target: 'https://admin.ckjhk.com/',
      //   prependPath: true,
      //   changeOrigin: true,
      // },
      // "/ding": {
      //   target: 'https://oapi.dingtalk.com/',
      //   prependPath: true,
      //   changeOrigin: true,
      // },
      "/sendmail": {
        target: 'https://api.mailersend.com',
        prependPath: true,
        changeOrigin: true,
      },
      "/dingtalk":{
        target: 'https://oapi.dingtalk.com',
        prependPath: true,
        changeOrigin: true,
      }
    }
  },
})