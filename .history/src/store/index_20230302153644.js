// 该文件应该用于创建Vuex中最为核心的store
// 准备actions--用于响应组件中的动作
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
    // 上下文 context里有commit和dispatch和数据
    jia(context, value) {
        console.log('action里的加调用了', value);
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        console.log('action里的加调用了', value);
        context.dispatch('demo1', value)
    },
    demo1(context, value) {
        console.log('action里的加调用了demo1', value);
        context.dispatch('demo2', value)
    },
    demo2(context, value) {
        console.log('action里的加调用了demo2', value);
        // 上下文的state用来判断 dispatch来分解流程
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('action里的加调用了', value);
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
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
    },
    ADD_PERSON(state, value) {
        console.log('mutations的 ADD_PERSON被调用了');
    }
}
// state--用于存储数据
const state = {
    sum: 0,
    school: "xy",
    subject: 'qianduan',
    personList: [
        { id: '001', name: '张三' }
    ]
}
// 准备getters用于将state的数据进行加工
const getters = {
    bigsum(state) {
        return state.sum * 10
    }
}

// 创建并且导出或者暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters
})

