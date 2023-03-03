// 该文件应该用于创建Vuex中最为核心的store
// 准备actions--用于响应组件中的动作
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
    // 上下文 commit和dispatch
    jia(context, value) {
        console.log('action里的加调用了', value);
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        console.log('action里的加调用了', value);
        if (context
            .state.sum % 2) {
            context.commit('JIA', value)
        }

    },
}
// 准备mutations--用于操作数据
const mutations = {
    JIA(state, value) {
        console.log('mutations里的加调用了', state, value);
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations里的JIAN调用了', state, value);
        state.sum -= value
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

