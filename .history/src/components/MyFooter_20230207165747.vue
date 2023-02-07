<template>
  <div class="todo-footer">
    <label for="">
      <input type="checkbox" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span
      >/全部{{ todos.length }}</span
    >
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    doneTotal() {},
  },
};
</script>

<style>
</style>