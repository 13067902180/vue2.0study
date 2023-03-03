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
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {},
        // eslint-disable-next-line no-unused-vars
        (error) => {}
      );
    },
  },
};
</script>

<style></style>
