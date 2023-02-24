<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <School :getSchoolName="getSchoolName" />
    <!-- 传数据 -->
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
    getSchoolName(name) {
      console.log("app收到了学校名", name);
    },
  },
};
</script>

<style>
#app {
  background: gray;
}
</style>
