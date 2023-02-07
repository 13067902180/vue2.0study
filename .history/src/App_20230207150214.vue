<template>
  <div id="app"></div>
</template>

<script>
// 引入组件  组件全放到components
import MyHeaders from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "欢迎Vue",
    };
  },

  // 注册组件
  components: {
    MyHeaders,
    MyFooter,
    MyList,
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
