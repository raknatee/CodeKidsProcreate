<template>
  
    <img src="/slide/BrushSize.jpeg" class="img-slide" alt="">
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