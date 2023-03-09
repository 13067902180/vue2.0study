<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  beforeDestroy() {
    console.log("ABOUT组件即将被销毁");
  },
  mounted() {
    console.log("ABOUT组件挂载完毕");
    console.log(this.$route);
  },
  // 通过路由规则进入该组件时调用
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    console.log("app-beforeRouterEnter");
    // if (to.meta.isAuth) {//判断是否需要权限
    //         if (localStorage.getItem('school') === 'atguigu') {
    //             // next放行
    //             next();
    //         } else {
    //             alert('学校名不对无权查看')
    //         }
    //     } else {
    //         next()
    //     }
    // ...
  },
  // 通过路由规则离开该组件时调用
  // eslint-disable-next-line no-unused-vars
  beforeRouteLeave(to, from, next) {
    // next();
  },
};
</script>

<style>
</style>