<template>
  <div>
    <ul>
      <li><a href="/message1">message001</a></li>
      <li><a href="/message2">message002</a></li>
      <li><a href="/message3">message003</a></li>
    </ul>
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
        { id: "001", title: "消息001" },
        { id: "001", title: "消息001" },
        { id: "001", title: "消息001" },
      ],
    };
  },
};
</script>

<style>
</style>