<style lang="scss" src="./icon-spinner.scss" scoped></style>
<template src="./icon-spinner.html"></template>
<script lang="ts" setup>
import { type IconSpinnerProps } from './icon-spinner.type';

withDefaults(defineProps<IconSpinnerProps>(), {
  size: '24px',
  color: 'var(--t-color-text)'
});
</script>