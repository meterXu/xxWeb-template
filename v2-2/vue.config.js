const fs = require('fs')
const project = require('./src/project')
const StyleLintPlugin = require('stylelint-webpack-plugin');
fs.writeFileSync('./public/project.js','window.project='+JSON.stringify(project,null,2),{'flag':'w'})
module.exports = {
  publicPath:'./',
  lintOnSave: undefined,
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack:  config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.runtimeChunk = false
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false
        }
      }
    }
  },
  devServer: {
    disableHostCheck: true,
  }
}
