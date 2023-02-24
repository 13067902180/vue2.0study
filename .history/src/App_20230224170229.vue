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
      axios.get("http://localhost:500/students").then(
        // 成功了输出一句话

        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败
        (error) => {
          console.log("请求成功了", error.data);
        }
      );
    },
  },
};
</script>

<style>
</style>
