<template>
  <div>
    <div class="AddCard">
      <button
        class="AddCard-button bg-blue lightest-blue ttu pointer"
        @click="handleClick"
      >
        Create
      </button>
    </div>
    <Modal :isOpen="isModalOpen" @modalCloseRequest="handleModalClose">
      <form class="Form" @submit.prevent="handleSubmit">
        <div v-if="formError" class="Form-errorText">
          <p class="dark-pink">{{ formError }}</p>
        </div>
        <div class="Form-inputGroup">
          <label class="Form-label ttu b blue" for="term">Term</label>
          <TextInput
            id="term"
            placeholder="Ex. Vue"
            @textInputChange="handleInputChange($event)"
            :value="term"
          />
        </div>
        <div class="Form-inputGroup">
          <label class="Form-label ttu b blue" for="definition">Definition</label>
          <TextInput
            id="definition"
            placeholder="An open-source JS framework for building UIs and SPA's"
            @textInputChange="handleInputChange($event)"
            :value="definition"
          />
        </div>
        <button class="Form-button bg-blue hover-bg-dark-blue ttu white br2 pointer" type="submit">Save</button>
        <button class="Form-button bg-orange hover-bg-dark-red ttu white br2 pointer" @click="handleModalClose">Close</button>
      </form>
    </Modal>
  </div>
</template>

<script>
  import Card from "../classes/Card";
  import Modal from "./Modal.vue";
  import TextInput from "./TextInput.vue";

  export default {
    data() {
      return {
        definition: "",
        formError: "",
        isModalOpen: false,
        term: ""
      }
    },

    methods: {
      handleClick() {
        this.isModalOpen = !this.isModalOpen;
      },

      handleInputChange(e) {
        if (this.formError) {
          this.formError = "";
        }

        this[e.target.id] = e.target.value;
      },

      handleModalClose() {
        this.isModalOpen = false;
        this.definition = "";
        this.formError = "";
        this.term = "";
      },

      handleSubmit() {
        const isValid = this.validateForm();

        if (isValid) {
          const newCard = new Card(this.term.trim(), this.definition.trim());

          this.$emit("cardCreated", newCard);
          this.handleModalClose();
          return;
        }

        this.formError = "Term and Definition are required";
      },

      validateForm() {
        return this.term && this.definition;
      }
    },

    components: {
      Modal,
      TextInput
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/Form";

  .AddCard {
    &-button {
      border: 0;
      padding: 1em .75em;
    }
  }
</style>
