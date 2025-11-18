<style lang="scss" src="./ripple.scss" scoped></style>
<template src="./ripple.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type RippleProps } from './ripple.type';

const props = withDefaults(defineProps<RippleProps>(), {
  color: 'primary'
});

const styles = computed(() => {
  let st = {};

  if (!props.color) {
    st = {
      '--color': 'var(--toife-color-surface)'
    }
  }
  else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--color': 'var(--toife-color-status-' + props.color + ')'
    };
  }
  else {
    st = {
      '--color': props.color
    };
  }

  return st;
});
</script>