<template>
  <div class="container">
    <Category />
  </div>
</template>

<script>
import Category from "./component/Categoty.vue";

// 引入组件  组件全放到components

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
</style>
