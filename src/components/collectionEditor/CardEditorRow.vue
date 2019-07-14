<template>
  <div class="CardEditorRow br4">
    <div class="CardEditorRow-remove">
      <button @click="handleCardRemove" v-if="showRemoveButton">X</button>
    </div>
    <div class="CardEditorRow-input">
      <TextInput
        label="Term"
        :handleInput="handleTermUpdate"
        :id="'term' + cardIndex"
        :isValid="term.length > 0"
        :showValidations="showValidations"
        :value="term"
      />
    </div>
    <div class="CardEditorRow-input">
      <TextInput
        label="Definition"
        :handleInput="handleDescriptionUpdate"
        :id="'definition' + cardIndex"
        :isValid="definition.length > 0"
        :showValidations="showValidations"
        :value="definition"
      />
    </div>
  </div>
</template>

<script>
  import Card from "../../classes/Card";
  import TextInput from "../shared/TextInput.vue";

  export default {
    computed: {
      definition: function () {
        return this.card.definition || "";
      },

      showRemoveButton: function() {
        return this.card.validate();
      },

      term: function () {
        return this.card.term || "";
      }
    },

    methods: {
      handleTermUpdate($event) {
        this.handleCardUpdate(this.cardIndex, "term", $event.target.value);
      },

      handleDescriptionUpdate($event) {
        this.handleCardUpdate(this.cardIndex, "definition", $event.target.value);
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