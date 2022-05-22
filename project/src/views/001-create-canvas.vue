<template>
  
    <img src="/slide/1.JPG" class="img-slide" alt="">
    <home/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from "@/components/HomeButton.vue"
export default defineComponent({
  
  components:{
    Home
  }
});
</script>