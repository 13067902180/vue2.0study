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
  // 开启代理服务器方式1第一种
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器方式2第二种
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        // ws: true,
        // changeOrigin: true
      },

    }
  }
})
