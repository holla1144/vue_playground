<template>
  <div>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Header from "./components/header/Header.vue";

  export default {
    components: {
      Header
    }
  };
</script>

<style lang="scss">
  @import "./styles/Variables";
  @import "./styles/Base";
  @import "./styles/Text";
</style>
