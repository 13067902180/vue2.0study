//引入vue 精简版  正式版是vue.js dist/vue.js
import Vue from 'vue'
//app所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建vue实例对象  ---vm
new Vue({
  // 将app组件放入容器中
  render: h => h(App),
  // 引用了精简版vue没有模板解析器 要用render函数不能用template
  // vue包含模板解析器和vue核心
  // render(creat){
  //  return creat('h1','NIHAO')
  // }
  // 等于el：'#app'
}).$mount('#app')
