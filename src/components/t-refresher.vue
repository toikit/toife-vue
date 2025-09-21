<style lang="scss" scoped>
// Class for item
.t-refresher{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: height 0.2s ease;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  
  &.safe{
    top: var(--t-safe-area-top);
  }
}
</style>

<template>
  <div class="t-refresher" ref="container" v-show="offset > 0" :class="{safe}">
    <slot :offset="offset" :refreshing="refreshing"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";
import { gesture } from "@toife/gesture";

const emit = defineEmits(['refresh', 'move', 'cancel', 'start']);
const props = withDefaults(defineProps<{
  threshold?:number,
  safe?:boolean
}>(), {
  threshold: 80,
  safe: false
});
const offset = ref(0);
const refreshing = ref(false);
const container = ref();
let cleanup: any;
let locked = false;
const close = () => {
  refreshing.value = false;
  offset.value = 0;
  if (cleanup) cleanup.cancel();
  setTimeout(() => {
    locked = false;
  }, 2000);
};
const start = () => {
  locked = true;
  refreshing.value = true;
  offset.value = props.threshold;
  emit('refresh', close);
}

watch(() => container.value, () => {
  cleanup && cleanup.destroy();
  let screen = container.value.closest('.t-content');
  if (!screen) return;
  cleanup = gesture(screen, {
    isMoving: false,
    options: {
      minDist: 60
    },
    down(){
      this.isMoving = false;
      emit('start');
    },
    move({ deltaY, initialDirection }: any) {
      if (refreshing.value || locked || initialDirection != 'down') return;

      // if ((deltaY > 10 && screen.scrollTop == 0) || (this.isMoving && deltaY >= 0)) {
      //   screen.classList.add('scroll-hidden');
      // }

      if (deltaY >= 120) {
        this.isMoving = false;
        start();
      } else if(deltaY > 10 || this.isMoving) {
        this.isMoving = true;
        offset.value = deltaY > 0 ? deltaY : 0;
        emit('move', deltaY);
      }
    },
    up({ deltaY, initialDirection }: any) {
      this.isMoving = false;
      // screen.classList.remove('scroll-hidden');
      if (refreshing.value || locked) return;
      if (deltaY > props.threshold && initialDirection == 'down') {
        start();
      } else {
        offset.value = 0;
        emit('cancel');
      }
    },
    cancel() {
      this.isMoving = false;
      // screen.classList.remove('scroll-hidden');
      if (refreshing.value || locked) return;
      refreshing.value = false;
      offset.value = 0;
      emit('cancel');
    }
  }, {
    passive: false
  });
});

onUnmounted(() => {
  cleanup && cleanup.destroy();
});
</script>