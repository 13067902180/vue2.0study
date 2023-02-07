<template>
  <li>
    <label>
      <!-- <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      /> -->
      <input type="checkbox" v-model="todo.done" />
      <!-- 不建议 vue无法监视props内部内容 只监视props是修改了props -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn brn-danger" @click="handeleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "deleteTodo"],
  methods: {
    handeleDelete(id) {
      if (confirm("确定删除吗？")) {
        //
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