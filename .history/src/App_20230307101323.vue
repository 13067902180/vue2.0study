<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面跳转 -->
          <!-- <a href="./about.html" class="list-group-item active" >ABOUT</a> -->
          <!-- <a href="./home/html" class="list-group-item">HOME</a> -->
          <!-- 开启repalce模式 替换栈顶 -->
          <router-link
            :replace="true"
            class="list-group-item"
            active-class="active"
            :to="{ name: 'guanyu' }"
            >ABOUT</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >HOME</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件  组件全放到components
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
</style>
