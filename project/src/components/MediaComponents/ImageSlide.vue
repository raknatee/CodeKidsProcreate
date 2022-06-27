<template>
  <Media>    
    <img :src="src">
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
img{
  width: 100%;
}
</style>