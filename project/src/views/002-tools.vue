<template>
    <ImageSlide src="/slide/2.jpeg"/>
    <tools/>
    <home/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from "@/components/HomeButton.vue"
import Tools from "@/components/ToolsButton/Tools.vue"

export default defineComponent({
  
  components:{
    Home,
    Tools,
  }
});
</script>
