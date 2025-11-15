<style lang="scss" src="./back-button.scss" scoped></style>
<template src="./back-button.html"></template>
<script lang="ts" setup>
import { useAttrs } from 'vue';
import { useRouter } from 'vue-router';
import { useScreenRouter } from '../screen-router';
import { type BackButtonProps } from './back-button.type';

const props = defineProps<BackButtonProps>();

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