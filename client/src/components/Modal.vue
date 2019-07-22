<template>
  <div v-if="isOpen" @click.self="handleModalClose" class="Modal">
    <div class="Modal-content br3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
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
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;

    &-content {
      background-color: white;
      padding: 2em;
      min-width: 50%;
    }
  }
</style>