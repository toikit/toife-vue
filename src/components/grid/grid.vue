<style lang="scss" src="./grid.scss" scoped></style>
<template src="./grid.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type GridProps } from './grid.type';

const props = withDefaults(defineProps<GridProps>(), {
  gap: 0,
  template: 'repeat(1, 1fr) / repeat(1, 1fr)'
});


const _gap = computed(() => {
  if (isNaN(props.gap)) {
    return props.gap;
  }

  return `var(--t-size-${props.gap})`;
});
</script>