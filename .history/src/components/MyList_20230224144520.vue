<template>
  <ul class="todo-main">
    <transition-group name="todo" appear="">
      <MyItem v-for="item in todos" :key="item.id" :todo="item"></MyItem>
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props: ["todos"],
};
</script>

<style>
.todo-enter-active {
  animation: atguigu 0.5s linear;
}
.todo-leave-active {
  animation: atguigu 0.5s linear reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>