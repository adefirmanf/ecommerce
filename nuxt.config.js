module.exports = {
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
    ]
  },
  js: [
    { src: '~/assets/js/bootstrap.min.js' }
  ],
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

