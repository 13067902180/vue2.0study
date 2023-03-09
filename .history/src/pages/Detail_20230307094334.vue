<template>
  <ul>
    <li>消息编号:{{ this.$route.params.id }}</li>
    <li>消息标题:{{ this.$route.params.title }}</li>
    <li>{{ a }}</li>
    <li>{{ b }}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail",
  props: ["a", "b"],

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>