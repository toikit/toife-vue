<style lang="scss" scoped>
.t-grid{
  display: grid;
  grid-template: repeat(var(--template), 1fr);
  column-gap: var(--gap);
  row-gap: var(--gap);
}
</style>

<template>
  <div class="t-grid" :style="{ '--gap': props.gap, '--template': props.template }"></div>
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