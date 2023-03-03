<template>
  <div class="sontainer">
    <Category />
  </div>
</template>

<script>
import Categoty from "./component/Categoty.vue";

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
