<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
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
};
</script>
