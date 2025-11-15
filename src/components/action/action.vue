<style lang="scss" src="./action.scss" scoped></style>
<template src="./action.html"></template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Present as TPresent } from '../present';
import { Button as TButton } from '../button';
import { type ActionButton, type ActionEmit, type ActionProps } from './action.type';

const props = withDefaults(defineProps<ActionProps>(), {
  actions: () => [],
  visible: false,
  dismiss: () => []
});

const emit = defineEmits<ActionEmit>();

// State visible OPEN/CLOSE action modal
const _visible = ref(false);

// Ref of action element
const container = ref();

// State of pop or not
const pop = ref(false);

// Open action modal
const open = () => {
  _visible.value = true;
}

// Close action modal
const close = () => {
  _visible.value = false;
}

// Select option on action modal
const choose = (btn: ActionButton) => {
  close();
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}

// When click outside modal
const onDismiss = (val: string) => {
  if (props.dismiss && props.dismiss.includes(val)) {
    close();
    emit('dismiss', val);
  }
  else if (val === 'backdrop') {
    pop.value = true;
    setTimeout(() => {
      pop.value = false;
    }, 300);
  }
}

// Listen event when value of visible change
// If true then open modal, else close modal
watch(() => props.visible, (value) => {
  if (value) {
    open();
  } else {
    close();
  }
}, { immediate: true });

// Define then method can access from out of component
defineExpose({
  open,
  close
});
</script>