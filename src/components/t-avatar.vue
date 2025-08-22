<style lang="scss" scoped>
.t-avatar{
  position: relative;
  border-radius: 50%;
  height: var(--size);
  width: var(--size);
  overflow: hidden;

  > * {
    width: 100%;
    height: 100%;
  }

  &.square{
    border-radius: 8px;
  }
}
</style>

<template>
  <div class="t-avatar" :class="{square}" :style="{'--size': width}"><slot/></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  square?:boolean,
  size?:any
}>(), {
  square: false,
  size: 'standard'
});

const width = computed(() => {
  if (props.size == 'small') return '24px';
  if (props.size == 'standard') return '40px';
  if (props.size == 'large') return '60px';
  return props.size;
});
</script>