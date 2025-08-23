<style lang="scss" scoped>
.t-pull-bar{
  background-color: var(--t-color-separate);
  position: absolute;
  border-radius: 3px;
  z-index: 99;

  &.bottom{
    width: 40px;
    height: 4px;
    top: 5px;
  }

  &.top{
    width: 40px;
    height: 4px;
    bottom: 5px;
  }

  &.left{
    height: 40px;
    width: 4px;
    right: 5px;
  }

  &.right{
    height: 40px;
    width: 4px;
    left: 5px;
  }
}
</style>

<template>
  <div class="t-pull-bar" :class="{[placement]: true}"></div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  placement?: string
}>(), {
  placement: 'bottom'
});
</script>