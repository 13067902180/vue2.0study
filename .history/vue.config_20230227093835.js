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
        // 请求给你服务器去掉atguigu
        pathRewrite: { '^atguigu': '' },
        // 用于输出websocket
        ws: true,
        // 如果说谎是true 代理服务器对5000说谎是5000   false实话实说是8080的代理
        // 用于控制请求头中的host的值
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 请求给你服务器去掉atguigu
        pathRewrite: { '^demo': '' },
        // 用于输出websocket
        ws: true,
        // 如果说谎是true 代理服务器对5000说谎是5000   false实话实说是8080的代理
        // 用于控制请求头中的host的值
        changeOrigin: true
      },

    }
  }
})
