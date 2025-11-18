<style lang="scss" src="./tabs.scss" scoped></style>
<template src="./tabs.html"></template>
<script lang="ts" setup>
import { nextTick, onMounted, provide, ref, watch } from 'vue';
import { computed } from 'vue';
import { type TabsProps, type TabsEmit } from './tabs.type';

const props = withDefaults(defineProps<TabsProps>(), {
  placement: 'top-start', // bottom-start top-end ...
  variant: 'border-under',
  color: 'primary',
  size: 'standard',
  margin: [0, 0],
  border: 30,
  radius: 4,
});

const emit = defineEmits<TabsEmit>()
const transform = ref('0px');
const width = ref(0);
const height = ref(0);
const container = ref();

const __color = computed(() => {
  let background = '';
  let text = '';

  if (props.variant == 'text') {
    background = `transparent`;

    if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      text = `var(--toife-color-status-${props.color})`;
    } else {
      text = props.color;
    }
  }

  if (props.variant == 'border-under') {
    text = `currentColor`;

    if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      background = `var(--toife-color-status-${props.color})`;
    } else {
      background = props.color;
    }
  }

  if (props.variant == 'tag') {
    if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      background = `var(--toife-color-status-${props.color})`;
      text = `var(--toife-color-status-${props.color}-text)`;
    } else {
      background = props.color;
      text = `currentColor`;
    }
  }

  return { background, text };
});

const styles = computed(() => {
  if (props.variant == 'border-under') return {
    '--transform': transform.value,
    '--border': props.border + 'px'
  } as any

  if (props.variant == 'tag') {
    return {
      '--top': props.margin[0] + 'px',
      '--height': (height.value - (props.margin[0] * 2)) + 'px',
      '--left': props.margin[1] + 'px',
      '--width': (width.value - (props.margin[1] * 2)) + 'px',
      '--transform': transform.value,
      '--radius': props.radius + 'px'
    } as any
  }

  return {};
});

const calcTransform = () => {
  if (props.variant == 'border-under') {
    let active = container.value.querySelector('.active');

    if (active) {
      if (props.placement.startsWith('top-') || props.placement.startsWith('bottom-')) {
        let p = active.getBoundingClientRect().left - container.value.getBoundingClientRect().left + container.value.scrollLeft;
        let s = active.offsetWidth / 2;
        transform.value = (p + s - (props.border / 2)) + 'px';
      }
      else if (props.placement.startsWith('left-') || props.placement.startsWith('right-')) {
        let p = active.getBoundingClientRect().top - container.value.getBoundingClientRect().top + container.value.scrollTop;
        let s = active.offsetHeight / 2;
        transform.value = (p + s - (props.border / 2)) + 'px';
      }
    }
  }

  if (props.variant == 'tag') {
    let active = container.value.querySelector('.active');

    if (active) {
      let w = active.offsetWidth;
      let h = active.offsetHeight;

      if (props.placement.startsWith('top-') || props.placement.startsWith('bottom-')) {
        let p = active.getBoundingClientRect().left - container.value.getBoundingClientRect().left + container.value.scrollLeft;
        transform.value = p + 'px';
      } else if (props.placement.startsWith('left-') || props.placement.startsWith('right-')) {
        let p = active.getBoundingClientRect().top - container.value.getBoundingClientRect().top + container.value.scrollTop;
        transform.value = p + 'px';
      }

      width.value = w;
      height.value = h;
    }
  }
}

// provide cho các tab con
provide('tabsState', {
  activeValue: computed(() => props.modelValue),
  color: __color.value,
  size: props.size,
  variant: props.variant,
  setValue: (val: any) => {
    emit('update:modelValue', val);
  }
});

watch(() => props.modelValue, async () => {
  await nextTick();
  calcTransform();
});

onMounted(async () => {
  await nextTick();
  calcTransform();
});
</script>
