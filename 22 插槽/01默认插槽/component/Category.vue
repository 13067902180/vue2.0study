<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽等组件使用者对插槽进行填充 -->
    <slot></slot>
    <!-- <ul>
      <li v-for="(item, index) in ListData" :key="index">{{ item }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background: skyblue;
  width: 200px;
  height: 300px;
}
.h3 {
  text-align: center;
  background: orange;
}
</style>