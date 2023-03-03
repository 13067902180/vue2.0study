<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" />
    <button>添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">xxxx</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  computed: {
    personList() {
      return this.$store.state.personList;
    },
  },
};
</script>

<style>
</style>