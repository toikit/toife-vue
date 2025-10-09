<template>
  <div
    class="t-input"
    :class="{
      rounded,
      ['size-' + size]: true,
      ['variant-' + variant]: true,
      focus: isFocus,
      'has-value': hasValue,
      readonly
    }"
  >
    <label>
      <span class="t-input-label">{{ label }}</span>
      <div class="t-input-content">
        <slot name="start" />
        <input
          ref="editable"
          class="t-input-editable"
          :placeholder="placeholder"
          :value="modelValue"
          :type="type"
          @input="onInput"
          @focus="focus"
          @blur="blur"
          :readonly="readonly"
        ></input>
        <!-- @touchstart.prevent="focus"
          @mousedown="focus" -->
        <slot name="end" />
      </div>
    </label>

    <t-text color="danger" v-if="error">{{ error }}</t-text>
    <t-text color="secondary" v-else-if="help">{{ help }}</t-text>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import TText from './t-text.vue'

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
.t-input{
  position: relative;

  .t-input-content{
    display: flex;
    align-items: center;
  }

  .t-input-editable{
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

  &.size-small{
    .t-input-label{display: none;}
    .t-text{
      font-size: 0.7rem;
    }

    .t-input-editable{
      font-size: 1rem;
      line-height: 31px;
    }
  }

  &.size-standard{
    .t-input-label{
      font-size: 0.8rem;
    }

    .t-text{
      font-size: 0.7rem;
    }

    .t-input-editable{
      font-size: 1rem;
      line-height: 42px;
    }
  }

  &.size-large{
    .t-input-label{
      font-size: 1rem;
    }

    .t-text{
      font-size: 0.8rem;
    }

    .t-input-editable{
      font-size: 1.2rem;
      line-height: 50px;
    }
  }

  &.variant-default{
    label{
      display: block;
      width: 100%;
    }
  }

  &.variant-floating{
    .t-input-editable{
      padding-top: 1rem;
    }

    .t-input-label{
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

    &.focus, &.has-value{
      .t-input-label{
        transform: translateY(-120%);
        font-size: 0.7rem;
      }
    }
  }
}
</style>