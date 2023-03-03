<template>
  <div class="container">
    <Category title="游戏" :ListData="games">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="footer" slot="footer">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>
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
.container,
.footer {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>
