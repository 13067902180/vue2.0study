<template>
  <section class="jumbtron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />
      <button>Search</button>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
};
</script>

<style></style>
