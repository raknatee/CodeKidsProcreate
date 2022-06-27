<template>
  
    <ImageSlide src="/slide/Brush/1.JPG" />
    <h1>How to download Brushs on Procreate</h1>
    <ImageSlide src="/slide/Brush/2.JPG" />
    <ImageSlide src="/slide/Brush/3.JPG" />
    <ImageSlide src="/slide/Brush/4.JPG" />

    <tools/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import tools from "@/components/GoToolsPage.vue"

export default defineComponent({
  
  components:{
    tools,
  }
});
</script>
<style lang="scss" scoped>
h1{
    text-align: center;
}
</style>