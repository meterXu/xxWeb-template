module.exports = {
  chainWebpack: (config) => {
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 6144 }))
  },
  lintOnSave: undefined,
  productionSourceMap: true,
  publicPath: './',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}
