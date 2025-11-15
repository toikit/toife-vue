<template>
  <div :class="{ 'toife-divider': true, [props.direction]: true }"></div>
</template>

<style lang="scss" scoped>
.toife-divider {
  &.horizontal {
    width: 100%;
    border-bottom: 0.55px solid var(--t-color-separate);
  }

  &.vertical {
    height: 100%;
    border-right: 0.55px solid var(--t-color-separate);
  }
}
</style>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  direction?: string
}>(), {
  direction: 'horizontal'
});

</script>