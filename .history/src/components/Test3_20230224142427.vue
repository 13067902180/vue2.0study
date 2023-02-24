
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition-group name="hello" :appear="true">
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
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
</style>>
