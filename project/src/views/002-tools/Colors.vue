<template>
  
    <img src="/slide/Colors/1.JPG" class="img-slide" alt="">
    <div class="center">
        <a href="https://html.codekids.raknatee.dev/lv01/04.html#rgb" target="_blank">Click here: Color System</a>
    </div>
    <img src="/slide/Colors/2.JPG" class="img-slide" alt="">
    <img src="/slide/Colors/3.JPG" class="img-slide" alt="">
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

<style lang="scss" scoped>
.center{
    text-align: center;
    display: grid;
    justify-items: center;
}
a{
    color: white;
    background-color: $pink-2;
    padding: 1.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 1rem;
    transition: all;
    transition-duration: .5s;
    margin: 5rem;
    width: 60vw;
    display: block;
}
  
a:hover{
    box-shadow: 5px 5px 10px 1px $blue-mint;
}
</style>