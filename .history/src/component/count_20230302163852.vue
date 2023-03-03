<template>
  <div class="count">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和为放大十倍:{{ bigsum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3>person总人数是{{ personList.length }}</h3>
    <select name="" id="" v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为基数+</button>
    <button @click="incrementWait(n)">缓一缓在+</button>
  </div>
</template>

<script>
// map映射的意思
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

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
    // ...是es6语法 把对象里的数据都拿出来 借助mapstate生成计算属性，从state里读取数据（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // ...是es6语法 把对象里的数据都拿出来 借助mapstate生成计算属性，从state里读取数据（数组写法） 生成的名字和读取的名字一样的
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    // ...mapGetters(['bigsum'])
    ...mapGetters({ bigsum: "bigsum" }),
  },
  methods: {
    // 借助mapmutations生成对应的方法，方法会调动commit去联系mutations（对象写法）
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 借助mapmutations生成对应的方法，方法会调动commit去联系mutations（数组写法）上下名字一样
    // ...mapMutations(['JIA','JIAN']),
    // increment() {
    //   // 跳过action 直接commit到 mutations
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    // ...mapActions(["jiaOdd", "jiaWait"]),
  },
};
</script>

<style>
</style>