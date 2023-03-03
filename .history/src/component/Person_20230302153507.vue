<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // ...mapState(["personList"]),
    personList() {
      return this.$store.state.personList;
    },
  },
  methods: {
    add() {
      const PersonObj = { id: nanoid(), name: this.name };
      console.log(PersonObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>