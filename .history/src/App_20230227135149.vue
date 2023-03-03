<template>
  <div class="container">
    <Category />
    <Category />
    <Category />
  </div>
</template>

<script>
import Category from "./component/Category.vue";

// 引入组件  组件全放到components

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
.container {
  display: flex;
}
</style>
