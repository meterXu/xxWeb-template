const config = require('./public/config.json')
const conf = config[process.env.NODE_ENV || 'development']
const url = process.env.VUE_APP_URL
require('events').EventEmitter.defaultMaxListeners = 0
module.exports = {
  // const webpack = require('webpack'),
  lintOnSave: false,
  publicPath: conf.publicPath,
  productionSourceMap: false,
  chainWebpack: config => {
    // 忽略的打包文件
    config.externals({
      'axios': 'axios'
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
  },
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    port: 1000,
    proxy: {
      '/auth': {
        target: conf.baseUrl,
        ws: true,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
      '/admin': {
        target: conf.baseUrl,
        ws: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/sysApi': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/sysApi': '/'
        }
      }
    }
  }
}
