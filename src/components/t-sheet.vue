<style lang="scss" scoped>
.t-sheet{
  background: var(--background);
  position: relative;

  &.fullscreen{
    height: 100%;
    width: 100%;
  }

  &.bottom, &.top{
    width: 100%;
  }

  &.left, &.right{
    height: 100%;
  }

  &.rounded:not(.fullscreen){
    &.bottom.radius{
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    &.top.radius{
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }

    &.left.radius{
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }

    &.right.radius{
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }

    &.center.radius{
      border-radius: 15px;
    }

    &.radius{
      overflow: hidden;
    }
  }
}

.t-sheet-close{
  position: absolute;
  color: var(--t-color-surface);
  background-color: transparent;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  font-size: 1rem;    
  border: 1px solid var(--t-color-surface);
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>

<template>
  <t-present ref="present" :fullscreen="props.fullscreen" :placement="props.placement" :backdrop="backdrop" :visible="props.visible" :keepalive="props.keepalive" @dismiss="close">
    <t-pull-signal :placement="props.placement" v-if="props.gesture && props.placement != 'center'"></t-pull-signal>
    <button class="t-sheet-close" @click="close('close-button')" v-if="props.closeButton && props.placement == 'center'"><slot name="close-icon"><i class="ri-close-large-line"></i></slot></button>
    <div class="t-sheet" :style="{'--background': props.background}" ref="sheet" :class="{'fullscreen': props.fullscreen, [props.placement]: true, rounded, radius: props.radius}">
      <slot/>
    </div>
  </t-present>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, watch } from 'vue';
import { gesture } from '@toife/gesture';
import { blurCurrentActive, isFormElement } from '../utils';
import TPresent from './t-present.vue';
import TPullSignal from './t-pull-signal.vue';

const props = withDefaults(defineProps<{
  background?:string,
  visible?:boolean,
  gesture?:boolean,
  fullscreen?:boolean,
  placement?:string,
  keepalive?:boolean,
  backdrop?:boolean,
  rounded?:boolean,
  radius?:boolean,
  closeButton?:boolean // only with center
}>(), {
  background: 'var(--t-color-surface)',
  backdrop: true,
  keepalive: true,
  visible: false,
  gesture: true,
  fullscreen: false,
  rounded: true,
  placement: 'bottom',
  closeButton: true,
  radius: true
});
const emit = defineEmits(['dismiss']);
const sheet = ref();
const present = ref();
const isBusy = ref(false);
let ges:any = null;

const gestureDir = computed(() => {
  if (props.placement == 'bottom') return 'down';
  if (props.placement == 'top') return 'up';
  if (props.placement == 'left') return 'left';
  if (props.placement == 'right') return 'right';
});

const close = (e:any) => {
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
      options: {
        minDist: 30
      },

      pointerId: null,

      beforeEvent(e:any){
        let isPrevent:boolean = false;
        let isNext:boolean = false;

        if (isBusy.value || !props.gesture || props.placement == 'center') {
          isPrevent = true;
        }
        else if (this.pointerId) {
          isPrevent = true;
          isNext = this.pointerId == e.pointerId;
        }
        else if (e.type == 'pointerdown') {
          this.pointerId = e.pointerId;
          isPrevent = true;
          isNext = true;
        }

        if (isPrevent) {
          e.stopPropagation();
          if (!isFormElement(e.target)) {
            e.preventDefault();
            blurCurrentActive();
          }
        }

        return isNext;
      },

      afterEvent(e:any){
        if (e.type == 'pointerup' || e.type == 'pointercancel') {
          this.pointerId = null;
        }
      },

      fast({d}: any){
        busy();
        if (d == gestureDir.value) {
          emit('dismiss', 'gesture');
        } else {
          present.value.open();
        }
      },

      move({dy, dx, d}:any){
        if (d != gestureDir.value) return;
        let tv = 0;
        if (props.placement == 'bottom' || props.placement == 'top') tv = dy;
        else tv = dx;
        present.value.render({
          contentTransform: tv + 'px',
          transition: '0s'
        });
      },

      up({dy, dx, d}:any){
        busy();
        if (d != gestureDir.value) {
          present.value.open();
          return;
        }

        let size, diff, val;
        if (props.placement == 'bottom' || props.placement == 'top') {
          size = sheet.value.offsetHeight;
          val = dy;
        }
        else {
          size = sheet.value.offsetWidth;
          val = dx;
        }
        
        diff = val / size * 100;

        if (diff > 50) {
          emit('dismiss', 'gesture');
        } else {
          present.value.open();
        }
      },

      cancel(){
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