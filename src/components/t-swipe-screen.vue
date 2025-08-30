<script lang="ts" setup>
import { markRaw, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gesture } from "@toife/gesture";
import { screenController } from "../controllers";
import TScreen from "./t-screen.vue";

let routeComponents:any = {};
const router = useRouter();
const route = useRoute();
const routes:any = router.getRoutes();
const isBusy = ref(false);
const emit = defineEmits(['change']);

for (let r of routes) {
  routeComponents[r.name] = r.components;
}

// Add next screen to dom
const nextScreen = (name:any) => {
  if (!name) return;
  screenController.addScreen({
    name,
    target: null,
    component: markRaw(routeComponents[name] || null)
  });
}

// Add ref
const addScreenRef = (index:any, target:any) => {
  if (!target || screenController.screens[index].target) return;
  screenController.screens[index].target = target.$el;

  if (index > 0) {
    isBusy.value = true;
    target.$el.style.transform = 'translateX(100vw)';
    target.$el.transitionOrigin = 'center';
    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0');

    setTimeout(() => {
      target.$el.style.transition = 'transform 0.35s ease';
      target.$el.style.transform = 'translateX(0px)';
      document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
      document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0.5');

      if (screenController.screens.length > 1) {
        screenController.lastScreen.value.target.style.transitionOrigin = 'left center';
        screenController.lastScreen.value.target.style.transition = 'transform 0.35s ease';
        screenController.lastScreen.value.target.style.transform = 'translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)';
      }

      setTimeout(() => {
        emit('change');
        isBusy.value = false;
      }, 400);
    }, 100);
  }
}

// Pop back screen
const backScreen = () => {
  screenController.currentScreen.value.target.style.transition = 'transform 0.35s ease';
  screenController.currentScreen.value.target.style.transform = 'translateX(100vw) scale(1)';

  screenController.lastScreen.value.target.style.transition = 'transform 0.35s ease';
  screenController.lastScreen.value.target.style.transform = 'translateX(0px) scale(1) perspective(100vw) rotateY(0deg)';

  document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
  document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0');

  isBusy.value = true;
  setTimeout(() => {
    screenController.removeScreen();
    emit('change');
    isBusy.value = false;
  }, 400);
}

// Add first
nextScreen(route.name);

watch(() => route.name, (current:any, old:any) => {
  // Check case next is current, do nothing
  if (current == screenController.currentScreen.value.name) return;

  // Case current is back
  if (screenController.lastScreen.value?.name == current) {
    backScreen();
  } else {
    nextScreen(current);
  }
});

const reset = () => {
  isBusy.value = true;
  const current = screenController.currentScreen.value.target;
  const last = screenController.lastScreen.value.target;
  current.style.transition = 'transform 0.35s ease';
  current.style.transform = `translateX(0px)`;

  last.style.transition = 'transform 0.35s ease';
  last.style.transform = `translateX(-30vw) scale(0.5) perspective(100vw) rotateY(30deg)`;

  document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
  document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0.5');
  setTimeout(() => {
    isBusy.value = false;
  }, 400);
}

let ges:any;
onMounted(() => {
  ges = gesture(document, {
    pointerId: null,

    beforeEvent(e:any){
      if (isBusy.value) return false;
      if (screenController.screens.length < 2) return false;

      // Set first
      if (e.type == 'pointerdown' && !this.pointerId) {
        this.pointerId = e.pointerId;
      }

      return this.pointerId == e.pointerId;
    },

    afterEvent(e:any){
      if (e.type == 'pointerup' || e.type == 'pointercancel') {
          this.pointerId = null;
        }
    },

    fast({d}: any){
      if (d == 'right') {
        router.back();
      }
    },

    move({dx}: any){
      const width = window.innerWidth;
      const percent = dx / width * 100;
      const current = screenController.currentScreen.value.target;
      const last = screenController.lastScreen?.value?.target;
      
      if (dx > 15 && dx <= width) {
        current.style.transition = 'transform 0s ease';
        current.style.transform = `translateX(${dx}px)`;
        last.style.transition = 'transform 0s ease';

        document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0s');

        last.style.transform = `translateX(calc(-30vw + (30vw / 100 * ${percent}))) scale(${0.5 + (0.5 / 100 * percent)}) perspective(100vw) rotateY(${30 - (30 / 100 * percent)}deg)`;
        document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', `${0.5 - (0.5 / 100 * percent)}`);
        return;
      }
    },

    up({dx}: any){
      const width = window.innerWidth;
      const percent = dx / width * 100;
      
      if (percent >= 50) {
        router.back();
      }
      // Reset
      else {
        reset();
      }
    },

    cancel(){
      reset();
    },
  });
});

onUnmounted(() => {
  ges && ges.destroy();
  screenController.removeAllScreen();
});
</script>

<template>
  <t-screen :ref="(el:any) => addScreenRef(index, el)" :style="{zIndex: index + (index == screenController.screens.length - 1 ? 2 : 1)}" v-for="(screen, index) in screenController.screens" :key="index">
    <component :is="screen.component.default"/>
  </t-screen>
  <div class="t-swipe-backdrop" :style="{zIndex: screenController.screens.length}"></div>
</template>

<style lang="scss" scoped>
.t-swipe-backdrop{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(var(--t-color-backdrop-rgb), var(--t-swipe-backdrop-opacity, 0));
  transition: all var(--t-screen-backdrop-duration, 0) ease !important;
}
</style>