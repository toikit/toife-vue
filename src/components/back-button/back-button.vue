<style lang="scss" scoped>
.toife-back-button {
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
  <button :class="{ 'toife-back-button': true }" v-if="to || screenRouter.lastScreen" @pointerup="onClick">
    <slot><i class="ri-arrow-left-s-line"></i></slot>
  </button>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { useRouter } from 'vue-router';
import { useScreenRouter } from '../screen-router';

// Default props, store
const props = defineProps<{
  to?: any,
  router?: any
}>();

const attrs = useAttrs();
const router = props.router || useRouter();
const screenRouter = useScreenRouter();


// Event when click on back button
// Handle back with router from props or use current router
const onClick = (e: any) => {
  if (attrs.onBack) {
    (attrs.onBack as Function)(e);
    return;
  }

  if (screenRouter.lastScreen.value) {
    router?.back?.();
  }
  else if (props.to) {
    router?.push?.(props.to);
  }
}
</script>