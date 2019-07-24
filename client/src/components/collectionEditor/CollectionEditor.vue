<template>
  <div>
    <TextInput
      id="collectionName"
      label="Collection Name"
      placeholder="Ex. JS Terms"
      @input="updateField"
      :isValid="collectionName.length > 0"
      :showValidations="showValidations"
      v-model="collectionName"
    />
    <TextInput
      id="collectionDescription"
      label="Description"
      placeholder="Describe your collection"
      :isValid="collectionDescription.length > 0"
      :showValidations="showValidations"
      v-model="collectionDescription"
    />
    <h2>Add Some Cards</h2>
    <CardEditor
      :cards="cards"
      :showValidations="showValidations"
    />
    <button @click="handleSave">Save Collection</button>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  import Collection from "../../classes/Collection";
  import CardEditor from "./CardEditor.vue";
  import TextInput from "../TextInput.vue";

  export default {
    computed: {
      cards() {
        return this.$store.state.collectionEditor.collection.cards;
      },

      collection() {
        return this.$store.state.collectionEditor.collection;
      },

      collectionDescription() {
        return this.$store.state.collectionEditor.collection.description;
      },

      collectionName() {
        return this.$store.state.collectionEditor.collection.name;
      }
    },

    data() {
      return {
        showValidations: false
      }
    },

    methods: {
      updateField($event) {
        const name = $event.target.name;
        const value = $event.target.value;

        name === "collectionDescription" ? this.updateDescription(value) : this.updateName(value);
      },

      ...mapMutations("collectionEditor", [
        "updateDescription",
        "updateName"
      ]),

      handleSave() {
        const candidateCollection = new Collection(this.collectionName, this.collectionDescription, this.cards);
        const isCollectionValid = candidateCollection.validate();

        if (isCollectionValid) {
          this.$store.commit("addCollection", candidateCollection);
          this.$emit("collectionAdded");
          return;
        }

        this.showValidations = true;

        alert("Sorry, your new collection is invalid");
      }
    },

    components: {
      CardEditor,
      TextInput
    }
  }
</script>

<style lang="scss" scoped>
</style>