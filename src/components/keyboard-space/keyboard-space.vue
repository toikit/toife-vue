<style lang="scss" src="./keyboard-space.scss" scoped></style>
<template src="./keyboard-space.html"></template>
<script lang="ts" setup>
import { useKeyboard } from './factory';
import { type KeyboardSpaceProps } from './keyboard-space.type';

defineProps<KeyboardSpaceProps>();
const { height } = useKeyboard();
</script>