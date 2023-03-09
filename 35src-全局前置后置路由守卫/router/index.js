// 该文件专门用于创建整个应用的路由器


import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [{
        // 一级路由
        name: "guanyu",
        path: '/about',
        component: About,
        // meta路由元信息
        meta: { isAuth: false, title: "关于" }
    },
    {
        name: "zhuye",
        path: '/home',
        component: Home,
        children: [
            {
                name: "xinwen",
                path: 'news',
                component: News,
                meta: { isAuth: true, title: "新闻" }
            },
            {
                name: "xiaoxi",
                path: 'message',
                component: Message,
                meta: { isAuth: true, title: "消息" },
                children: [
                    {
                        name: "xiangqing",
                        // 占位符占位数据 在params里
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
// 全局前置路由守卫----初始化的时候被调用，每次切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置守卫');
    if (to.meta.isAuth) {//判断是否需要权限
        if (localStorage.getItem('school') === 'atguigu') {
            // next放行
            next();
        } else {
            alert('学校名不对无权查看')
        }
    } else {
        next()
    }
});
// 全局后置路由守卫----初始化的时候被调用，每次切换之后被调用
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    console.log('后置守卫');
    document.title = to.meta.title || '硅谷'
});
export default router