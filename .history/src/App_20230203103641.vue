<template>
  <div id="app">
    <img src="./assets/logo.png" alt="" />
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的dom元素</button>
    <School ref="sch" />
    <Student />
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
      msg: "欢迎Vue",
    };
  },
  // 注册组件
  components: {
    School,
    Student,
  },
  methods: {
    showDom() {
      console.log(this.$refs.sch); //组件的实例对象 vuecomponents
      console.log(this.$refs.title); //真实dom元素
      console.log(this.$refs.btn); //真实dom元素
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
