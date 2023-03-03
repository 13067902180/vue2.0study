<template>
  <ul>
    <li>消息编号:{{ this.$route.query.id }}</li>
    <li>消息标题:{{ this.$route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail",
  mounted() {
    console.log(this.$route.q);
  },
};
</script>

<style>
</style>