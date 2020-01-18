module.exports = function (ctx) {
  return {
    css: [
      'app.scss'
    ],

    framework: {
      all: false,

      components: [
        'QLayout',
        'QHeader',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QCard'
      ]
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      showProgress: true,
      gzip: false,
      analyze: false
    },

    devServer: {
      https: false,
      port: 3000,
      open: true // opens browser window automatically
    }
  }
}
