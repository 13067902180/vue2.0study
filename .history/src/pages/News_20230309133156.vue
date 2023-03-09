<template>
  <ul>
    <li :style="{ opacity }">学习Vue</li>
    <li>new001 <input type="text" /></li>
    <li>new002 <input type="text" /></li>
    <li>new003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "",
  data() {
    return {
      opacity: 1,
    };
  },
  beforeDestroy() {
    console.log("news组件即将被销毁了");
  },
  mounted() {},
  // 激活 和失活的
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      console.log("@");
      if (this.opacity <= 0) this, (this.opacity = 1);
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>