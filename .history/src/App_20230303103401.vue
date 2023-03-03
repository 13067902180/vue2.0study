<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面跳转 -->
          <!-- <a href="./about.html" class="list-group-item active" >ABOUT</a> -->
          <!-- <a href="./home/html" class="list-group-item">HOME</a> -->
          <router-link class="list-group-item active" to="/about"></router-link>
          <router-link class="list-group-item" to="/home"></router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <h2>我是About的内容</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件  组件全放到components

export default {
  name: "App",
};
</script>

<style>
</style>
