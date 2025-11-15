<style lang="scss" src="./image.scss" scoped></style>
<template src="./image.html"></template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { type ImageProps } from './image.type';

const _src = ref<any>('');
const { defaultSrc, src } = defineProps<ImageProps>();

const handleError = () => {
  if (defaultSrc) {
    _src.value = defaultSrc;
  }
}

onMounted(() => {
  _src.value = src;
});
</script>