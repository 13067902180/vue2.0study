<template>
  <div class="count">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和为放大十倍:{{ bigsum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h4></h4>
    <select name="" id="" v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为基数+</button>
    <button @click="incrementWait">缓一缓在+</button>
  </div>
</template>

<script>
// map映射的意思
import { mapGetters, mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 自己写
    // sum() {
    //   return this.$store.state.sum;
    // },
    // bigsum() {
    //   return this.$store.getters.bigsum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // ...是es6语法 把对象里的数据都拿出来 借助mapstate生成计算属性，从state里读取数据（对象写法）
    ...mapState({ sum: "sum", school: "school", subject: "subject" }),
  },
  methods: {
    increment() {
      // 跳过action 直接commit到 mutations
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style>
</style>