<style lang="scss" src="./loading.scss" scoped></style>
<template src="./loading.html"></template>
<script lang="ts" setup>
import { Present } from '../present';
import { IconSpinner } from '../icon-spinner';
import { ref } from 'vue';
import { type LoadingProps, type LoadingEmit } from './loading.type';

const props = withDefaults(defineProps<LoadingProps>(), {
  type: 'spinner'
});
const visible = ref(false);
const emit = defineEmits<LoadingEmit>();

let ges: any;

const open = () => {
  visible.value = true;
}

const close = () => {
  visible.value = false;
}

defineExpose({
  open,
  close
});
</script>