<template>
  <div>
    <CardEditorRow
      v-for="(card, index) in cards"
      :card="card"
      :cardIndex="index"
      :handleCardRemove="handleCardRemove"
      :handleCardUpdate="handleCardUpdate"
      :showValidations="showValidations"
      :key=""
    />
    <div class="EditorActions">
      <button @click="handleCardAdd">Add a card</button>
    </div>
  </div>
</template>

<script>
  import CardEditorRow from "./CardEditorRow.vue";

  export default {
    props: {
      "cards": {
        type: Array,
        required: true
      },
      "handleCardAdd": {
        type: Function,
        required: true
      },
      "handleCardRemove": {
        type: Function,
        required: true
      },

      "handleCardUpdate": {
        type: Function,
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