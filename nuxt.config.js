export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: 8080,
  },
  ssr: true,
  generate: {
    fallback: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Standard | WELL V2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Explore the WELL Building Standard™ version 2: a collection of scientific strategies to advance health through design interventions and operational policies that foster a culture of health and well-being in buildings and organizations.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/wind-componets',
    '~/plugins/vue-formulate',
    '~/plugins/settings',
    '~/plugins/common-filter',
    { src: '~/plugins/services.js', mode: 'client', ssr: false },
    { src: '~/plugins/multiselect', mode: 'client', ssr: false },
    { src: '~/plugins/vueClipboard2.js', mode: 'client' },
    { src: '~/plugins/vue-popover.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      { path: '~/components', pathPrefix: false },
      {
        path: '~/components/elements/slide-overs',
        prefix: 'Slideovers',
      },
      {
        path: '~/components/navigation',
        prefix: 'Nav',
      },
      {
        path: '~/components/well',
        prefix: 'W',
      },
      {
        path: '~/components/elements/cards',
        prefix: 'Cards',
      },
      {
        path: '~/components/elements/hero',
        prefix: 'Hero',
      },
      {
        path: '~/components/elements/badge',
        prefix: 'Badge',
      },
      {
        path: '~/components/elements/accordians',
        prefix: 'Accordians',
      },
      {
        path: '~/components/elements/loading',
        prefix: 'Loading',
      },
      {
        path: '~/components/elements/buttons',
        prefix: 'Buttons',
      },
      {
        path: '~/components/elements/tabs',
        prefix: 'Tabs',
      },
      {
        path: '~/components/auth-api',
        prefix: 'Auth',
      },
      {
        path: '~/components/elements/feedback',
        prefix: 'Feed',
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@edgio/nuxt/module',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@teamfunction/wind-components',
    // Doc: https://github.com/nuxt-community/router-extras-module
    '@nuxtjs/router-extras',
    '@nuxtjs/dayjs',
    // '@braid/vue-formulate/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    '@nuxtjs/auth-next',
    '@nuxtjs/gtm',
    'cookie-universal-nuxt',
    '~/modules/integrations.js',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix',
        defaultLocale: 'en',
        langDir: 'locales/',
        lazy: true,
        locales: [
          {
            code: 'en',
            file: 'en.js',
          },
          {
            code: 'cn',
            file: 'cn.js',
          },
        ],
      },
    ],
  ],
  gtm: {
    id: 'GTM-P38CPKJ',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    apiURL: process.env.API_URL,
  },

  env: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    appUrl: process.env.APP_URL,
  },

  publicRuntimeConfig: {
    assetsURL: process.env.ASSETS_URL,
    loginUrl: process.env.LOGIN_URL,
    logoutUrl: process.env.LOGOUT_URL,
    cbaPrefix: process.env.CBA_PREFIX,
    appUrl: process.env.APP_URL,
    adminUrl: process.env.ADMIN_URL,
    s3Url: process.env.S3_LINK,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'WELL Standard',
      author: 'WELL',
    },
    manifest: {
      name: 'WELL Standard',
      short_name: 'WELL Standard',
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
