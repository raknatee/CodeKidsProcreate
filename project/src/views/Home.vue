<template>
  <div class="home">
   
    <ImageSlide src="/slide/0.JPG" />
    <h1>Get Started with Procreate</h1>

    <div class="title-grid">
      <BasicButton to="/create-new-canvas">
        1. Create the new Canvas
      </BasicButton>
      <BasicButton to="/tools">
        2. Tools
      </BasicButton>
      <BasicButton to="/export">
        3. How to export the artwork
      </BasicButton>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
h1{
  text-align: center;
  text-decoration: underline  $pink-2 .5rem;
}



.title-grid{
  margin: 5rem 0;
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
}


</style>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicButton from "@/components/BasicButton.vue"

export default defineComponent({
  name: 'Home',
  components:{
    BasicButton,
  }
});
</script>
