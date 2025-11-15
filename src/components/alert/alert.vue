<style lang="scss" src="./alert.scss" scoped></style>
<template src="./alert.html"></template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Present } from '../present';
import { Button as CustomButton } from '../button';
import { type AlertButton, type AlertEmit, type AlertProps } from './alert.type';

const props = withDefaults(defineProps<AlertProps>(), {
  title: '',
  message: '',
  actions: () => [],
  dismiss: () => []
});
const emit = defineEmits<AlertEmit>();


// State visible or not
const visible = ref(false);

// Ref of container element
const container = ref();

// State effect or not
const pop = ref(false);

// Method set state visible to open modal
const open = () => {
  visible.value = true;
}

// Method choose selection to confirm alert
const choose = (btn: any) => {
  visible.value = false;
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}

// Event when dimiss alert from click backdrop
const onDismiss = (val: any) => {
  if (props.dismiss && props.dismiss.includes(val)) {
    visible.value = false;
    emit('dismiss', val);
  }
  else if (val == 'backdrop') {
    pop.value = true;
    setTimeout(() => {
      pop.value = false;
    }, 300);
  }
}

// Define methods can be call from outside
defineExpose({
  open
});
</script>