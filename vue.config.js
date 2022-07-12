module.exports = {
  devServer: {
    overlay: { // 编译器错误, 浏览器全屏覆盖, 蒙层
      warnings: false,
      errors: false
    },
    proxy: { // 代理 跨域
      '/api': {
        target: 'http://v.juhe.cn/',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ""
        }
      }
    }
  },
  lintOnSave: false // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
}