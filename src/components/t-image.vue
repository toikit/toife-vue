<template><img @error="handleError" :src="_src"/></template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const _src = ref<any>('');
const {defaultSrc, src} = defineProps<{
  defaultSrc?:string,
  src?:string
}>();

const handleError = () => {
  if (defaultSrc) {
    _src.value = defaultSrc;
  }
}

onMounted(() => {
  _src.value = src;
});
</script>