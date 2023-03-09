<template>
  <ul>
    <li>{{ id }}</li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail",
  props: ["id", "title"],

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>