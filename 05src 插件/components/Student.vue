<template>
  <div>
    <h2 @click="showName">学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
  </div>
</template>
  
  <script>
import { hunhe } from "../mixin";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      msg: "props传值",
      name: "张三",
      sex: "男",
    };
  },
  mixins: [hunhe],
};
</script>
