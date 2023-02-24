<template>
  <div id="app">
    <Test></Test>
  </div>
</template>

<script>
// 引入组件  组件全放到components
import Test from "./components/Test.vue";
export default {
  name: "App",

  // 注册组件
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Test,
  },
};
</script>

<style>
</style>
