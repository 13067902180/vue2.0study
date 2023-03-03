<template>
  <div class="container">
    <count></count>
  </div>
</template>

<script>
import count from "./component/count.vue";

// 引入组件  组件全放到components

export default {
  name: "App",
  components: {
    count,
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
