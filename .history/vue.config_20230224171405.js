const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  transpileDependencies: true,
  // 关闭语法检查 去官网api查
  lintOnSave: false,
  // 开启代理服务器
  devServer: {
    proxy: 'http://localhost:4000'
  }
})
