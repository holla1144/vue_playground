<template>
  <div class="CardSet pointer">
    <div class="CardSet-body br4">
      <div class="CardSet-decoration br4" :style="{backgroundColor}"></div>
      <div class="CardSet-information">
        <p>{{ cardSet.name }}</p>
        <span>{{ cardSet.cards.length }} cards</span>
      </div>
    </div>
  </div>
</template>

<script>
  import colors from "../variables/colors";

  export default {
    computed: {
      backgroundColor() {
        const randomColorIndex = Math.floor(Math.random() * Math.floor(colors.length));
        return colors[randomColorIndex];
      }
    },
    props: ["cardSet"],
  }
</script>

<style lang="scss" scoped>
 .CardSet {
   min-width: 320px;
   padding-left: 2em;

   &:hover {
     .CardSet-body {
       box-shadow: 4px 6px 12px 4px grey;
     }
   }

   &-body {
     box-shadow: 8px 10px 12px 2px grey;
     display: flex;
     padding: 1.5em 1em;
     position: relative;
     transition: box-shadow 500ms;
   }

   &-decoration {
     height: 160px;
     left: -40px;
     position: relative;
     width: 160px;
   }

   &-information {
    height: 150px;
   }
 }
</style>