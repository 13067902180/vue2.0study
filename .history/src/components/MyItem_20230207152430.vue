<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>{{ title }}</span>
    </label>
    <button class="btn brn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: [],
  data() {},
};
</script>

<style>
</style>