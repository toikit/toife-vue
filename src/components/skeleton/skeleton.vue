<style lang="scss" src="./skeleton.scss" scoped></style>
<template src="./skeleton.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type SkeletonProps } from './skeleton.type';

const props = withDefaults(defineProps<SkeletonProps>(), {
  width: '100%',
  height: '1rem',
  radius: '8px',
  color: null
});

const styles = computed(() => {
  let rs: any = {
    '--width': props.width,
    '--height': props.height,
    '--radius': props.radius
  };

  return rs;
});
</script>