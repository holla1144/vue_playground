<template>
  <div>
    <Header v-once></Header>
    <AddCard />
  </div>
</template>

<script>
  import AddCard from "./components/AddCard.vue"
  import Header from "./components/Header.vue";

  export default {
    components: {
      AddCard,
      Header
    }
  };
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
