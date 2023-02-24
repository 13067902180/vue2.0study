<template>
  <div class="todo-footer" v-show="total">
    <label for="">
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span
      >/全部{{ total }}</span
    >
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    doneTotal() {
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done) i++;
      // });
      // return i;
      // const x= this.todos.reduce((pre, current) => {
      //   console.log("@", pre);
      //   return pre + (current.done ? 1 : 0);
      // }, 0);
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set() {
        return;
      },
    },
  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
  },
};
</script>

<style>
</style>