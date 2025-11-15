<style lang="scss" src="./gesture-indicator.scss" scoped></style>
<template src="./gesture-indicator.html"></template>
<script lang="ts" setup>
import { type GestureIndicatorProps } from './gesture-indicator.type';

const props = withDefaults(defineProps<GestureIndicatorProps>(), {
  placement: 'bottom'
});
</script>