<template>
  <div class="t-card" :class="{shadow: props.shadow}"><slot/></div>
</template>

<style lang="scss">
.t-card{
  border-radius: 8px;
  background-color: var(--t-color-surface);
  border: 1px solid var(--t-color-border);
  padding: var(--t-size-2);
  position: relative;

  &.shadow{
    box-shadow: 0 2px 12px -9px rgba(var(--t-color-backdrop-rgb), 0.4);
  }
}
</style>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  shadow?:boolean
}>(), {
  shadow: true
})
</script>