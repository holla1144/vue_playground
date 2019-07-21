<template>
  <div>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import { REGISTER } from "./store/actions.type";
  import Header from "./components/header/Header.vue";

  export default {
    mounted() {
      this.$store.dispatch(`auth/${REGISTER}`, {username: "max", password: "lemon"})
    },

    components: {
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

  main {
    padding: 1em;
  }
</style>
