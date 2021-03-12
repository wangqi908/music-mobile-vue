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
  }
}
