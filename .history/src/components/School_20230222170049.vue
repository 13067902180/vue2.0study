<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "Vue12346",
      address: "xiaoshan",
    };
  },
  mounted() {
    this.x.$on("hello", (data) => {
      console.log("我是school组件收到了数据", data);
    });
  },
};
</script>

<style scoped lang="less">
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>