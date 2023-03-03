<template>
  <!-- 展示用户列表 -->
  <div class="row">
    <div
      v-show="users.length"
      class="card"
      v-for="user in users"
      :key="user.login"
    >
      <a :href="user.html_url"><img :src="user.avatar_url" alt="" /></a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h1>欢迎使用</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  data() {
    return {
      isFirs: true,
      isLoading: false,
      reeMsgb: "",
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (users) => {
      console.log("我是List组件收到了数据", users);
      this.users = users;
    });
  },
};
</script>
   
<style>
</style>