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
  &.border-under{
    &::after{
      content: '';
      display: block;
    }

    // Horizontal
    &.top-start, &.top-center, &.top-end,
    &.bottom-start, &.bottom-center, &.bottom-end{
      &::after{
        width: var(--border);
        height: 2.5px;
        background-color: var(--color);
        position: absolute;
        transform: translateX(var(--transform));
        transition: transform 0.2s ease;
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
        background-color: var(--color);
        position: absolute;
        transform: translateY(var(--transform));
        transition: transform 0.2s ease;
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
}
</style>

<template>
  <ul ref="container" class="t-tabs" :style="{'--color': color, '--transform': transform, '--border': border + 'px'}" :class="{[placement]: true, [variant]: true}">
    <slot/>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, provide, ref, watch } from 'vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  placement?:string,
  variant?: string,
  color?: string,
  modelValue: String,
  border?: number,
  size?:string
}>(), {
  placement: 'top-start', // bottom-start top-end ...
  variant: 'border-under',
  color: 'primary',
  size: 'standard',
  border: 30
});
const emit = defineEmits(['update:modelValue'])
const transform = ref('0px');
const container = ref();

const color = computed(() => {
  let color = props.color;

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(color)) {
    color = `var(--t-color-status-${color})`;
  }

  return color;
});

const calcTransform = () => {
  setTimeout(() => {
    if (props.placement.startsWith('top-') || props.placement.startsWith('bottom-')) {
      let active = container.value.querySelector('.active');
      if (active) {
        let p = active.getBoundingClientRect().left - container.value.getBoundingClientRect().left + container.value.scrollLeft;
        let s = active.offsetWidth / 2;
        transform.value = (p + s - (props.border / 2)) + 'px';
      }
    }
    else if (props.placement.startsWith('left-') || props.placement.startsWith('right-')) {
      let active = container.value.querySelector('.active');
      if (active) {
        let p = active.getBoundingClientRect().top - container.value.getBoundingClientRect().top + container.value.scrollTop;
        let s = active.offsetHeight / 2;
        transform.value = (p + s - (props.border / 2)) + 'px';
      }
    }
  }, 50);
}

// provide cho các tab con
provide('tabsState', {
  active: computed(() => props.modelValue),
  color: color.value,
  size: props.size,
  variant: props.variant,
  setActive: (val:any) => {
    emit('update:modelValue', val);
  }
});

onMounted(() => {
  calcTransform();
});

watch(() => props.modelValue, () => {
  calcTransform();
})
</script>
