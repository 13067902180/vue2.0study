<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 组件名字 -->
      <keep-alive :include="[News]">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  // beforeDestroy() {
  //   console.log("Home组件即将被销毁");
  // },
  // mounted() {
  //   console.log("Home组件挂载完毕");
  // },
};
</script>

<style>
</style>