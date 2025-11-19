<style lang="scss" src="./sheet.scss" scoped></style>
<template src="./sheet.html"></template>
<script lang="ts" setup>
import { computed, onUnmounted, ref, watch } from 'vue';
import { gesture as toifeGesture } from '@toife/gesture';
import { Present } from '../present';
import { GestureIndicator } from '../gesture-indicator';
import { type SheetProps, type SheetEmit } from './sheet.type';

const props = withDefaults(defineProps<SheetProps>(), {
  background: 'var(--toife-color-surface)',
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

const emit = defineEmits<SheetEmit>();
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
    ges = toifeGesture(sheet.value, {
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