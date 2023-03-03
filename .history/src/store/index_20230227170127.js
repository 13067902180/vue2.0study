// 该文件应该用于创建Vuex中最为核心的store
// 准备actions--用于响应组件中的动作
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
    // 上下文
    jia(context, value) {
        console.log('action里的加调用了', value);
        context.context('JIA', value)
    }
}
// 准备actions--用于操作数据
const mutations = {
    JIA() {

    }
}
// state--用于存储数据
const state = {
    sum: 0
}

// 创建并且导出或者暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})

