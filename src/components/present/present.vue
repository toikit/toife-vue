<style lang="scss" src="./present.scss" scoped></style>
<template src="./present.html"></template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { getNewPresentIndex } from './factory';
import { type PresentProps, type PresentEmit } from './present.type';

const zIndex = ref(0);
const isShow = ref(false);
const backdrop = ref();
const present = ref();
const props = withDefaults(defineProps<PresentProps>(), {
  keepalive: true,
  visible: false,
  backdrop: true,
  duration: 200,
  placement: 'bottom' // top, left, right, center, bottom
});

const emit = defineEmits<PresentEmit>();
const isRender = computed(() => {
  return isShow.value || props.keepalive;
});
const isBounced = ref(false);
const styles = reactive({
  '--t-present-backdrop-opacity': '0.4',
  '--t-present-transition': '0.2s',
  '--t-present-content-transform': '0px',
  '--t-present-content-opacity': '1'
});
const time = computed(() => {
  return (props.duration / 1000) + 's';
});

const render = (value: any) => {
  if (!props.backdrop) styles['--t-present-backdrop-opacity'] = '0';
  else if (value?.backdropOpacity) styles['--t-present-backdrop-opacity'] = value.backdropOpacity;
  if (value.transition) {
    styles['--t-present-transition'] = value.transition;
  }
  if (value.contentTransform) styles['--t-present-content-transform'] = value.contentTransform;
  if (value.contentOpacity) styles['--t-present-content-opacity'] = value.contentOpacity;
}

const open = () => {
  if (props.bounce !== undefined && !isBounced.value) {
    isBounced.value = true;
    let contentTransform = props.bounce;

    if (props.placement == 'bottom' || props.placement == 'right') {
      contentTransform = `calc(${props.bounce} * -1)`
    }

    render({
      contentTransform,
      transition: time.value,
      backdropOpacity: '0.4',
      contentOpacity: '1'
    });

    setTimeout(() => {
      render({
        contentTransform: '0px'
      });
    }, props.duration);
  } else {
    render({
      contentTransform: '0px',
      transition: time.value,
      backdropOpacity: '0.4',
      contentOpacity: '1'
    });
  }
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
    transition: time.value,
    contentOpacity,
    backdropOpacity: '0'
  });
}

watch(() => props.visible, () => {
  if (props.visible) {
    isBounced.value = false;
    isShow.value = true;
    zIndex.value = getNewPresentIndex();

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

const onClickBackdrop = (e: any) => {
  e.preventDefault();
  emit('dismiss', 'backdrop');
}

// Mounted
onMounted(() => {
  if (props.visible) open();
  else close();
});
</script>