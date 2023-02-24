<template>
  <ul class="todo-main">
    <MyItem
      v-for="item in todos"
      :key="item.id"
      :todo="item"
      :deleteTodo="deleteTodo"
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props: ["todos", "deleteTodo"],
};
</script>

<style>
</style>