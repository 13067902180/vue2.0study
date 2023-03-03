// 该文件应该用于创建Vuex中最为核心的store
// 准备actions--用于响应组件中的动作
import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)



// 创建并且导出或者暴露store
export default new Vuex.Store({
    // 模块
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
})

