<template>
  <div class="t-card" :style="styles">
    <slot />
  </div>
</template>

<style lang="scss">
.t-card {
  border-radius: 8px;
  background: var(--background);
  padding: var(--t-size-2);
  position: relative;
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';

// Property
// color: set color for card, my use status color or custom color
const props = withDefaults(defineProps<{
  color?: any
}>(), {
  color: null
});

const styles = computed(() => {
  let st: any;

  if (!props.color) {
    st = {
      '--background': 'var(--t-color-surface)'
    }
  }
  else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--background': 'var(--t-color-status-' + props.color + ')'
    };
  }
  else {
    st = {
      '--background': props.color
    };
  }

  return st;
});
</script>