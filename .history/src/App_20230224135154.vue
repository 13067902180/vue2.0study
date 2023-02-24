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

  // 注册组件
  components: {
    // eslint-disable-next-line vue/no-unused-components
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
