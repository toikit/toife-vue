<style lang="scss" scoped>
.toife-flex {
  display: flex;
  flex-direction: var(--direction);
  column-gap: var(--gap);
  row-gap: var(--gap);
}
</style>

<template>
  <div :class="{ 'toife-flex': true }" :style="{ '--gap': _gap, '--direction': props.direction }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// Define props
const props = withDefaults(
  defineProps<{
    gap?: any,
    direction?: any
  }>(),
  {
    gap: 0,
    direction: 'row'
  }
);


const _gap = computed(() => {
  if (isNaN(props.gap)) {
    return props.gap;
  }

  return `var(--t-size-${props.gap})`;
});
</script>