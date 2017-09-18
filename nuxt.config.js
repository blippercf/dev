module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'developer site of blipper.cf' }
    ],
    script: [
      // { src: "/js/jquery.min.js" },
    ],
    link: [
      { 
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
      // '@nuxtjs/bootstrap-vue'
    //  ['@nuxtjs/bootstrap-vue', { css: false }]
  ],
  plugins:  [

    // { src:`~plugins/bootstrap-vue` }
    // { src: '~plugins/element-ui' }
  ],
  env: {
    // HOST_URL: 'http://lab.highmaru.com:4000',
    // AUTH0_CLIENT_ID: '5YAf7fC4cAgrbM9Hy54GsH62pvSgG9Lj',
    // AUTH0_CLIENT_DOMAIN: 'highmaru.auth0.com'
  },
  router: {
    // middleware: 'check-auth'
  },
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
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
