<template>
  <div class="container">
    <Category title="游戏" :ListData="games">
      <template scope="atguigu">
        <ul>
          <li v-for="(item, index) in atguigu.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏" :ListData="games">
      <ol>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ol>
    </Category>
    <Category title="游戏" :ListData="games">
      <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
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
