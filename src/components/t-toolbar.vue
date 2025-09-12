<style lang="scss" scoped>
.t-toolbar{
  background-color: var(--t-color-surface);

  > div {
    align-items: center;
    display: flex;
    position: relative;

    > * {
      flex: 1;
    }
  }

  &.bottom, &.top{
    > div {
      flex-direction: row;
      height: var(--t-size-toolbar);
      max-height: var(--t-size-toolbar);
      width: 100%;
      > * {
        height: 100%;
      }
    }
  }
  &.left,&.right{
    > div {
      flex-direction: column;
      width: var(--t-size-toolbar);
      max-width: var(--t-size-toolbar);
      height: 100%;
      > * {
        width: 100%;
      }
    }
  }

  &.safe{
    &.right{padding-right: var(--t-safe-area-right);}
    &.left{padding-left: var(--t-safe-area-left);}
    &.bottom{padding-bottom: var(--t-safe-area-bottom);}
    &.top{padding-top: var(--t-safe-area-top);}
  }
}
</style>

<template>
  <div class="t-toolbar" :class="{[placement]: true, safe: props.safe}" :style="{'--t-size-toolbar':props.size}">
    <div><slot/></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';

const props = withDefaults(defineProps<{
  placement?:any,
  safe?:boolean,
  size?:any
}>(), {
  placement: null,
  safe: true,
  size: '50px'
});

const cable:any = inject('cableState');

const placement = computed(() => {
  return props?.placement || cable?.placement;
});
</script>