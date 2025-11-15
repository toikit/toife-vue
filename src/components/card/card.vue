<style lang="scss" src="./card.scss"></style>
<template src="./card.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type CardProps } from './card.type';

const props = withDefaults(defineProps<CardProps>(), {
  color: null
});


const styles = computed(() => {
  let st: any;

  if (!props.color) {
    st = {
      '--background': 'var(--t-color-surface)'
    }
  }
  else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--background': 'var(--t-color-status-' + props.color + ')'
    };
  }
  else {
    st = {
      '--background': props.color
    };
  }

  return st;
});
</script>