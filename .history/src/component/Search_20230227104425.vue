<template>
  <section class="jumbtron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updataListData", {
        isFirst: false,
        isLoading: true,
        reeMsg: "",
        users: [],
      });
      // cors后端解决了跨域
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          console.log("请求成功了", response.data.items);
          this.$bus.$emit("updataListData", {
            isFirst: false,
            isLoading: false,
            reeMsg: "",
            users: response.data.items,
          });
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style></style>
