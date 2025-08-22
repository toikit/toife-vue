<template>
  <div class="t-card" :class="{shadow: props.shadow}"><slot/></div>
</template>

<style lang="scss">
.t-card{
  border-radius: 8px;
  background-color: var(--t-color-default-2);
  border: 1px solid var(--t-color-default-2);
  padding: var(--t-size-2);
  position: relative;

  &.shadow{
    box-shadow: 0px 2px 12px -9px var(--t-color-secondary-12);
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