<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="sendSchoolName">把学生名给App</button>
    <button v-on:click="unbind">解绑atguigu事件</button>
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
    };
  },
  methods: {
    sendSchoolName() {
      // 触发student实例身上的atguigu事件
      this.$emit("atguigu", this.name, this.sex);
    },
    unbind() {
      // 解绑一个自定义事件
      this.$off("atguigu");
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

