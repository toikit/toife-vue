<style lang="scss" scoped>
.t-present-backdrop{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transition: background-color var(--t-present-transition, 0.2s) ease;
  background-color: rgba(var(--t-color-backdrop-rgb), var(--t-present-backdrop-opacity, 0));
}

.t-present{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: fit-content;
  height: fit-content;
  transition: transform var(--t-present-transition, 0.2s) ease;

  &.bottom{
    bottom: 0;
    left: 0;
    width: 100vw;
    transform: translateY(var(--t-present-content-transform, 100%));
  }

  &.top{
    top: 0;
    left: 0;
    width: 100vw;
    transform: translateY(var(--t-present-content-transform, -100%));
  }

  &.right{
    top: 0;
    right: 0;
    height: 100vh;
    transform: translateX(var(--t-present-content-transform, 100%));
  }

  &.left{
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(var(--t-present-content-transform, -100%));
  }

  &.center{
    width: fit-content;
    height: fit-content;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    opacity: var(--t-present-content-opacity, 1);
    transition: opacity var(--t-present-transition, 0.2s) ease;
  }
}
</style>

<template>
  <div class="t-present" ref="present" :class="{[placement]: true}" v-if="isRender" v-show="isShow" :style="{...styles, zIndex}"><slot/></div>
  <div class="t-present-backdrop" @click="onClickBackdrop" ref="backdrop" v-if="isRender" v-show="isShow" :style="{...styles, zIndex: zIndex - 1}"></div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue';
import { presentController } from '../controllers';

const zIndex = ref(0);
const isShow = ref(false);
const backdrop = ref();
const present = ref();
const props = withDefaults(defineProps<{
  keepalive?: boolean,
  visible?: boolean,
  backdrop?:boolean,
  placement?: string
}>(), {
  keepalive: true,
  visible: false,
  backdrop: true,
  placement: 'bottom' // top, left, right, center, bottom
});
const emit = defineEmits(['dismiss']);
const isRender = computed(() => {
  return isShow.value || props.keepalive;
});
const styles = reactive({
  '--t-present-backdrop-opacity': '0.4',
  '--t-present-transition': '0.2s',
  '--t-present-content-transform': '0px',
  '--t-present-content-opacity': '1'
});

const render = (value:any) => {
  if (!props.backdrop) styles['--t-present-backdrop-opacity'] = '0';
  else if (value?.backdropOpacity) styles['--t-present-backdrop-opacity'] = value.backdropOpacity;
  if (value?.transition) {
    styles['--t-present-transition'] = value.transition;
    styles['--t-present-transition'] = value.transition;
  }
  if (value?.contentTransform) styles['--t-present-content-transform'] = value.contentTransform;
  if (value?.contentOpacity) styles['--t-present-content-opacity'] = value.contentOpacity;
}

const open = () => {
  render({
    contentTransform: '0px',
    transition: '0.2s',
    backdropOpacity: '0.4',
    contentOpacity: '1'
  });
}

const close = () => {
  let contentTransform = '0px';
  let contentOpacity = '1';

  if (props.placement == 'bottom' || props.placement == 'right') {
    contentTransform = '100%';
  }
  else if (props.placement == 'top' || props.placement == 'left') {
    contentTransform = '-100%';
  }
  else if (props.placement == 'center') {
    contentTransform = '0px';
    contentOpacity = '0';
  }

  render({
    contentTransform,
    transition: '0.2s',
    contentOpacity,
    backdropOpacity: '0'
  });
}

watch(() => props.visible, () => {
  if (props.visible) {
    isShow.value = true;
    zIndex.value = presentController.getNewIndex();

    setTimeout(() => {
      open();
    }, 50);
  } else {
    close();

    setTimeout(() => {
      isShow.value = false;
    }, 200);
  }
});

defineExpose({
  render,
  open,
  close
});

const onClickBackdrop = (e:any) => {
  e.preventDefault();
  emit('dismiss', 'backdrop');
}

// Mounted
close();
</script>