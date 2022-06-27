<template>
  <ImageSlide src="/slide/Layers/1.JPG" />
  <ImageSlide src="/slide/Layers/2.JPG" />
  
  <VDO src="/slide/Layers/3.mp4"/>

  <ImageSlide v-for="imgName in imgNames" :src="'/slide/Layers/'+imgName" :key="imgName" />

  <tools />




</template>

<script lang="ts">
import { defineComponent } from "vue";
import tools from "@/components/GoToolsPage.vue";
export default defineComponent({
  components: {
    tools,
  },
  setup(){
    const imgNames:string[] = []
    for(let i=4;i<=8;i++){
        imgNames.push(`${i}.JPG`)
    }
    return {imgNames}
  }
});
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>