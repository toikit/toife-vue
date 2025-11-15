<style lang="scss" src="./toolbar.scss" scoped></style>
<template src="./toolbar.html"></template>
<script lang="ts" setup>
import { computed, inject } from 'vue';
import { type ToolbarProps } from './toolbar.type';

const props = withDefaults(defineProps<ToolbarProps>(), {
  placement: null,
  safe: true,
  size: '50px'
});

const cable: any = inject('cableState');


const placement = computed(() => {
  return props?.placement || cable?.placement;
});
</script>