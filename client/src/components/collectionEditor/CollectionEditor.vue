<template>
  <div>
    <div v-if="loading">
      Loading . . .
    </div>
    <div v-else>
      <TextInput
        id="collectionName"
        label="Collection Name"
        placeholder="Ex. JS Terms"
        @input="updateField"
        :isValid="collection.name.length > 0"
        :showValidations="showValidations"
        :value="collection.name"
      />
      <TextInput
        id="collectionDescription"
        label="Description"
        placeholder="Describe your collection"
        @input="updateField"
        :isValid="collection.description.length > 0"
        :showValidations="showValidations"
        :value="collection.description"
      />
      <h2>Add Some Cards</h2>
      <CardEditor
        :cards="collection.cards"
        :showValidations="showValidations"
      />
      <button @click="handleSave">Save Collection</button>
    </div>
  </div>
</template>

<script>
  import Card from "../../classes/Card";
  import Collection from "../../classes/Collection";
  import CardEditor from "./CardEditor.vue";
  import TextInput from "../TextInput.vue";
  import { SAVE_COLLECTION, SET_EDIT_COLLECTION } from "../../store/actions.type";
  import { GET_COLLECTION_BY_ID } from "../../store/getters.type";
  import { UPDATE_COLLECTION } from "../../store/mutations.type";

  export default {
    mounted() {
      let collection;

      if (this.$route.params.routeName === "new" ) {
        collection = new Collection("New collection", "", [new Card(), new Card()]);
      } else {
        collection = this.$store.getters[`collection/${GET_COLLECTION_BY_ID}`](this.$route.params.routeName);
      }

      this.$store.dispatch(`editor/${SET_EDIT_COLLECTION}`, collection)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          alert("Sorry, something went wrong");
          this.$router.push({ path: "/"})
        });
    },

    computed: {
      collection() {
        return this.$store.state.editor.collection;
      }
    },

    data() {
      return {
        loading: true,
        showValidations: false
      }
    },

    methods: {
      updateField($value, $event) {
        const id = $event.target.id;
        const value = $event.target.value;
        const fieldName = id.replace("collection", "").toLowerCase();

        this.$store.commit(`editor/${UPDATE_COLLECTION}`, { [fieldName]: value });
      },

      handleSave() {
        const isCollectionValid = this.collection.validate();

        if (isCollectionValid) {
          this.$store.dispatch(`collection/${SAVE_COLLECTION}`, this.collection)
            .then(() => {
              this.$emit("collectionAdded");
              return
            })
            .catch(error => {
              console.log(error);
            });

          return
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