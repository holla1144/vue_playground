<template>
  <div>
    <TextInput
      id="collectionName"
      label="Collection Name"
      placeholder="Ex. JS Terms"
      :handleInput="handleInput"
      :isValid="collectionName.length > 0"
      :showValidations="showValidations"
      :value="collectionName"
    />
    <TextInput
      id="collectionDescription"
      label="Description"
      placeholder="Describe your collection"
      :handleInput="handleInput"
      :isValid="collectionDescription.length > 0"
      :showValidations="showValidations"
      :value="collectionDescription"
    />
    <h2>Add Some Cards</h2>
    <CardEditor
      :cards="collectionCards"
      :handleCardAdd="handleCardAdd"
      :handleCardRemove="handleCardRemove"
      :handleCardUpdate="handleCardUpdate"
      :showValidations="showValidations"
    />
    <button @click="handleSave">Save Collection</button>
  </div>
</template>

<script>
  import Card from "../../classes/Card";
  import Collection from "../../classes/Collection";
  import CardEditor from "./CardEditor.vue";
  import TextInput from "../shared/TextInput.vue";

  export default {
    data() {
      return {
        collectionCards: this.collection.cards,
        collectionDescription: this.collection.description,
        collectionName: this.collection.name,
        showValidations: false
      }
    },

    methods: {
      handleCardAdd() {
        this.collectionCards.push(new Card());
      },

      handleCardRemove(index) {
        this.collectionCards.splice(index, 1);
      },

      handleCardUpdate(index, field, value) {
        this.showValidations = false;
        this.collectionCards[index][field] = value;
      },

      handleInput($event) {
        this.showValidations = false;
        this[$event.target.id] = $event.target.value;
      },

      handleSave() {
        const candidateCollection = new Collection(this.collectionName, this.collectionDescription, this.collectionCards);
        const isCollectionValid = candidateCollection.validate();

        if (isCollectionValid) {
          this.$emit("addCollection", candidateCollection);
          return;
        }

        this.showValidations = true;

        alert("Sorry, your new collection is invalid");
      }
    },

    props: {
      collection: {
        required: true,
        validator: collection => collection instanceof Collection
      },
    },

    components: {
      CardEditor,
      TextInput
    }
  }
</script>

<style lang="scss" scoped>
</style>