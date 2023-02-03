<template>
  <div id="app">
    <img src="./assets/logo.png" alt="" />
    <h1 v-text="msg"></h1>
    <button @click="showDom">点我展示dom元素</button>
    <School />
    <Student />
  </div>
</template>

<script>
// 引入组件  组件全放到components
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "欢Vue",
    };
  },
  // 注册组件
  components: {
    School,
    Student,
  },
  methods: {
    showDom() {
      console.log(1);
    },
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
