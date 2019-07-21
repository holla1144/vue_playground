<template>
    <header class="w-100 bb">
      <Logo />
      <nav>
        <ul>
          <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
          <li v-if="isLoggedIn" @click="logOut"><a>Log out</a></li>
          <li v-else><router-link :to="{ name: 'logIn' }">Log In/Register</router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
  import Logo from "./Logo.vue";
  import router from "../../router";
  import { LOGOUT } from "../../store/actions.type";

  export default {
    computed: {
      isLoggedIn() {
        return this.$store.state.auth.isAuthenticated;
      }
    },

    methods: {
      logOut() {
        this.$store.dispatch(`auth/${LOGOUT}`);
        router.push("/");
      }
    },

    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  header {
    align-content: center;
    display: flex;

    nav {
      margin-left: auto;

      ul {
        display: flex;
        height: 100%;
        list-style-type: none;

        li {
          align-items: center;
          cursor: pointer;
          display: flex;
          padding: 0 20px;
        }
      }
    }
  }
</style>