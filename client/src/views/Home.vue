<template>
  <div>
    <Collections v-if="isLoggedIn" :collections="collections" />
    <div v-else>
      <h1>THIS IS A LANDING PAGE FOR PEOPLE WHO HAVEN'T REGISTERED</h1>
    </div>
  </div>
</template>

<script>
  import Collections from "../components/Collections.vue";

  export default {
    computed: {
      collections() {
        return this.$store.state.collections;
      },

      isLoggedIn() {
        return this.$store.state.auth.isAuthenticated;
      }
    },

    components: {
      Collections
    }
  };
</script>