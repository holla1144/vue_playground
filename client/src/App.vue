<template>
  <div>
    <Header></Header>
    <main>
      <div v-if="loading">
        Loading . . .
      </div>
      <router-view v-else></router-view>
    </main>
  </div>
</template>

<script>
  import { CHECK_AUTH } from "./store/actions.type";
  import Header from "./components/Header/Header.vue";

  export default {
    mounted() {
      this.$store.dispatch(`auth/${CHECK_AUTH}`)
        .then(() => {
          this.loading = false;
        })
        .catch(e => {
          console.error(e);
        });
    },

    data() {
      return {
        loading: true
      }
    },

    components: {
      Header
    }
  };
</script>

<style lang="scss" scoped>
  main {
    padding: 1em;
  }
</style>
