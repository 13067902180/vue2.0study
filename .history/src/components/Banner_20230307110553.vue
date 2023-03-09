<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试go</button>
    </div>
  </div>
</template>

<script>
import router from "27src- 路由的基本使用和多级路由/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test() {
      this.$router.go(-2);
    },
  },
};
</script>

<style>
</style>