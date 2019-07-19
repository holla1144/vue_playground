<template>
  <div class="CardEditorRow br4">
    <div class="CardEditorRow-remove">
      <button @click="handleCardRemove" v-if="showRemoveButton">X</button>
    </div>
    <div class="CardEditorRow-input">
      <TextInput
        label="Term"
        :id="'term' + cardIndex"
        :isValid="term.length > 0"
        :showValidations="showValidations"
        v-model.lazy="term"
      />
    </div>
    <div class="CardEditorRow-input">
      <TextInput
        label="Definition"
        :id="'definition' + cardIndex"
        :isValid="definition.length > 0"
        :showValidations="showValidations"
        v-model.lazy="definition"
      />
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  import Card from "../../classes/Card";
  import TextInput from "../shared/TextInput.vue";

  export default {
    computed: {
      showRemoveButton: function() {
        return this.card.validate();
      }
    },

    data() {
      return {
        definition: this.card.definition,
        term: this.card.term
      }
    },

    methods: {
      ...mapMutations("collectionEditor", [
        "removeCard",
        "updateCard"
      ]),

      handleCardRemove() {
        this.removeCard(this.cardIndex);
      },
    },

    watch: {
      term: function() {
        const mutationPayload = {
          cardIndex: this.cardIndex,
          field: "term",
          value: this.term
        };

        this.updateCard(mutationPayload);
      },

      definition: function() {
        const mutationPayload = {
          cardIndex: this.cardIndex,
          field: "definition",
          value: this.definition
        };

        this.updateCard(mutationPayload);
      }
    },

    props: {
      "card": {
        validator: function (candidate) {
          return candidate instanceof Card;
        },
        required: true
      },

      "cardIndex": {
        type: Number,
        required: true
      },

      "showValidations": {
        type: Boolean,
        required: true
      }
    },

    components: {
      TextInput
    }
  }
</script>

<style lang="scss" scoped>
  .CardEditorRow {
    display: flex;
    margin: 1em 0;
    padding: 1em;

    &:nth-child(odd) {
      background-color: #f6fffe;
    }

    &-input {
      flex-basis: 48%;
      padding: 0 0 0 1.5em;
    }

    &-remove {
      display: flex;
      width: 15px;

      button {
        background: 0;
        border: 0;
      }
    }
  }
</style>