<template>
  <div class="t-divider" :class="{[props.type]: true}"></div>
</template>

<style lang="scss" scoped>
.t-divider{
  &.horizontal{
    width: 100%;
    border-bottom: 0.55px solid var(--t-color-separate);
  }

  &.vertical{
    height: 100%;
    border-right: 0.55px solid var(--t-color-separate);
  }
}
</style>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  type?:string
}>(), {
  type: 'horizontal'
});
</script>