<style lang="scss" scoped>
.toife-grid {
  display: grid;
  grid-template: var(--template);
  column-gap: var(--gap);
  row-gap: var(--gap);
}
</style>

<template>
  <div :class="{ 'toife-grid': true }" :style="{ '--gap': _gap, '--template': props.template }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// Define props
const props = withDefaults(
  defineProps<{
    gap?: any,
    template?: any
  }>(),
  {
    gap: 0,
    template: 'repeat(1, 1fr) / repeat(1, 1fr)'
  }
);


const _gap = computed(() => {
  if (isNaN(props.gap)) {
    return props.gap;
  }

  return `var(--t-size-${props.gap})`;
});
</script>