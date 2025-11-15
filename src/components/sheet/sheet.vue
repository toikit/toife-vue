<style lang="scss" scoped>
.toife-sheet {
  background: var(--background);
  position: relative;

  &.bottom,
  &.top,
  &.fullscreen {
    width: var(--t-app-width);
    max-width: var(--t-app-max-width);
  }

  &.left,
  &.right,
  &.fullscreen {
    height: var(--t-app-height);
    max-height: var(--t-app-max-height);
  }

  &:not(.fullscreen) {
    &.rounded {
      &.bottom {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }

      &.top {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }

      &.left {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      }

      &.right {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }

      &.center {
        border-radius: 15px;
      }

      overflow: hidden;
    }

    &.top {
      max-height: calc(var(--t-app-max-height) - var(--t-safe-area-bottom));
      max-width: var(--t-app-max-width);
    }

    &.bottom {
      max-height: calc(var(--t-app-max-height) - var(--t-safe-area-top));
      max-width: var(--t-app-max-width);
    }

    &.left {
      max-width: calc(var(--t-app-max-width) - var(--t-safe-area-right));
      max-height: var(--t-app-max-height);
    }

    &.right {
      max-width: calc(var(--t-app-max-width) - var(--t-safe-area-left));
      max-height: var(--t-app-max-height);
    }
  }
}
</style>

<template>
  <present ref="present" :duration="props.duration" :bounce="props.bounce" :class="props.class"
    :placement="props.placement" :backdrop="backdrop" :visible="props.visible" :keepalive="props.keepalive"
    @dismiss="close" :style="props.style">
    <gesture-indicator :placement="props.placement"
      v-if="props.gesture && props.indicator && props.placement != 'center'"></gesture-indicator>
    <div ref="sheet" :class="{ 'toife-sheet': true, 'fullscreen': props.fullscreen, [props.placement]: true, rounded }"
      :style="{ '--background': props.background }">
      <slot />
    </div>
  </present>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, watch } from 'vue';
import { gesture } from '@toife/gesture';
import { Present } from '../present';
import { GestureIndicator } from '../gesture-indicator';

const props = withDefaults(defineProps<{
  background?: string,
  class?: any,
  visible?: boolean,
  gesture?: boolean,
  fullscreen?: boolean,
  placement?: string,
  keepalive?: boolean,
  backdrop?: boolean,
  rounded?: boolean,
  indicator?: boolean,
  duration?: number,
  bounce?: any,
  style?: any,
}>(), {
  background: 'var(--t-color-surface)',
  backdrop: true,
  keepalive: true,
  visible: false,
  gesture: true,
  fullscreen: false,
  rounded: false,
  placement: 'bottom',
  indicator: true,
  duration: 200
});

const emit = defineEmits(['dismiss']);
const sheet = ref();
const present = ref();
const isBusy = ref(false);
let ges: any = null;

const gestureDir = computed(() => {
  if (props.placement == 'bottom') return 'down';
  if (props.placement == 'top') return 'up';
  if (props.placement == 'left') return 'left';
  if (props.placement == 'right') return 'right';
});

const close = (e: any) => {
  emit('dismiss', e);
}

const busy = () => {
  isBusy.value = true;
  setTimeout(() => {
    isBusy.value = false;
  }, 300);
}

watch(() => sheet.value, (val) => {
  if (val) {
    ges = gesture(sheet.value, {
      isMoving: false,

      options: {
        minDist: 30
      },

      beforeEvent(e: any) {
        if (isBusy.value || !props.gesture || props.placement == 'center') {
          return false;
        }

        return true;
      },

      down() {
        this.isMoving = false;
      },

      fast({ initialDirection }: any) {
        busy();
        if (initialDirection == gestureDir.value) {
          emit('dismiss', 'gesture');
        } else {
          present.value.open();
        }
      },

      move({ deltaY, deltaX, initialDirection }: any) {
        if (initialDirection != gestureDir.value) return;
        let tv = 0;
        if (props.placement == 'bottom' || props.placement == 'top') tv = deltaY;
        else tv = deltaX;

        if (props.placement == 'bottom') {
          tv = deltaY > 0 ? deltaY : 0;
        }

        if (props.placement == 'top') {
          tv = deltaY < 0 ? deltaY : 0;
        }

        if (props.placement == 'left') {
          tv = deltaX < 0 ? deltaX : 0;
        }

        if (props.placement == 'right') {
          tv = deltaX > 0 ? deltaX : 0;
        }

        if (
          (props.placement == 'bottom' && (tv >= 10 || this.isMoving))
          || (props.placement == 'top' && (tv <= -10 || this.isMoving))
          || (props.placement == 'left' && (tv <= -10 || this.isMoving))
          || (props.placement == 'right' && (tv >= 10 || this.isMoving))
        ) {
          this.isMoving = true;
          present.value.render({
            contentTransform: tv + 'px',
            transition: '0s'
          });
        }
      },

      up({ deltaY, deltaX, initialDirection }: any) {
        this.isMoving = false;
        busy();
        if (initialDirection != gestureDir.value) {
          present.value.open();
          return;
        }

        let size, diff, val;
        if (props.placement == 'bottom' || props.placement == 'top') {
          size = sheet.value.offsetHeight;
          val = deltaY;
        }
        else {
          size = sheet.value.offsetWidth;
          val = deltaX;
        }

        diff = val / size * 100;

        if (diff > 50) {
          emit('dismiss', 'gesture');
        } else {
          present.value.open();
        }
      },

      cancel() {
        this.isMoving = false;
        busy();
        present.value.open();
      }
    })
  }
});

onUnmounted(() => {
  ges && ges.destroy();
});
</script>