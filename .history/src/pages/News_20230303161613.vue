<template>
  <ul>
    <li>new001</li>
    <li>new002</li>
    <li>new003</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style>
</style>