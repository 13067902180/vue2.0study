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
  },
};
</script>

<style>
</style>