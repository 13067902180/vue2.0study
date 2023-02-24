<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
// 引入组件  组件全放到components
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getStudents() {
      // 请求返回的是一个promise异步函数
      axios.get("http://localhost:500/students").then();
    },
  },
};
</script>

<style>
</style>
