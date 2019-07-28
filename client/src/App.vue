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
  import { CHECK_AUTH, FETCH_COLLECTIONS } from "./store/actions.type";
  import Header from "./components/Header/Header.vue";

  export default {
    async mounted() {
      try {
        await this.$store.dispatch(`auth/${CHECK_AUTH}`)
      } catch (e) {}

      if (this.$store.state.auth.isAuthenticated) {
        try {
          await this.$store.dispatch(`collection/${FETCH_COLLECTIONS}`);
        } catch(e) {}
      }

      this.loading = false;
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
