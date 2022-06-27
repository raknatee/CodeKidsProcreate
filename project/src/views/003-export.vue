<template>
    <h1>1st Way</h1>
    <ImageSlide src="/slide/export/1.1.JPG" />
    <ImageSlide src="/slide/export/1.2.JPG" />
    <h1>2nd Way</h1>
    <ImageSlide src="/slide/export/2.JPG" />

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