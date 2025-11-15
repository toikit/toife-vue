<style lang="scss" src="./toast.scss" scoped></style>
<template src="./toast.html"></template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { type ToastProps, type ToastEmit } from './toast.type';

const props = withDefaults(defineProps<ToastProps>(), {
  placement: 'bottom',
  space: "0px",
  color: null,
  variant: 'default',
  visible: false
});

const emit = defineEmits<ToastEmit>();
const _visible = ref(false);
const isRender = ref(false);
const isClosing = ref(false);

const open = () => {
  isRender.value = true;
  isClosing.value = false;

  setTimeout(() => {
    _visible.value = true;
  }, 10);
}

const close = () => {
  isClosing.value = true;

  setTimeout(() => {
    isRender.value = false;
    _visible.value = false;
    emit('dismiss');
  }, 300);
}

watch(() => props.visible, (value) => {
  if (value) {
    open();
  } else {
    close();
  }
});

const styles = computed(() => {
  let st: any;

  if (props.variant == 'default') {
    if (!props.color) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-text)',
        '--background': 'rgba(var(--t-color-surface-rgb), 1)'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-status-' + props.color + '-text)',
        '--background': 'rgba(var(--t-color-status-' + props.color + '-rgb), 1)'
      };
    }
    else {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-text)',
        '--background': props.color
      };
    }
  }

  if (props.variant == 'text') {
    if (!props.color) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-text)',
        '--background': 'transparent'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-status-' + props.color + ')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': 'none',
        '--color': props.color,
        '--background': 'transparent'
      };
    }
  }

  if (props.variant == 'outline') {
    if (!props.color) {
      st = {
        '--border': '0.55px solid var(--t-color-text)',
        '--color': 'var(--t-color-text)',
        '--background': 'transparent'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': '0.55px solid var(--t-color-status-' + props.color + ')',
        '--color': 'var(--t-color-status-' + props.color + ')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': '0.55px solid ' + props.color,
        '--color': props.color,
        '--background': 'transparent'
      };
    }
  }

  return st;
});

defineExpose({
  open,
  close
});
</script>