<template>
  <!-- 展示用户列表 -->
  <div class="row">
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url"><img :src="user.avatar_url" alt="" /></a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中。。。</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updataListData", (dataobj) => {
      // 通过es6语法把info里和dataobj重名属性更换为dataobj里属性
      this.infor = { ...this.info, ...this.dataobj };
      console.log("我是List组件收到了数据", dataobj);
      console.log(this.info);
    });
  },
};
</script>
   
<style>
</style>