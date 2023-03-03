<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <a
            href="./home-news.html"
            class="list-group-item"
            active-class="active"
            >News</a
          >
        </li>
        <li>
          <a
            href="./home-news.html"
            class="list-group-item"
            active-class="active"
            >Message</a
          >
        </li>
      </ul>
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