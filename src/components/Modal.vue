<template>
  <div v-if="isOpen" @click.self="handleModalClose" class="Modal">
    <div class="Modal-content br3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    methods: {
      handleModalClose() {
        this.$emit("modalCloseRequest");
      }
    },

    props: {
      isOpen: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  .Modal {
    align-items: center;
    background-color: rgba(0, 0, 0, .25);
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;

    &-content {
      background-color: white;
      min-height: 30%;
      padding: 2em;
      min-width: 50%;
    }
  }
</style>