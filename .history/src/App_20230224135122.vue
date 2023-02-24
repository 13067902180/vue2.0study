<template>
  <div id="app">
    <MyHeader @addTodo="addTodo" />
    <MyList :todos="todos" :deleteTodo="deleteTodo" />
    <MyFooter
      :todos="todos"
      @checkAllTodo="checkAllTodo"
      @clearAllTodo="clearAllTodo"
    />
  </div>
</template>

<script>
// 引入组件  组件全放到components
import Test from "./components/Test.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    // 数据在哪操作在哪
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    deleteTodo(_, id) {
      // this.todos = this.todos.filter((todo) => todo.id !== id);
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    checkTodo(_, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    // 更新一个todo'
    updataTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
  },

  // 注册组件
  components: {
    Test,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
