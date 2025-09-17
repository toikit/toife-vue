<script lang="ts" setup>
import { markRaw, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gesture } from "@toife/gesture";
import { screenController } from "../controllers";
import TScreen from "./t-screen.vue";

let routeComponents: any = {};
const emit = defineEmits(['change']);
const props = withDefaults(defineProps<{
  variant?:string,
  router?:any,
  route?:any
}>(), {
  variant: 'scale'
});
let ges: any;

const _router = props.router || useRouter();
const _route = props.route || useRoute();
const routes: any = _router.getRoutes();

for (let r of routes) {
  routeComponents[r.name] = r.component || r.components;
}

// Add next screen to dom
const addScreen = (name: any) => {
  if (!name) return;
  screenController.addScreen({
    name,
    target: null,
    component: markRaw(routeComponents[name] || null)
  });
}

// Add ref
const addScreenRef = (index: any, target: any) => {
  if (!target || screenController.screens[index].target) return;
  screenController.addScreenEl(index, target.$el);

  if (screenController.nextScreen) {
    screenController.next(props.variant, () => {
      emit('change');
    });
  }
}

watch(() => _route.name, (current: any, old: any) => {
  // Check case next is current, do nothing
  if (current == screenController.currentScreen.value?.name) return;

  // Case current is back
  if (screenController.lastScreen.value?.name == current) {
    screenController.back(props.variant, () => {
      emit('change');
    });
  } else {
    addScreen(_route.name);
  }
});

onMounted(() => {
  // Add first
  addScreen(_route.name);
  ges = gesture(document.body, {
    beforeEvent(e: any) {
      if (!screenController.isSwipeable.value) return false;
      return true;
    },

    fast({ initialDirection }: any) {
      if (screenController.lastScreen.value && initialDirection == 'right') _router.back();
    },

    move({ deltaX, initialDirection }: any) {
      if (initialDirection != 'right') return;
      screenController.move(props.variant, deltaX);
    },

    up({ deltaX, initialDirection }: any) {
      if (initialDirection != 'right') {
        screenController.reset(props.variant);
        return;
      }

      const width = window.innerWidth;
      const percent = deltaX / width * 100;

      if (percent >= 50) {
        _router.back();
      }
      // Reset
      else {
        screenController.reset(props.variant);
      }
    },

    cancel() {
      screenController.reset(props.variant);
    },
  });
});

onUnmounted(() => {
  ges && ges.destroy();
  screenController.removeAllScreen();
});
</script>

<template>
  <t-screen :ref="(el: any) => addScreenRef(index, el)"
    :style="{ zIndex: index + (index == screenController.screens.length - 1 ? 2 : 1) }"
    v-for="(screen, index) in screenController.screens" :key="index">
    <component :is="screen.component.default" />
  </t-screen>
  <div class="t-swipe-backdrop" :style="{ zIndex: screenController.screens.length }"></div>
</template>

<style lang="scss" scoped>
.t-swipe-backdrop {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--t-color-backdrop-rgb), var(--t-swipe-backdrop-opacity, 0));
  transition: all var(--t-screen-backdrop-duration, 0) ease !important;
}
</style>