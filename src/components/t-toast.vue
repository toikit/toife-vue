<style lang="scss" scoped>
.t-toast{
  width: calc(100vw - 2rem);
  height: fit-content;
  max-width: 400px;
  padding: 0.75rem 1rem;
  position: absolute;
  z-index: 999;
  border-radius: 8px;
  left: 50%;
  transition: all 0.2s ease;
  opacity: 1;

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

  &.variant{
    &-default{
      background-color: rgba(var(--color), 0.7);
      color: var(--t-color-text);
    }

    &-text{
      background-color: transparent;
      color: rgba(var(--color), 1)
    }

    &-outline{
      background-color: transparent;
      color: rgba(var(--color), 1);
      border: 1px solid rgba(var(--color), 0.7);
    }
  }
}
</style>

<template>
  <div class="t-toast" v-if="isRender" :class="{[props.placement]: true, open: visible, closing: isClosing, ['variant-'+props.variant]:true}" :style="{'--space': props.space, '--color': dcolor}">{{ props.message }}</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
  message: any,
  space?: any,
  placement?:string,
  duration?:number,
  color?:string,
  variant?:string
}>(), {
  placement: 'bottom',
  space: "0px",
  duration: 2000,
  color:'secondary',
  variant:'default'
});
const emit = defineEmits(['close']);
const visible = ref(false);
const isRender = ref(false);
const isClosing = ref(false);

const open = () => {
  isRender.value = true;
  isClosing.value = false;

  setTimeout(() => {
    visible.value = true;
  }, 10);

  setTimeout(() => {
    close();
  }, props.duration + 10);
}

const close = () => {
  isClosing.value = true;

  setTimeout(() => {
    isRender.value = false;
    visible.value = false;
    emit('close');
  }, 300);
}

const dcolor = computed(() => {
  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    return `var(--t-color-status-${props.color}-rgb)`;
  }

  return props.color;
});

defineExpose({
  open
});
</script>