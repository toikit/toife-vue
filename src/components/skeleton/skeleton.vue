<style lang="scss" scoped>
.toife-skeleton {
  width: var(--width);
  height: var(--height);
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(var(--t-color-separate-rgb), 0.5), transparent);
    animation: shimmer 1.2s infinite;
  }
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

<template>
  <div :class="{ 'toife-skeleton': true }" :style="styles"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  width?: any,
  height?: any,
  radius?: any,
  color?: any
}>(), {
  width: '100%',
  height: '1rem',
  radius: '8px',
  color: null
});

const styles = computed(() => {
  let rs: any = {
    '--width': props.width,
    '--height': props.height,
    '--radius': props.radius
  };

  return rs;
});
</script>