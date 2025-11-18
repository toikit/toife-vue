<style lang="scss" src="./switch.scss" scoped></style>
<template src="./switch.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type SwitchProps, type SwitchEmit } from './switch.type';

const props = withDefaults(defineProps<SwitchProps>(), {
  color: 'primary'
});
const emit = defineEmits<SwitchEmit>();
const onSwitch = () => {
  emit('update:modelValue', !props.modelValue);
}

const styles = computed(() => {
  let st: any = {
    '--background': props.color,
    '--color': '#ffffff'
  }

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--background': `var(--toife-color-status-${props.color})`,
      '--color': `var(--toife-color-status-${props.color}-text)`,
    };
  }

  return st;
});
</script>