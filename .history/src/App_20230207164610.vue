<template>
  <div id="app">
    <MyHeader :addTodo="addTodo" />
    <MyList :todos="todos" :deleteTodo="deleteTodo" />
    <MyFooter />
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
      todos: [
        { id: "001", title: "第一", done: true },
        { id: "002", title: "第二", done: false },
        { id: "003", title: "第三", done: true },
      ],
    };
  },
  methods: {
    // 数据在哪操作在哪
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        console.log(id);
        console.log(this.todos.id);
        return this.todos.id !== id;
      });
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
