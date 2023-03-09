// 该文件专门用于创建整个应用的路由器


import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [{
        // 一级路由
        name: "guanyu",
        path: '/about',
        component: About,
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'news',
                component: News,
            },
            {
                path: 'message',
                component: Message,
                children: [
                    {
                        name: "xiangqing",
                        // 占位符占位数据 在params写法里 动态路由
                        // path: 'detail/:id/:title',
                        path: 'detail',
                        component: Detail,
                        // props的第一种写法，值为对象，该对象中的所有key-value 已props传给detail组件
                        // props: { a: 1, b: 'hello' }
                        // props的第二种写法，值为布尔值，若布尔值为真就会把该组件收到的说有params参数以props的形式传给detail组件
                        // props: true,
                        // 第三种写法，值为函数
                        // props($router) {
                        // 解构赋值
                        props({ query }) {
                            //   props({query:{id,title}}){
                            // return { id: $router.query.id, title: $router.query.title }
                            return { id: query.id, title: query.title }
                            //  return { id: id, title:title }
                        }
                    }

                ]
            }
        ]
    },
    ]
})
