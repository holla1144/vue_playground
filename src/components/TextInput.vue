<template>
  <input
    class="Form-input Form-input--text"
    type="text"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
    :class="{active: isFocused}"
    :id="id"
  />
</template>

<script>
  export default {
    data() {
      return {
        isFocused: false
      }
    },

    methods: {
      handleBlur() {
        this.isFocused = false
      },

      handleFocus() {
        this.isFocused = true
      },

      handleInput(event) {
        this.$emit("textInputChange", event);
      }
    },

    props: {
      id: {
        type: String,
        required: true
      }
    }
  }
</script>