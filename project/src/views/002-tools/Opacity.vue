<template>
  
    <ImageSlide src="/slide/Opacity.jpeg" />
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