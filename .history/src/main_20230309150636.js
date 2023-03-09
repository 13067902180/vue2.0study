//引入vue 精简版  正式版是vue.js dist/vue.js

import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入elementui的组件库和样式
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
//app所有组件的父组件
// 按需映入
import { Button, Row, DataPick } from 'element-ui';
import App from './App.vue'
import router from './router'
Vue.use(VueRouter)
// Vue.use(ElementUI)
// 关闭生产提示
Vue.config.productionTip = false
// 创建vue实例对象  ---vm
new Vue({
  // 将app组件放入容器中
  render: h => h(App),

  router: router,
}).$mount('#app')
