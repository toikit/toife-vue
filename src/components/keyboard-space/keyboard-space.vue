<style lang="scss" scoped>
.toife-keyboard-space {
  height: var(--height);
  transition: height 0.1s ease;
}
</style>

<template>
  <div :class="{ 'toife-keyboard-space': true }" :style="{ '--height': height + 'px' }"></div>
</template>

<script lang="ts" setup>
import { useKeyboard } from './factory';
const { height } = useKeyboard();
</script>