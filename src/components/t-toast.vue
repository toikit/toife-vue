<style lang="scss" scoped>
.t-toast{
  width: calc(100% - 2rem);
  height: fit-content;
  max-width: var(--t-app-overlay-max-width);
  position: absolute;
  z-index: 9999;
  left: 50%;
  transition: all 0.2s ease;
  opacity: 1;
  font-size: 0.8rem;
  line-height: 0.8rem;

  .t-toast-content{
    color: var(--color);
    background: var(--background);
    border: var(--border);
    box-shadow: 0px 0px 17px 0px rgba(var(--t-color-backdrop-rgb), 0.15);
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;
  }

  &.bottom{
    bottom: 0;
    transform: translate(-50%, 100%);

    &.open{
      transform: translate(-50%, calc((var(--t-safe-area-bottom) + 1rem + var(--space)) * -1));
    }
  }

  &.top{
    top: 0;
    transform: translate(-50%, -100%);

    &.open{
      transform: translate(-50%, calc(var(--t-safe-area-top) + 1rem + var(--space)));
    }
  }

  &.closing{
    opacity: 0;
  }
}
</style>

<template>
  <div class="t-toast" v-if="isRender" :class="{[props.placement]: true, open: _visible, closing: isClosing}" :style="{'--space': props.space, ...styles}">
    <slot name="content"><div class="t-toast-content">{{ props.message }}</div></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  message: any,
  space?: any,
  placement?:string,
  color?:any,
  variant?:string,
  visible?:boolean
}>(), {
  placement: 'bottom',
  space: "0px",
  color:null,
  variant:'default',
  visible: false
});
const emit = defineEmits(['dismiss']);
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
  let st:any;

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
        '--color': 'var(--t-color-status-'+props.color+'-text)',
        '--background': 'rgba(var(--t-color-status-'+props.color+'-rgb), 1)'
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
        '--color': 'var(--t-color-status-'+props.color+')',
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
        '--border': '0.55px solid var(--t-color-status-'+props.color+')',
        '--color': 'var(--t-color-status-'+props.color+')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': '0.55px solid '+props.color,
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