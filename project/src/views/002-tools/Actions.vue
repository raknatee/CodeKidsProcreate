<template>
  
    <ImageSlide src="/slide/Actions/1.JPG" />
    <ImageSlide src="/slide/Actions/2.JPG" />
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