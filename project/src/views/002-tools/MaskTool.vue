<template>
  <div class="display">
    <div>
      <h2>Freehand</h2>
      <VDO src="/slide/MaskTool/1-Freehand.mp4"/>
    </div>

    <div>
      <h2>Rectangle</h2>
      <VDO src="/slide/MaskTool/2-Rectangle.mp4"/>

    </div>

    <div>
      <h2>Ellipse</h2>
      <VDO src="/slide/MaskTool/3-Ellipse.mp4"/>
    </div>

    <div>
      <h2>Copy and Paste</h2>
      <VDO src="/slide/MaskTool/4-Copy&paste.mp4"/>
    </div>
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

</style>