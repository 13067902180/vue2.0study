<template>
  <div class="row">
    <div class="card" v-for="user in users" :key="user.login">
      <a :href="user.html_url"><img :src="user.avatar_url" alt="" /></a>
      <p class="card-text">{{ user.login }}</p>
    </div>
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