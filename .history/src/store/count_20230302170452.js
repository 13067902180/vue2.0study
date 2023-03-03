import axios from "axios";

export default {
    // 开启命名空间
    namespaced: true,
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
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit()
                },
                error => {

                }
            )
        }
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