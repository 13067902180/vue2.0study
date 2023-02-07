<template>
  <ul class="todo-main">
    <MyItem></MyItem>
    <MyItem></MyItem>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  data() {
    return {
      todos: [
        { id: "001", title: "第一", done: true },
        { id: "002", title: "第二", done: false },
        { id: "003", title: "第三", done: true },
      ],
    };
  },
};
</script>

<style>
</style>