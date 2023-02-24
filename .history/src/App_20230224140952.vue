<template>
  <div id="app">
    <Test></Test>
    <Test2></Test2>
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
    Test2,
  },
};
</script>

<style>
</style>
