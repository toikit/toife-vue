<style lang="scss" scoped>
.toife-ripple {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: var(--color);
  animation: t-ripple 2s ease-out infinite;
  z-index: -1;
}

@keyframes t-ripple {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>

<template>
  <div :class="{ 'toife-ripple': true }" :style="styles"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  color?: any
}>(), {
  color: 'primary'
});

const styles = computed(() => {
  let st = {};

  if (!props.color) {
    st = {
      '--color': 'var(--t-color-surface)'
    }
  }
  else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--color': 'var(--t-color-status-' + props.color + ')'
    };
  }
  else {
    st = {
      '--color': props.color
    };
  }

  return st;
});
</script>