<template>
    <header class="w-100 bb">
      <Logo />
      <nav>
        <ul>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
</template>

<script>
  import Logo from "./Logo.vue";

  export default {
    data() {
        return {

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
          display: flex;
          padding: 0 20px;
        }
      }
    }
  }
</style>