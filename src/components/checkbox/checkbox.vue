<style lang="scss" src="./checkbox.scss" scoped></style>
<template src="./checkbox.html"></template>
<script lang="ts" setup>
import { computed } from 'vue';
import { type CheckboxProps, type CheckboxEmit } from './checkbox.type';

const props = withDefaults(defineProps<CheckboxProps>(), {
  multiple: false,
  modelValue: false,
  value: undefined,
  label: '',
  type: 'check',
  color: 'primary'
});

const emit = defineEmits<CheckboxEmit>();


// Get style for checkbox
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

// Status is action or not of checkbox
const isActive = computed(() => {
  // Case have multi value
  // Then check is active if list of selection include this value
  if (props.multiple) {
    return props.modelValue.includes(props.value);
  }

  // Case else action if equal value
  return props.value === undefined ? props.modelValue : props.modelValue == props.value;
});

// Event when click on checkbox
// Check or uncheck item
const onToggle = (e: any) => {
  e.preventDefault();
  e.stopPropagation();

  if (props.multiple) {
    let newVal = props.modelValue;

    if (props.modelValue.includes(props.value)) {
      newVal.splice(newVal.indexOf(props.value), 1);
    } else {
      newVal.push(props.value);
    }

    emit('update:modelValue', newVal);
  } else if (props.value === undefined) {
    emit('update:modelValue', !props.modelValue);
  } else {
    emit('update:modelValue', props.value);
  }
}
</script>