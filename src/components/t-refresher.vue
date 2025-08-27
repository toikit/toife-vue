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
import { ref, onMounted, onUnmounted, watch } from "vue";
import { gesture } from "@toife/gesture";

const emit = defineEmits(['refresh']);
const offset = ref(0);
const refreshing = ref(false);
const container = ref();
let cleanup: any;
const threshold = 80;
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
    options: {
      minDist: 60
    },
    
    move({ dy, e }: any) {
      if (refreshing.value || locked || dy < 0) return;
      if (dy >= 120) {
        start();
      } else {
        offset.value = dy;
      }
    },
    up({ dy, e }: any) {
      if (refreshing.value || locked) return;

      if (dy > threshold) {
        start();
      } else {
        offset.value = 0;
      }
    },
    cancel() {
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