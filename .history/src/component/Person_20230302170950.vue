<template>
  <div>
    <h1>人员列表</h1>
    <h3>count组件求和为{{ sum }}</h3>
    <h2>列表第一个人的名字}{{ firstPersonName }}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加姓王的人</button>
    <button @click="addPerson">添加axios数据</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
// import { mapState } from "vuex";
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
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      // .和/不能一起懂es语法 .转化为[]
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    add() {
      const PersonObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", PersonObj);
      this.name = "";
    },
    addWang() {
      const PersonObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", PersonObj);
      this.name = "";
    },
    addPerson() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
};
</script>

<style>
</style>