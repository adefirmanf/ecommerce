require('dotenv').config()
/**
 * gh -> Deployment to FTP Server reserved by College
 * production -> Deployment to Docker images
 */

const BASE_URL_API = {
  local: 'http://localhost:8080',
  gh: process.env.GH_BASE_URL_API,
  production: process.env.PROD_BASE_URL_API
}

const ROUTER_BASE = {
  local: '/',
  gh: process.env.GH_BASE_ROUTER,
  production: process.env.PROD_BASE_ROUTER
}

const BUILD_ENV = process.env.BUILD_ENV
module.exports = {
  env: {
    baseUrlAPI: BASE_URL_API[BUILD_ENV || 'local'],
    routerBase: ROUTER_BASE[BUILD_ENV || 'local']
  },
  mode: "spa",
  router: {
    base: ROUTER_BASE[BUILD_ENV || 'local']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'ecommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    scripts: [
      { src: '~/assets/js/bootstrap.min.js' },
      { src: '~/assets/js/scripts.js' }
    ]
  },
  css: [
    { src: '~/assets/css/bootstrap.css' },
    { src: '~/assets/css/responsive.css' },
    { src: '~/assets/css/ui.css' },
    { src: '~/assets/css/custom.css' },
    { src: '~/assets/fonts/fontawesome/css/all.css' },
    { src: '~/assets/fonts/roboto/font.css' },
    // { src: '~/assets/css/ui.css' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~/plugins/lazyLoad'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['~/assets/css/boostrap.css'],
  }
}

