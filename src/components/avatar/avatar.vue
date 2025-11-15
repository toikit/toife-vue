<style lang="scss" src="./avatar.scss" scoped></style>
<template src="./avatar.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type AvatarProps } from './avatar.type';

const props = withDefaults(defineProps<AvatarProps>(), {
  square: false,
  size: 'standard'
});


// Get realy width with props size
const width = computed(() => {
  if (props.size == 'small') return '24px';
  if (props.size == 'standard') return '40px';
  if (props.size == 'large') return '60px';
  return props.size;
});
</script>