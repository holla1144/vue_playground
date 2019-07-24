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
  import Card from "../classes/Card";
  import CardSet from "./CardSet.vue";
  import Collection from "../classes/Collection";

  export default {
    computed: {
      collections() {
        return this.$store.state.collections;
      }
    },

    methods: {
      handleClick() {
        const collection = new Collection("New collection", "", [new Card(), new Card()]);
        this.$store.dispatch("collectionEditor/setCollection", collection);

        this.$router.push({ name: "editor", params: { routeName: "new" }});
      }
    },

    props: ["collections"],
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
