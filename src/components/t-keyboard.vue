
<style lang="scss" scoped>
.t-keyboard{
  height: var(--height);
  transition: height 0.1s ease;
}
</style>

<template>
  <div class="t-keyboard" :style="{'--height':  height + 'px'}"></div>
</template>

<script lang="ts" setup>
import { useKeyboard } from '../controllers';
const { height } = useKeyboard();
</script>