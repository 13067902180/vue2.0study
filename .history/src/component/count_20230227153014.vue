<template>
  <div class="count">
    <h1>当前求和为:</h1>
    <select name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button>+</button>
    <button>-</button>
    <button>当前求和为基数+</button>
    <button>缓一缓在+</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
  data() {
    return {
      sum: 0,
    };
  },
};
</script>

<style>
</style>