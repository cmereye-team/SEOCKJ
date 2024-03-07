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
    '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm',
    '@nuxt/content',
    'nuxt-simple-sitemap',
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
  windicss: {
  //   analyze: {
  //     analysis: {
  //       interpretUtilities: false,
  //     },
  //     server: {
  //       port: 4000,
  //       open: false,
  //     },
  //   },
    scan: true,
  },

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
        '/',
      ]
    },
    devProxy: {
      "/api": {
        target: 'https://admin.ckjhk.com/',
        prependPath: true,
        changeOrigin: true,
      },
      "/ding": {
        target: 'https://oapi.dingtalk.com/',
        prependPath: true,
        changeOrigin: true,
      },
      "/ckj": {
        target: 'http://admin.ckjhk.com/',
        prependPath: true,
        changeOrigin: true,
      }
    }
  },
})



//defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results 
//                 (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
//compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
//nonce: '2726c7f26c', // Will add `nonce` to the script tag
//enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//debug: true, // Whether or not display console logs debugs (optional)
//loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
//ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
//trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
//devtools: true, // (optional)