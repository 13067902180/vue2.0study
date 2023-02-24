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
      // 请求返回的是一个promise异步函数  跨域了请求发送成功 接收成功 浏览器发现跨域 劫持了  可以加特殊响应头
      axios.get("http://localhost:500/students").then(
        // 成功了输出数据
        (response) => {
          console.log("请求成功了", response.data);
        },
        // 失败输出失败原因
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>
