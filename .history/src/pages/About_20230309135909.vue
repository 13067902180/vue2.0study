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
  beforeRouteEnter(to, from, next) {
    // ...
  },
  // 通过路由规则离开该组件时调用
  beforeRouteLeave(to, from, next) {
    // next();
  },
};
</script>

<style>
</style>