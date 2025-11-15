<style lang="scss" src="./text.scss" scoped></style>
<template src="./text.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type TextProps } from './text.type';

const props = withDefaults(defineProps<TextProps>(), {
  color: 'var(--t-color-text)',
  size: 'standard'
});

const styles = computed(() => {
  let size, color = props.color;

  if (props.size == 'standard') size = 'var(--t-fs-10)'
  else if (props.size == 'small') size = 'var(--t-fs-08)'
  else if (props.size == 'large') size = 'var(--t-fs-12)';
  else size = props.size;

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    color = `var(--t-color-status-${props.color})`;
  }

  return {
    '--color': color,
    '--font-size': size
  }
});
</script>