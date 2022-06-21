<template>
  <img src="/slide/Layers/1.JPG" class="img-slide" alt="" />
  <img src="/slide/Layers/2.JPG" class="img-slide" alt="" />
  
  <div>
    <video controls autoplay muted controlsList="nodownload">
      <source src="/slide/Layers/3.mp4" type="video/mp4" />
    </video>
  </div>

  <img class="img-slide" alt="" v-for="imgName in imgNames" :src="'/slide/Layers/'+imgName" :key="imgName" />

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
video{
    width: 100vw;
}
</style>