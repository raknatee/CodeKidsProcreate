<template>
  <Media>    
          
      <video controls autoplay muted controlsList="nodownload">
        <source :src="src" type="video/mp4" />
      </video>
  </Media>
</template>



<script lang="ts">
import {defineComponent} from 'vue'
import Media from "./Media.vue"
export default defineComponent({
  components:{
    Media
  },
  props:{
    src:String
  },

});
</script>

<style lang="scss" scoped>
video{
  width: 100%;
}
</style>