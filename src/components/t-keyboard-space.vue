
<style lang="scss" scoped>
.t-keyboard-space{
  height: var(--height);
  transition: height 0.1s ease;
}
</style>

<template>
  <div class="t-keyboard-space" :style="{'--height':  height + 'px'}"></div>
</template>

<script lang="ts" setup>
import { useKeyboard } from '../controllers';
const { height } = useKeyboard();
</script>