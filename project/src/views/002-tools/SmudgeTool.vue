<template>
 
    <div>
      
      <video controls autoplay muted controlsList="nodownload">
        <source src="/slide/SmudgeTool.mp4" type="video/mp4" />
      </video>
    </div>

    

   
  <tools />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tools from "@/components/GoToolsPage.vue";
export default defineComponent({
  components: {
    tools,
  },
});
</script>

<style lang="scss" scoped>
.display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  h2{
      text-align: center;
  }
}
video {
  width: 100%;
}
</style>