<template>
  <div>
    <CardEditorRow
      v-for="(card, index) in cards"
      :card="card"
      :cardIndex="index"
      :showValidations="showValidations"
      :key="card.id"
    />
    <div class="EditorActions">
      <button @click="handleCardAdd">Add a card</button>
    </div>
  </div>
</template>

<script>
  import { ADD_CARD } from "../../store/mutations.type";
  import CardEditorRow from "./CardEditorRow.vue";

  export default {
    methods: {
      handleCardAdd() {
        this.$store.commit(`editor/${ADD_CARD}`);
      }
    },

    props: {
      "cards": {
        type: Array,
        required: true
      },

      "showValidations": {
        type: Boolean,
        required: true
      }
    },

    components: {
      CardEditorRow
    }
  }
</script>

<style lang="scss" scoped>
  .EditorActions {
    display: flex;
    justify-content: space-between;
  }
</style>