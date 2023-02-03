<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
    <h2>性别：{{ sex }}</h2>
  </div>
</template>
  
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      msg: "props传值",
    };
  },
  // 接受数据
  // props: ["name", "sex", "age"],简单声明接受
  // 接受同时对数据进行类型限制
  props: {
    name: String,
    age: Number,
    sex: String,
  },
};
</script>
