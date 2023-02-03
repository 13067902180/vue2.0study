<template>
  <div id="app">
    <School />
    <Student />
  </div>
</template>

<script>
// 引入组件  组件全放到components
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
