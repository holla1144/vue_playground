<template>
  <div class="CardSet pointer">
    <div class="CardSet-body br4">
      <div class="CardSet-decoration">
        <div class="CardSet-colorBlock br4" :style="{backgroundColor}"></div>
      </div>
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
       box-shadow: 7px 7px 8px grey;
     }

     .CardSet-colorBlock {
       left: -43px;
     }
   }

   &-body {
     box-shadow: 4px 5px 12px grey;
     display: flex;
     padding: 1.5em 1em;
     position: relative;
     transition: box-shadow 500ms;
   }

   &-decoration {
     flex-basis: calc(100% / 3);
     min-width: 120px;
     position: relative;
   }

   &-colorBlock {
     background-color: red;
     height: 150px;
     left: -40px;
     position: absolute;
     transition: left 500ms;
     width: 150px;
   }

   &-information {
    height: 150px;
    padding-left: 1em;
   }
 }
</style>