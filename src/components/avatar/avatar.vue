<style lang="scss" scoped>
// Avatar default is circle
// With props square then is square
.toife-avatar {
  position: relative;
  border-radius: 50%;
  height: var(--size);
  width: var(--size);
  overflow: hidden;

  >* {
    width: 100%;
    height: 100%;
  }

  &.square {
    border-radius: 8px;
  }
}
</style>

<template>
  <div :class="{ square, 'toife-avatar': true }" :style="{ '--size': width }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// Define props
const props = withDefaults(defineProps<{
  square?: boolean,
  size?: any
}>(), {
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