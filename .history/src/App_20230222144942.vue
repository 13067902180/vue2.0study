<template>
  <div id="app">
    <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现 子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!--  通过绑定一个自定义事件实现 子给父传递数据 -->
    <!-- <Student @atguigu.once="getstudentName" /> -->
    <!--  通过绑定一个自定义事件实现 子给父传递数据 更加灵活可以加定时器3秒后绑定-->
    <Student ref="student" @demo="m1" />
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
  methods: {
    getSchoolName(name) {
      this.studentName = name;
      console.log("app收到了学校名", name);
    },
    getstudentName(name, ...params) {
      console.log("app收到了学生名", name, params);
    },
    m1() {
      console.log("demo被触发了");
    },
  },
  mounted() {
    // $on 是触发 在模板外了用this once一次
    // setTimeout(() => {
    //   this.$refs.student.$on("atguigu", this.getstudentName);
    // }, 3000);
    // this.$refs.student.$on("atguigu", function (name, ...params) {
    //   console.log("app收到了学生名", name, params);
    //   // 谁触发this指向谁这个指向atguigu的函数  上面的是getstudentName
    //   console.log(this);
    //   this.studentName = name;
    // });
    this.$refs.student.$on("atguigu", (name, ...params) => {
      console.log("app收到了学生名", name, params);
      // 箭头函数没有this 往外找mounted的this
      console.log(this);
      this.studentName = name;
    });
  },
};
</script>

<style>
#app {
  background: gray;
}
</style>
