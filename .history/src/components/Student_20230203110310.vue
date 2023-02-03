<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="updateAge">加1</button>
  </div>
</template>
  
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      msg: "props传值",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      return this.myAge + 1;
    },
  },
  // 优先接受props
  // 接受数据
  // props: ["name", "sex", "age"],简单声明接受
  // 接受同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },
  // 接受同时对数据进行类型限制 默认值指定  必要性的限制
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true, // name是必要的
    },
    age: {
      type: Number, //name的类型是数字
      default: 99, // 默认值99
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>
