<style lang="scss" src="./flex.scss" scoped></style>
<template src="./flex.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type FlexProps } from './flex.type';

const props = withDefaults(defineProps<FlexProps>(), {
  gap: 0,
  direction: 'row'
});


const _gap = computed(() => {
  if (isNaN(props.gap)) {
    return props.gap;
  }

  return `var(--t-size-${props.gap})`;
});
</script>