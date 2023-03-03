<template>
  <div class="container">
    <Category :ListData="foods" />
    <Category :ListData="games" />
    <Category :ListData="films" />
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
  data() {
    return {
      foods: ["火锅", "烧烤", "火锅", "烧烤"],
      games: ["火锅1", "烧烤", "火锅", "烧烤"],
      films: ["火锅2", "烧烤", "火锅", "烧烤"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
