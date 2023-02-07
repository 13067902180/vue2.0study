<template>
  <div class="todo-header">
    <input type="text" name="" id="" @keyup.enter="add" v-model="title" />
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {},
  },
};
</script>

<style>
</style>