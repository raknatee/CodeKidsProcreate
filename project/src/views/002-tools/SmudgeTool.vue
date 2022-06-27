<template>
  <VDO src="/slide/SmudgeTool.mp4" />   
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
