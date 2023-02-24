<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现 子给父传递数据 -->
    <School />
    <!--  通过绑定一个自定义事件实现 子给父传递数据 -->
    <!-- <Student @atguigu.once="getstudentName" /> -->
    <!--  通过绑定一个自定义事件实现 子给父传递数据 更加灵活可以加定时器3秒后绑定 加上native原生的 给大的div绑定事件所以组件里只有一个根元素 -->
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
      studentName: "",
    };
  },

  // 注册组件
  components: {
    School,
    Student,
  },
};
</script>

<style>
#app {
  background: gray;
}
</style>
