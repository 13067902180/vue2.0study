<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名字给app</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "Vue12346",
      address: "xiaoshan",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
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