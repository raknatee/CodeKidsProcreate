<template>
    <div class="wapper">
        <img src="/slide/2.jpeg" class="img-slide" alt="">
        
    </div>
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

<style lang="scss" scoped>
.wapper{
    position: relative;
}
.img{
    position: absolute;
    top:0;
    left: 0;
}

</style>
