<template>
  
    <img src="/slide/Actions/1.JPG" class="img-slide" alt="">
    <img src="/slide/Actions/2.JPG" class="img-slide" alt="">
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