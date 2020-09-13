// const path = require('path');

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: '@/plugins/vue-awesome-swiper', mode: 'server' },
    '@/plugins/vue-svgicon.js',
    '@/plugins/vue-mq.js',
    // '@/plugins/vue-tailwind.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '@/assets/scss/app.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   use: [
      //     {
      //       loader: 'vue-loader',
      //       options: {
      //         transformAssetUrls: {
      //           icon: 'data',
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   query: {
      //     limit: 1000, // 1kB
      //     name: 'fonts/[name].[hash:7].[ext]',
      //   },
      // },
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-webfontloader',
    [
      '@nuxtjs/device',
      {
        defaultUserAgent:
          'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
      },
    ],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  webfontloader: {
    google: {
      families: ['Raleway:400,500,600,700,800,900'],
    },
  },
  // purgeCSS: {
  //   mode: 'postcss',
  //   enabled: process.env.NODE_ENV === 'production',
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test('.svg')
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['vue-svg-loader'],
      });
    },
  },
}
