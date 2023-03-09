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
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  beforeDestroy() {
    console.log("news组件即将被销毁了");
    clearInterval(this.timer);
  },
  mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      console.log("@");
      if (this.opacity <= 0) this, (this.opacity = 1);
    }, 16);
  },
};
</script>

<style>
</style>