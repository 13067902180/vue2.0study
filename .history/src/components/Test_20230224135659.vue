
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
}
.come {
  animation: atguigu 1s linner;
}
@keyframes atguigu {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>>
