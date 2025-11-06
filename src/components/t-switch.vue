<style lang="scss" scoped>
.t-switch{
  height: 31px;
  width: 50px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  .t-switch-icon{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    transition: all 0.2s ease;
    position: absolute;
    top: 3px;
  }

  &:not(.on){
    background-color: var(--t-color-separate);

    .t-switch-icon{
      left: 3px;
      background: var(--t-color-text-dark);
    }
  }

  &.on{
    background: var(--background);

    .t-switch-icon{
      right: 3px;
      background: var(--color);
    }
  }
}
</style>

<template>
  <div class="t-switch" :style="styles" :class="{on: props.modelValue}" @pointerup="onSwitch">
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

const styles = computed(() => {
  let st:any = {
    '--background': props.color,
    '--color': '#ffffff'
  }

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--background': `var(--t-color-status-${props.color})`,
      '--color': `var(--t-color-status-${props.color}-text)`,
    };
  }

  return st;
});
</script>