'use strict'

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 8889, // 端口
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      less: {
        additionalData: '@import "~@/assets/style/variables.less";'
      }
    }
  }
}
