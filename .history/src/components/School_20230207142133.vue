<template>
  <div class="demo">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 局部混合
import { hunhe, hunhe2 } from "../mixin";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "Vue12346",
      address: "xiaoshan",
      x: 10,
    };
  },
  mixins: [hunhe, hunhe2],
  mounted() {
    console.log("你好2");
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>