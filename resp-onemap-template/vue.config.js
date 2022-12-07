const fs = require('fs');
const project = require('./src/project');
const StyleLintPlugin = require('stylelint-webpack-plugin');
fs.writeFileSync(
  './public/project.js',
  'window.project=' + JSON.stringify(project, null, 2),
  { flag: 'w' }
);
module.exports = {
  publicPath: './',
  lintOnSave: undefined,
  productionSourceMap: true,
  chainWebpack: (config) => {
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
    }
  },
  devServer: {
    disableHostCheck: true,
    // proxy: {
    //   '/api/': {
    //     target: 'http://192.168.31.122:8082/rsep-onemap-service/api/',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
};
