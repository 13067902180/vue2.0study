//引入vue
import Vue from 'vue'
//app所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建vue实例对象  ---vm
new Vue({
  // 将app组件放入容器中
  render: h => h(App),
  // render(creat){
  //  return creat('h1','NIHAO')
  // }
  // 等于el：'#app'
}).$mount('#app')
