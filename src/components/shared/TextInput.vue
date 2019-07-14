<template>
  <fieldset>
    <label :class="{active: isFocused, error: isInvalid}" :for="id">{{ label }}</label>
    <input
      class="Form-input Form-input--text"
      type="text"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      :class="{active: isFocused, error: isInvalid}"
      :id="id"
      :placeholder="placeholder"
      :value="value"
    />
  </fieldset>
</template>

<script>
  export default {
    computed: {
      isInvalid: function() {
        return this.showValidations && !this.isValid;
      }
    },

    data() {
      return {
        isFocused: false
      }
    },

    methods: {
      handleBlur() {
        this.isFocused = false;
      },

      handleFocus() {
        this.isFocused = true;
      }
    },

    props: {
      handleInput: {
        type: Function,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      isValid: {
        type: Boolean,
        required: true,
        default: true
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      },
      showValidations: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  fieldset {
    border: 0;
    padding: 0 0 1em 0;
  }

  label {
    display: block;
    font-weight: bold;
    padding: .25em 0;
    text-transform: uppercase;

    &.active {
      color: #357edd;
      transition: color 2s;
    }

    &.error {
     color: red;
    }
  }

  input {
    background: transparent;
    display: block;
    border: 0;
    border-bottom: 1px solid black;
    outline: none;
    padding: .5em;
    width: 100%;

    &.active {
      border-color: #357edd;
      transition: background-color 2s;
    }

    &.error {
      border-color: red;
    }
  }
</style>