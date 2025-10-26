<style lang="scss" scoped>
.t-checkbox {
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  .t-checkbox-label {
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .t-checkbox-radio,
  .t-checkbox-check {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    width: 22px;
    border: 2px solid var(--t-color-separate);

    >div {
      height: 12px;
      width: 12px;
      background-color: transparent;
    }

    i {
      color: transparent;
    }
  }

  .t-checkbox-radio {
    border-radius: 50%;

    >div {
      border-radius: 50%;
    }
  }

  &.active {
    .t-checkbox-radio {
      border: 2px solid var(--background);

      >div {
        background-color: var(--background);
      }
    }

    .t-checkbox-check {
      border: 2px solid var(--background);
      background-color: var(--background);

      >i {
        color: var(--color);
      }
    }
  }
}
</style>

<template>
  <div class="t-checkbox" :class="{ active: isActive }" :style="styles" @click="onToggle" @touchend="onToggle">
    <div :class="`t-checkbox-${type}`">
      <div v-if="type == 'radio'"></div>
      <slot name="icon" v-if="type == 'check'"><i class="ri-check-line"></i></slot>
    </div>
    <slot name="label"><span class="t-checkbox-label" v-if="label">{{ props.label }}</span></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// Property props
const props = withDefaults(defineProps<{
  label?: string,
  modelValue?: any,
  variant?: any,
  type?: string,
  multiple?: boolean,
  value?: any,
  color?: string
}>(), {
  multiple: false,
  modelValue: false,
  value: undefined,
  label: '',
  type: 'check',
  color: 'primary'
});

// Defined emit name
const emit = defineEmits(['update:modelValue']);

// Get style for checkbox
const styles = computed(() => {
  let st: any = {
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
const onToggle = (e:any) => {
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