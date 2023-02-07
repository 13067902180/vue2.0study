export default{
    install(Vue){
        // 全局过滤器
        Vue.filters()
        // 全局指令
        Vue.directives()
        // 定义混入
        Vue.mixin()
        // 给vue原型是添加一个方法
        Vue.prototype.hello=()=>{
            alert('你好')
        }
    }
}