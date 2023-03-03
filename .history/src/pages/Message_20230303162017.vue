<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link>
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