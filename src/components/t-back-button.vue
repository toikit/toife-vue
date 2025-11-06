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
  <button class="t-back-button" v-if="to || screenController.lastScreen" @pointerup="onClick">
    <slot><i class="ri-arrow-left-s-line"></i></slot>
  </button>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { screenController } from '../controllers';
import { useRouter } from 'vue-router';

// Default props, store
const props = defineProps<{
  to?: any,
  router?:any
}>();
const attrs = useAttrs();
const router = props.router || useRouter();

// Event when click on back button
// Handle back with router from props or use current router
const onClick = (e:any) => {
  if (attrs.onBack) {
    (attrs.onBack as Function)(e);
    return;
  }
  
  if (screenController.lastScreen.value) {
    router?.back?.();
  }
  else if (props.to) {
    router?.push?.(props.to);
  }
}
</script>