<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" />
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

<style>
</style>