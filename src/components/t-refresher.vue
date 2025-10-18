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
  safe?:boolean,
  variant?: string
}>(), {
  threshold: 120,
  safe: false,
  variant: 'max'
});
const offset = ref(0);
const refreshing = ref(false);
const container = ref();
let cleanup: any;
let locked = false;

const close = () => {
  refreshing.value = false;
  offset.value = 0;
  locked = false;
};

const start = () => {
  locked = true;
  refreshing.value = true;
  offset.value = props.threshold;
  emit('refresh', close);
}

const cancel = () => {
  offset.value = 0;
  refreshing.value = false;
  locked = false;
  emit('cancel');
}

watch(() => container.value, () => {
  cleanup && cleanup.destroy();
  let screen = container.value.closest('.t-content');
  if (!screen) return;
  cleanup = gesture(screen, {
    options: {
      minMove: 20
    },

    beforeEvent(){
      if (screen.scrollTop > 0) return false;
      return true;
    },

    down(){
      if (refreshing.value || locked) return;
      emit('start');
    },

    move({ deltaY, initialDirection }: any) {
      if (refreshing.value || locked || initialDirection != 'down') return;

      if (props.variant == 'max') {
        if (deltaY >= props.threshold) {
          start();
          return;
        }
      }

      const v = deltaY < 0 ? 0 : deltaY;
      offset.value = v;
      emit('move', v);
    },
    up({ deltaY, initialDirection }: any) {
      if (refreshing.value || locked || initialDirection != 'down') return;

      // max
      if (props.variant == 'up' && deltaY >= props.threshold) {
        start();
      } else {
        cancel();
      }
    },
    cancel() {
      if (refreshing.value || locked) return;
      cancel();
    }
  }, {
    passive: false
  });
});

onUnmounted(() => {
  cleanup && cleanup.destroy();
});
</script>