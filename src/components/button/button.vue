<style lang="scss" src="./button.scss" scoped></style>
<template src="./button.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { IconSpinner } from '../icon-spinner';
import { type ButtonProps } from './button.type';

const props = withDefaults(defineProps<ButtonProps>(), {
  color: null,
  size: 'standard',
  rounded: false,
  block: false,
  loading: false,
  loadingType: 'spinner',
  variant: 'default',
  activeBackground: false
});


// Style varibble generate
const styles = computed(() => {
  let st: any;

  if (props.variant == 'default') {
    if (!props.color) {
      st = {
        '--border': 'none',
        '--color': 'var(--toife-color-text)',
        '--background': 'var(--toife-color-surface)'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': 'none',
        '--color': 'var(--toife-color-status-' + props.color + '-text)',
        '--background': 'var(--toife-color-status-' + props.color + ')'
      };
    }
    else {
      st = {
        '--border': 'none',
        '--color': 'var(--toife-color-text)',
        '--background': props.color
      };
    }
  }

  if (props.variant == 'text') {
    if (!props.color) {
      st = {
        '--border': 'none',
        '--color': 'var(--toife-color-text)',
        '--background': 'transparent'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': 'none',
        '--color': 'var(--toife-color-status-' + props.color + ')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': 'none',
        '--color': props.color,
        '--background': 'transparent'
      };
    }
  }

  if (props.variant == 'outline') {
    if (!props.color) {
      st = {
        '--border': '0.55px solid var(--toife-color-text)',
        '--color': 'var(--toife-color-text)',
        '--background': 'transparent'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': '0.55px solid var(--toife-color-status-' + props.color + ')',
        '--color': 'var(--toife-color-status-' + props.color + ')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': '0.55px solid ' + props.color,
        '--color': props.color,
        '--background': 'transparent'
      };
    }
  }

  return st;
});
</script>