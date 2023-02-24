<template>
  <li>
    <label>
      <!-- <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      /> -->
      <input type="checkbox" @click="handleCheck(todo.id)" />
      <!-- 不建议 vue无法监视props内部内容 只监视props是修改了props -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button
      class="btn brn-danger"
      v-show="!todo.isEdit"
      @click="handeleEdit(todo)"
    >
      编辑
    </button>
    <button class="btn brn-danger" @click="handeleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //   this.checkTodo(id);
      // this.$bus.$emit("checkTodo", id);
      pubsub.publish("checkTodo", id);
    },
    handeleDelete(id) {
      if (confirm("确定删除吗？")) {
        pubsub.publish("deleteTodo", id);
        // this.$bus.$emit("deleteTodo", id);
        //   this.deleteTodo(id);
      }
    },
    handeleEdit(todo) {
      //  如果todo身上没有添加  以后就修改
      // eslint-disable-next-line no-prototype-builtins
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      // focus获取焦点 由于vue还没处理代码生效
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点回调实现修改逻辑
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("内容不能为空");
      this.$bus.$emit("updataTodo", todo.id, e.target.value);
    },
  },
};
</script>
 
<style scoped>
li:hover {
  background: #ddd;
}
li button {
  display: none;
}
li:hover button {
  display: inline-block;
}
</style>