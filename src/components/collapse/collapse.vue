<style lang="scss" src="./collapse.scss"></style>
<template src="./collapse.html"></template>
<script lang="ts" setup>
import { ref } from 'vue';
import { type CollapseProps, type CollapseEmit } from './collapse.type';

const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmit>();

const isOpen = ref(false);
const height = ref('');
const content = ref();

const onToggle = () => {
  isOpen.value = !isOpen.value;
  height.value = `calc(${content.value.offsetHeight}px + 2rem)`;
  emit('change', isOpen.value);
}

emit('change', isOpen.value);
</script>