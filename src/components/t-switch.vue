<style lang="scss" scoped>
.t-switch{
  height: 31px;
  width: 50px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  .t-switch-icon{
    height: 27px;
    width: 27px;
    border-radius: 50%;
    background-color: var(--t-color-separate-surface);
    transition: all 0.2s ease;
    position: absolute;
    top: 2px;
  }

  &:not(.on){
    background-color: var(--t-color-separate);
    .t-switch-icon{
      left: 2px;
    }
  }

  &.on{
    background-color: var(--background-color);
    .t-switch-icon{
      right: 2px;
    }
  }
}
</style>

<template>
  <div class="t-switch" :style="{'--background-color': background}" :class="{on: props.modelValue}" @click="onSwitch">
    <div class="t-switch-icon"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  modelValue?:boolean,
  color?:any
}>(), {
  color: 'primary'
});
const emit = defineEmits(['update:modelValue']);
const onSwitch = () => {
  emit('update:modelValue', !props.modelValue);
}

const background = computed(() => {
  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    return `var(--t-color-status-${props.color})`;
  }

  return props.color;
});
</script>