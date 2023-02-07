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
    add() {
      // 校验数据
      if (!this.title) return;
      // 将输入包装陈TODO对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // 通知app组件去添加有一个todo对象
      this.addTodo(todoObj);
      // 清空输入
      this.title = "";
    },
  },
};
</script>

<style>
</style>