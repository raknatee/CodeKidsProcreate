<template>
  <div class="container">
    <div class="slot">
    <slot></slot>
    </div>
  </div>
</template>



<style lang="scss" scoped>
$big-bp-1: 1100px;

.container {
  display: grid;
  place-items: center;
  margin: 1rem 0;
  .slot {
    width: 100%;
    @media (min-width: $big-bp-1) {
      width: 60%;
    }
  }

}
</style>