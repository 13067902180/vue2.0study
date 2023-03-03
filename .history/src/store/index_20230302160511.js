// 该文件应该用于创建Vuex中最为核心的store
// 准备actions--用于响应组件中的动作
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 求和功能相关的配置
const countOptions = {
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations里的加调用了', state, value);
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations里的JIAN调用了', state, value);
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: "xy",
        subject: 'qianduan',
    },
    getters: {
        bigsum(state) {
            return state.sum * 10
        }
    }
}
// 人员管理相关的配置
const personOptions = {
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations的ADD_PERSON被调用了');
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {}
}



// 创建并且导出或者暴露store
export default new Vuex.Store({
    // 模块
    modules: {
        countOptions,
        personOptions,
    }
})

