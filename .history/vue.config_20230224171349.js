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
  devServer: {
    proxy: 'http://localhost:4000'
  }
})
