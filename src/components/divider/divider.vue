<style lang="scss" src="./divider.scss" scoped></style>
<template src="./divider.html"></template>
<script lang="ts" setup>
import { type DividerProps } from './divider.type';

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal'
});
</script>