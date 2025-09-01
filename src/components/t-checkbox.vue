<style lang="scss" scoped>
.t-checkbox {
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  .t-checkbox-label{
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .t-checkbox-radio, .t-checkbox-check{
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    width: 22px;
    border: 2px solid var(--t-color-text-dark);

    > div {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: transparent;
    }

    i {
      color: transparent;
    }
  }

  &.active{
    .t-checkbox-radio{
      border: 2px solid var(--background);

      > div {
        background-color: var(--background);
      }
    }

    .t-checkbox-check{
      border: 2px solid var(--background);
      background-color: var(--background);

      > i {
        color: var(--color);
      }
    }
  }
}
</style>

<template>
  <div class="t-checkbox" :class="{active: isActive}" :style="styles" @click="onToggle">
    <div :class="`t-checkbox-${type}`">
      <div v-if="type == 'radio'"></div>
      <slot name="icon" v-if="type == 'check'"><i class="ri-check-line"></i></slot>
    </div>
    <span class="t-checkbox-label" v-if="label">{{ props.label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  label?:string,
  modelValue?:any,
  variant?:any,
  type?:string,
  multiple?:boolean,
  value?:any,
  color?:string
}>(), {
  multiple: false,
  modelValue: false,
  value: undefined,
  label: '',
  type: 'check',
  color: 'primary'
});

const emit = defineEmits(['update:modelValue']);

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

const isActive = computed(() => {
  if (props.multiple) {
    return props.modelValue.includes(props.value);
  }
  return props.value === undefined ? props.modelValue : props.modelValue == props.value;
});

const onToggle = () => {
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
    emit('update:modelValue', props.modelValue == props.value ? null : props.value);
  }
}
</script>