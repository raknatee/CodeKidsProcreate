<template>
  
  <router-view/>
</template>

<style lang="scss">


@font-face {
    font-family: eina;
    src: url(/eina/Eina01-SemiBold.ttf);
}
body{
    font-family: 'eina';
    margin: 0;
    padding: 0;
}
.img-slide{
  width: 100vw;
}




</style>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(){
    document.title = "Procreate"
  }

});
</script>
