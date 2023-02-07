<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
import { hunhe } from "../mixin";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "Vue",
      address: "xiaoshan",
    };
  },
  mixins: [hunhe],
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>