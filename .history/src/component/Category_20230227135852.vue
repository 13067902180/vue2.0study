<template>
  <div class="category">
    <h3>XXXX分类</h3>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["ListData", "title"],
};
</script>

<style>
.category {
  background: skyblue;
  widows: 200px;
  height: 300px;
}
.h3 {
  text-align: center;
  background: orange;
}
</style>