<template>
  <li>
    <label>
      <!-- <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      /> -->
      <input type="checkbox" @click="handleCheck(todo.id)" />
      <!-- 不建议 vue无法监视props内部内容 只监视props是修改了props -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn brn-danger" @click="handeleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //   this.checkTodo(id);
      // this.$bus.$emit("checkTodo", id);
      pubsub.publish("checkTodo", id);
    },
    handeleDelete(id) {
      if (confirm("确定删除吗？")) {
        pubsub.publish("deleteTodo", id);
        // this.$bus.$emit("deleteTodo", id);
        //   this.deleteTodo(id);
      }
    },
  },
};
</script>
 
<style scoped>
li:hover {
  background: #ddd;
}
li button {
  display: none;
}
li:hover button {
  display: inline-block;
}
</style>