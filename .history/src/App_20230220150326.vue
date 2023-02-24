<template>
  <div id="app">
    <MyHeader :addTodo="addTodo" />
    <MyList :todos="todos" :deleteTodo="deleteTodo" />
    <MyFooter
      :todos="todos"
      :checkAllTodo="checkAllTodo"
      :clearAllTodo="clearAllTodo"
    />
  </div>
</template>

<script>
// 引入组件  组件全放到components
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 数据在哪操作在哪
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    deleteTodo(id) {
      // this.todos = this.todos.filter((todo) => todo.id !== id);
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
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
  },
  watch: {
    // 浅层监视无法监视内部的done变化
    // todos(value) {
    //   localStorage.setItem("todos", JSON.stringify(value));
    // },
    todos: {
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  // 注册组件
  components: {
    MyHeader,
    MyFooter,
    MyList,
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
