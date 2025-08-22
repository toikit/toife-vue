<style lang="scss" scoped>
.t-text{
  color: var(--color);
  font-size: var(--font-size);
}
</style>

<template>
  <span class="t-text" :style="styles"><slot/></span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  color?:any,
  size?:any
}>(), {
  color: 'default',
  size: 'standard' // small, large
});

const styles = computed(() => {
  let size, color = props.color;

  if (props.size == 'standard') size = 'var(--t-fs-10)'
  else if (props.size == 'small') size = 'var(--t-fs-08)'
  else if (props.size == 'large') size = 'var(--t-fs-12)';
  else size = props.size;

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    color = `var(--t-color-${props.color}-8)`;
  }

  return {
    '--color': color,
    '--font-size': size
  }
});
</script>