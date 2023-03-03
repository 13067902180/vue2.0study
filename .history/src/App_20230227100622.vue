<template>
  <div class="sontainer">
    <Search />
    <List></List>
  </div>
</template>

<script>
import List from "./component/List.vue";

import Search from "./component/Search.vue";
// 引入组件  组件全放到components

export default {
  name: "App",
  components: {
    List,
    Search,
  },
};
</script>

<style>
</style>
