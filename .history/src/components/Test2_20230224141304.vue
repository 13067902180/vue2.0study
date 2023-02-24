
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <h1 v-show="isShow">你好啊！</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style  scoped>
h1 {
  background: orange;
  transition: 0.5s linear;
}
/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0px);
}

.hello-leave-active {
  animation: atguigu 1s linear reverse;
}
</style>>
