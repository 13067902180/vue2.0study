
<template>
  <div>
    <button>显示/隐藏</button>
    <h1>你好啊！</h1>
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
