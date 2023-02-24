<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h1>{{ number }}</h1>
    <button @click="add">点我number加1</button>
    <button @click="sendSchoolName">把学生名给App</button>
    <button v-on:click="unbind">解绑atguigu事件</button>
    <button v-on:click="death">销毁student组件实例</button>
  </div>
</template>
  
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add调用了");
      this.number++;
    },
    sendSchoolName() {
      // 触发student实例身上的atguigu事件
      this.$emit("atguigu", this.name, this.sex);
      this.$emit("demo");
    },
    unbind() {
      // 解绑一个自定义事件
      // this.$off("atguigu");
      // 解绑多个自定义事件
      // this.$off(["atguigu", "demo"]);
      // 解绑所有的自定义事件
      this.$off();
    },
    death() {
      // 销毁了当前student组件的实例，销毁后所有student实例的自定义事件都不奏效
      this.$destroy();
    },
  },
};
</script>
<style scoped>
.student {
  background: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>>

