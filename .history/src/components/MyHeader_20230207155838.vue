<template>
  <div class="todo-header">
    <input type="text" name="" id="" @keyup.enter="add" v-model="title" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  props: ["addTodo"],
  methods: {
    add(e) {
      // 将输入包装陈TODO对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      this.addTodo(todoObj);
      this.title = "";
    },
  },
};
</script>

<style>
</style>