<template>
  
    <img src="/slide/Brush/1.JPG" class="img-slide" alt="">
    <h1>How to download Brushs on Procreate</h1>
    <img src="/slide/Brush/2.JPG" class="img-slide" alt="">
    <img src="/slide/Brush/3.JPG" class="img-slide" alt="">
    <img src="/slide/Brush/4.JPG" class="img-slide" alt="">

    <tools/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import tools from "@/components/GoToolsPage.vue"
export default defineComponent({
  
  components:{
    tools
  }
});
</script>
<style lang="scss" scoped>
h1{
    text-align: center;
}
</style>