<style lang="scss" scoped>
.t-back-button {
  font-size: 2rem;
  background-color: transparent;
  width: 44px;
  height: 100%;
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--t-color-text);
}
</style>

<template>
  <button class="t-back-button" v-if="to || screenController.hasPrevious" @click="onClick">
    <slot><i class="ri-arrow-left-s-line"></i></slot>
  </button>
</template>

<script lang="ts" setup>
import { screenController } from '../controllers';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps<{
  to?: any
}>();
const onClick = () => {
  if (screenController.hasPrevious.value) {
    router?.back?.();
  }
  else if (props.to) {
    router?.push?.(props.to);
  }
}
</script>