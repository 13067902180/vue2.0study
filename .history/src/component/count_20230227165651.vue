<template>
  <div class="count">
    <h1>当前求和为:{{}}</h1>
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
      this.$store.dispatch("jia", this.n);
    },
    decrement() {},
    incrementOdd() {},
    incrementWait() {
      setTimeout(() => {}, 500);
    },
  },
};
</script>

<style>
</style>