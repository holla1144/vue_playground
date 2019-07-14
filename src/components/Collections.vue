<template>
  <div>
    <div class="CardSets">
      <CardSet
        v-for="cardSet in collections"
        :cardSet="cardSet"
        :key="cardSet.name"
      />
    </div>
    <button class="br4 pointer" @click="handleClick">add</button>
  </div>
</template>
<script>
  import CardSet from "./CardSet.vue";

  export default {
    props: ["collections", "handleClick"],
    components: { CardSet }
  }
</script>

<style lang="scss" scoped>
  .CardSets {
    display: grid;
    grid-gap: 1.5em;
    grid-template-columns: auto;

    @media (min-width: 700px) {
      grid-template-columns: auto auto;
    }

    @media (min-width: 980px) {
      grid-template-columns: auto auto auto;
    }
  }

  button {
    box-shadow: 4px 2px 4px 2px lightgrey;
    border: 0;
    bottom: 50px;
    font-size: 3em;
    font-weight: bold;
    height: 150px;
    position: fixed;
    right: 20px;
    text-transform: uppercase;
    width: 150px;
  }
</style>
