//引入vue 精简版  正式版是vue.js dist/vue.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import { use } from 'vue/types/umd'
//app所有组件的父组件
import App from './App.vue'

Vue, use(VueRouter)

Vue.config.productionTip = false
// 创建vue实例对象  ---vm
new Vue({
  // 将app组件放入容器中
  render: h => h(App),

  beforeCreate() {

  }
}).$mount('#app')
