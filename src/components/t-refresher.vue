<style lang="scss" scoped>
// Class for item
.t-refresher{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img.spiner {
  animation: spinrefresh 0.7s linear infinite;
}

@keyframes spinrefresh {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<template>
  <div class="t-refresher" ref="container" v-show="offset > 0" :style="{ height: `${offset}px` }">
    <img :class="{spiner: refreshing}" src="https://static.toikit.com/toikit/home_2.png?v=3" alt="Loading..." style="width:22px;height:22px;" />
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";
import { gesture } from "@toife/gesture";

const emit = defineEmits(['refresh']);
const offset = ref(0);
const refreshing = ref(false);
const container = ref();
let cleanup: any;
const threshold = 80; // px, kéo đủ mới trigger refresh
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
  offset.value = threshold;
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
    },
    move({ deltaY, initialDirection }: any) {
      if (refreshing.value || locked || initialDirection != 'down') return;

      // if ((deltaY > 10 && screen.scrollTop == 0) || (this.isMoving && deltaY >= 0)) {
      //   screen.classList.add('scroll-hidden');
      // }

      if (deltaY >= 120) {
        this.isMoving = false;
        start();
      } else if(deltaY > 10 || (this.isMoving && deltaY >= 0)) {
        this.isMoving = true;
        offset.value = deltaY;
      }
    },
    up({ deltaY, initialDirection }: any) {
      this.isMoving = false;
      // screen.classList.remove('scroll-hidden');
      if (refreshing.value || locked) return;
      if (deltaY > threshold && initialDirection == 'down') {
        start();
      } else {
        offset.value = 0;
      }
    },
    cancel() {
      this.isMoving = false;
      // screen.classList.remove('scroll-hidden');
      if (refreshing.value || locked) return;
      refreshing.value = false;
      offset.value = 0;
    }
  }, {
    passive: false
  });
});

onUnmounted(() => {
  cleanup && cleanup.destroy();
});
</script>