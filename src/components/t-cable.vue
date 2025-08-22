<style lang="scss" scoped>
.t-cable{
  position: absolute;
  z-index: 10;

  &.bottom{
    bottom: 0;
    left: 0;
    height: auto;
    width: 100%;
    will-change: transform;
    transition: transform var(--t-keyboard-transition) ease-out;

    &.keyboard{
      transform: translateY(calc((var(--t-keyboard-height) - var(--t-safe-area-bottom)) * -1));
    }
  }

  &.top{
    left: 0;
    top: 0;
    height: auto;
    width: 100%;
  }

  &.left{
    left: 0;
    top: 0;
    height: 100%;
    width: auto;
  }

  &.right{
    right: 0;
    top: 0;
    height: 100%;
    width: auto;
  }
}
</style>

<template>
  <div class="t-cable" :class="{keyboard: props.keyboard > 0, [props.placement]: true}" :style="{'--t-keyboard-height': props.keyboard + 'px', '--t-keyboard-transition': props.keyboard > 0 ? '0.3s' : '0.1s'}"><slot/></div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  keyboard?:number,
  placement?:string
}>(), {
  keyboard: 0,
  placement: 'bottom'
});
</script>