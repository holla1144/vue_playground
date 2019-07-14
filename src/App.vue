<template>
  <div>
    <Header v-once></Header>
    <main>
      <!-- I know, I know. This will get replaced with actual routes -->
      <div v-if="component === 'collections'">
        <Collections :collections="collections" :handle-click="handleAddCollectionClick"></Collections>
      </div>
      <div v-if="component === 'editCollection'">
        <CollectionEditor :collection="selectedCollection" @addCollection="handleAddCollection"></CollectionEditor>
      </div>
    </main>
  </div>
</template>

<script>
  import Card from "./classes/Card";
  import Collection from "./classes/Collection";
  import CollectionEditor from "./components/collectionEditor/CollectionEditor.vue";
  import Collections from "./components/Collections.vue";
  import createCollections from "./dummyData";
  import Header from "./components/header/Header.vue";

  const collections = createCollections();
  export default {
    data() {
      return {
        collections,
        component: "collections",
        selectedCollection: []
      }
    },

    methods: {
      handleAddCollectionClick() {
        this.component = "editCollection";
        this.selectedCollection = new Collection("", "", [new Card("Lemon", "A Yellow Fruit"), new Card()]);
      },

      handleAddCollection(collection) {
        this.collections.push(collection);
      }
    },

    components: {
      Collections,
      CollectionEditor,
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
