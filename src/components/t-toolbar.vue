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
  

  &.bottom{
    &.safe{padding-bottom: var(--t-safe-area-bottom);}
  }
  &.top{
    &.safe{padding-top: var(--t-safe-area-top);}
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

  &.left{
    &.safe{padding-left: var(--t-safe-area-left);}
  }
  &.right{
    &.safe{padding-right: var(--t-safe-area-right);}
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
}
</style>

<template>
  <div class="t-toolbar" :class="{[props.placement]: true, safe: props.safe}" :style="{'--t-size-toolbar':props.size}">
    <div><slot/></div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  placement?:any,
  safe?:boolean,
  size?:any
}>(), {
  placement: 'bottom',
  safe: true,
  size: '50px'
});
</script>