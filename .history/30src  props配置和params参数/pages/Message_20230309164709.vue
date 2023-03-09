<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由携带params参数 to的字符串写法-->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->
        <!-- 跳转路由携带params参数 to的对象写法-->
        <!-- 路由传参分为 params 传参与 query 传参

params 传参类似于网络请求中的 post 请求，params 传过去的参数不会显示在地址栏中（但是不能刷新）。params 只能配合 name 使用，如果提供了 path，params 会失效。

query 传参类似于网络请求中的 get 请求，query 传过去的参数会拼接在地址栏中（?name=xx）。query 较为灵活既可以配合 path 使用，也能配合 name 使用（亲测可用）。 -->

        <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
        { id: "004", title: "消息004" },
      ],
    };
  },
};
</script>

<style>
</style>