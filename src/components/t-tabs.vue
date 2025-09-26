<style lang="scss" scoped>
.t-tabs{
  height: fit-content;
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;

  > * {
    z-index: 1;
  }

  &::after{
    z-index: 0;
  }

  // Placement
  &.top-start, &.bottom-start, &.left-start, &.right-start{
    justify-content: flex-start;
  }

  &.top-end, &.bottom-end, &.left-end, &.right-end{
    justify-content: flex-end;
  }

  &.top-center, &.bottom-center, &.left-center, &.right-center{
    justify-content: center;
  }

  // Direction
  &.top-start, &.top-center, &.top-end,
  &.bottom-start, &.bottom-center, &.bottom-end{
    flex-direction: row;
    column-gap: 1rem;
  }

  &.left-start, &.left-center, &.left-end,
  &.right-start, &.right-center, &.right-end{
    flex-direction: column;
    row-gap: 1rem;
  }

  // Variant
  &.variant-border-under{
    &::after{
      content: '';
      display: block;
      position: absolute;
      transition: transform 0.2s ease;
      background-color: var(--background);
    }

    // Horizontal
    &.top-start, &.top-center, &.top-end,
    &.bottom-start, &.bottom-center, &.bottom-end{
      &::after{
        width: var(--border);
        height: 2.5px;
        transform: translateX(var(--transform));
      }
    }
    &.top-start, &.top-center, &.top-end{
      &::after{
        bottom: 0;
        left: 0;
      }
    }
    &.bottom-start, &.bottom-center, &.bottom-end{
      &::after{
        top: 0;
        left: 0;
      }
    }

    // Vertical
    &.left-start, &.left-center, &.left-end,
    &.right-start, &.right-center, &.right-end{
      &::after{
        height: var(--border);
        width: 2.5px;
        transform: translateY(var(--transform));
      }
    }
    &.left-start, &.left-center, &.left-end{
      &::after{
        top: 0;
        right: 0;
      }
    }
    &.right-start, &.right-center, &.right-end{
      &::after{
        top: 0;
        left: 0;
      }
    }
  }

  &.variant-tag{
    &::after{
      content: '';
      display: block;
      width: var(--width);
      height: var(--height);
      top: var(--top);
      left: var(--left);
      transition: transform 0.2s ease;
      position: absolute;
      background-color: var(--background);
      border-radius: var(--radius);
    }

    // Horizontal
    &.top-start, &.top-center, &.top-end,
    &.bottom-start, &.bottom-center, &.bottom-end{
      &::after{
        transform: translateX(var(--transform));
      }
    }

    // Vertical
    &.left-start, &.left-center, &.left-end,
    &.right-start, &.right-center, &.right-end{
      &::after{
        transform: translateY(var(--transform));
      }
    }
  }
}
</style>

<template>
  <ul ref="container" class="t-tabs" :class="{[placement]: true, [`variant-${variant}`]: true}" :style="[{'--background': __color.background, '--color': __color.text}, styles]">
    <slot/>
  </ul>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, provide, ref, watch } from 'vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  placement?:string,
  variant?: string,
  color?: string,
  modelValue: string,
  border?: number,
  size?:string,
  margin?:any,
  radius?:number
}>(), {
  placement: 'top-start', // bottom-start top-end ...
  variant: 'border-under',
  color: 'primary',
  size: 'standard',
  margin: [0,0],
  border: 30,
  radius: 4,
});
const emit = defineEmits(['update:modelValue'])
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
      text = `var(--t-color-status-${props.color})`;
    } else {
      text = props.color;
    }
  }

  if (props.variant == 'border-under') {
    text = `currentColor`;

    if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      background = `var(--t-color-status-${props.color})`;
    } else {
      background = props.color;
    }
  }

  if (props.variant == 'tag') {
    if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      background = `var(--t-color-status-${props.color})`;
      text = `var(--t-color-status-${props.color}-text)`;
    } else {
      background = props.color;
      text = `currentColor`;
    }
  }

  return {background, text};
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
  setValue: (val:any) => {
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
