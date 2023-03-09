//引入vue 精简版  正式版是vue.js dist/vue.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//app所有组件的父组件
import App from './App.vue'
import router from './router'
ElementUI
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
// 创建vue实例对象  ---vm
new Vue({
  // 将app组件放入容器中
  render: h => h(App),

  router: router,
}).$mount('#app')
