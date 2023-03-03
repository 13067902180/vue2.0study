<template>
  <div id="app">
    <div class="sontainer">
      <Search />
      <List></List>
    </div>
  </div>
</template>

<script>
import List from "./component/List.vue";

import Search from "./component/Search.vue";
// 引入组件  组件全放到components

export default {
  name: "App",
  comments: {
    List,
    Search,
  },
};
</script>

<style>
</style>
