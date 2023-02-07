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
    <button class="btn brn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
};
</script>
 
<style scoped>
li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
</style>