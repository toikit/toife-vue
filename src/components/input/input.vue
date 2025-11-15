<template>
  <div :class="{
    'toife-input': true,
    rounded,
    ['size-' + size]: true,
    ['variant-' + variant]: true,
    focus: isFocus,
    'has-value': hasValue,
    readonly
  }">
    <label>
      <span :class="{ 'toife-input-label': true }">{{ label }}</span>
      <div :class="{ 'toife-input-content': true }">
        <slot name="start" />
        <input ref="editable" :class="{ 'toife-input-editable': true }" :placeholder="placeholder" :value="modelValue"
          :type="type" @input="onInput" @focus="focus" @blur="blur" :readonly="readonly"></input>
        <!-- @touchstart.prevent="focus"
          @mousedown="focus" -->
        <slot name="end" />
      </div>
    </label>

    <text color="danger" v-if="error">{{ error }}</text>
    <text color="secondary" v-else-if="help">{{ help }}</text>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Text } from '../text'

const props = withDefaults(defineProps<{
  size?: string
  rounded?: boolean
  label?: string
  placeholder?: string
  type?: string
  help?: string
  error?: string
  modelValue?: any
  variant?: any
  readonly?: boolean
}>(), {
  size: 'standard',
  rounded: false,
  label: '',
  placeholder: '',
  type: 'text',
  modelValue: '',
  variant: 'default',
  readonly: false
})


const emit = defineEmits(['update:modelValue'])
const isFocus = ref(false)
const editable = ref<HTMLDivElement | null>(null)

const hasValue = computed(() =>
  !(props.modelValue === '' || props.modelValue == null)
)

const onInput = (e: any) => {
  emit('update:modelValue', e.target.value)
}

const focus = async (e: Event) => {
  isFocus.value = true
}

const blur = () => {
  isFocus.value = false
}
</script>
<style lang="scss" scoped>
.toife-input {
  position: relative;

  .toife-input-content {
    display: flex;
    align-items: center;
  }

  .toife-input-editable {
    background-color: transparent;
    color: var(--t-color-text);
    padding: 0;
    flex: 1;
    caret-color: var(--t-color-text);
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: start;
    position: relative;
    overflow: auto;

    // &:empty::before {
    //   content: attr(data-placeholder);
    //   color: var(--t-color-text-dark);
    //   pointer-events: none;
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    // }

    &:focus {
      caret-color: var(--t-color-text);
    }

    &::placeholder {
      color: var(--t-color-text-dark);
      opacity: 1;
    }
  }

  &.size-small {
    .toife-input-label {
      display: none;
    }

    .toife-text {
      font-size: 0.7rem;
    }

    .toife-input-editable {
      font-size: 1rem;
      line-height: 31px;
    }
  }

  &.size-standard {
    .toife-input-label {
      font-size: 0.8rem;
    }

    .toife-text {
      font-size: 0.7rem;
    }

    .toife-input-editable {
      font-size: 1rem;
      line-height: 42px;
    }
  }

  &.size-large {
    .toife-input-label {
      font-size: 1rem;
    }

    .toife-text {
      font-size: 0.8rem;
    }

    .toife-input-editable {
      font-size: 1.2rem;
      line-height: 50px;
    }
  }

  &.variant-default {
    label {
      display: block;
      width: 100%;
    }
  }

  &.variant-floating {
    .toife-input-editable {
      padding-top: 1rem;
    }

    .toife-input-label {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      z-index: 0;
      transform: translateY(-50%);
      font-size: 1rem;
      line-height: 1rem;
      transition: all 0.2s ease;
    }

    &.focus,
    &.has-value {
      .toife-input-label {
        transform: translateY(-120%);
        font-size: 0.7rem;
      }
    }
  }
}
</style>