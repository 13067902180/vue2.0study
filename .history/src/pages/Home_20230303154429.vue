<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            href="./home-news.html"
            class="list-group-item"
            active-class="active"
            to="news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            href="./home-news.html"
            class="list-group-item"
            active-class="active"
            to="message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
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