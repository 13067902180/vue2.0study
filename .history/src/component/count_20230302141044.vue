<template>
  <div class="count">
    <h1>当前求和为:{{ $store.state.sum }}</h1>
    <h3>当前求和为放大十倍:{{ $store.state.sum }}</h3>
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
  data() {
    return {
      n: 1,
    };
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