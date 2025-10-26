<style lang="scss" scoped>
.t-grid{
  display: grid;
  grid-template: repeat(3, 1fr);
  column-gap: .5rem;
  row-gap: .5rem;
}
</style>

<template>
  <div class="t-grid"></div>
</template>

<script lang="ts" setup>
// Define props
const props = withDefaults(
  defineProps<{
    gap?:any,
    template?:any
  }>(),
  {
    gap: 0,
    template: 1
  }
);
</script>