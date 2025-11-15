<style lang="scss">
.toife-collapse-header {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem 0;

  >* {
    display: flex;
    align-items: center;
  }

  i {
    font-size: 1.2rem !important;
  }

  .icon {
    justify-content: flex-end;

    i {
      font-size: 1.5rem !important;
    }
  }

  .toife-collapse-title {
    flex: 1
  }

  >*:first-child:not(.toife-collapse-title) {
    margin-right: 0.25rem;
  }
}

.toife-collapse {
  .toife-collapse-content {
    height: var(--height);
    transition: height .2s ease;
    overflow: auto;
  }

  &:not(.open) .toife-collapse-content {
    height: 0px !important;
  }
}
</style>

<template>
  <div :class="{ 'toife-collapse': true, open: isOpen }" :style="{ '--height': height }">
    <div :class="{ 'toife-collapse-header': true }" @pointerup="onToggle">
      <slot name="icon"></slot>
      <div :class="{ 'toife-collapse-title': true }">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <slot name="toggle">
        <div class="icon" v-if="isOpen"><i class="ri-arrow-up-s-line"></i></div>
        <div class="icon" v-else><i class="ri-arrow-down-s-line"></i></div>
      </slot>
    </div>
    <div :class="{ 'toife-collapse-content': true }">
      <div ref="content">
        <slot name="content">
          <slot />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  title?: string
}>();
const emit = defineEmits(['change']);

const isOpen = ref(false);
const height = ref('');
const content = ref();

const onToggle = () => {
  isOpen.value = !isOpen.value;
  height.value = `calc(${content.value.offsetHeight}px + 2rem)`;
  emit('change', isOpen.value);
}

emit('change', isOpen.value);
</script>