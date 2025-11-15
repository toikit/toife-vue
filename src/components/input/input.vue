<style lang="scss" src="./input.scss" scoped></style>
<template src="./input.html"></template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { Text } from '../text'
import { type InputProps, type InputEmit } from './input.type'

const props = withDefaults(defineProps<InputProps>(), {
  size: 'standard',
  rounded: false,
  label: '',
  placeholder: '',
  type: 'text',
  modelValue: '',
  variant: 'default',
  readonly: false
})

const emit = defineEmits<InputEmit>()
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