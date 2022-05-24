<template>
    <h1>1st Way</h1>
    <img src="/slide/export/1.1.JPG" class="img-slide" alt="">
    <img src="/slide/export/1.2.JPG" class="img-slide" alt="">
    <h1>2nd Way</h1>
    <img src="/slide/export/2.JPG" class="img-slide" alt="">

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
<style lang="scss" scoped>
h1{
    text-align: center;
}
</style>