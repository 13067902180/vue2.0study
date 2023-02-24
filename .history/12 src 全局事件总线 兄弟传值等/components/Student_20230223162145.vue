<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    sendStudentName() {
      // pubsub.publish("hello", "666");
      // 从vue原型x上调用hello方法
      this.$bus.$emit("hello", 666);
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
</style>
>
