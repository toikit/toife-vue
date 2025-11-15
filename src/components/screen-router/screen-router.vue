<script lang="ts" setup>
import { markRaw, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gesture } from "@toife/gesture";
import { Screen } from "../screen";
import { useScreenRouter } from './factory';

let routeComponents: any = {};
const emit = defineEmits(['change']);
const props = withDefaults(defineProps<{
  variant?: string,
  router?: any,
  route?: any
}>(), {
  variant: 'scale'
});
let ges: any;


const _router = props.router || useRouter();
const _route = props.route || useRoute();
const routes: any = _router.getRoutes();
const screenRouter = useScreenRouter();
const backdrop = ref();

for (let r of routes) {
  routeComponents[r.name] = r.component || r.components;
}

// Add next screen to dom
const addScreen = (name: any) => {
  if (!name) return;
  screenRouter.addScreen({
    name,
    target: null,
    component: markRaw(routeComponents[name] || null)
  });
}

// Add ref
const addScreenRef = (index: any, target: any) => {
  if (!target || screenRouter.screens[index].target) return;
  screenRouter.addScreenEl(index, target.$el);

  if (screenRouter.nextScreen) {
    screenRouter.next(props.variant, () => {
      emit('change');
    });
  }
}

watch(() => _route.name, (current: any, old: any) => {
  // Check case next is current, do nothing
  if (current == screenRouter.currentScreen.value?.name) return;

  // Case current is back
  if (screenRouter.lastScreen.value?.name == current) {
    screenRouter.back(props.variant, () => {
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
      if (!screenRouter.isSwipeable.value) return false;
      return true;
    },

    fast({ initialDirection }: any) {
      if (screenRouter.lastScreen.value && initialDirection == 'right') _router.back();
    },

    move({ deltaX, initialDirection }: any) {
      if (initialDirection != 'right') return;
      screenRouter.move(props.variant, deltaX);
    },

    up({ deltaX, initialDirection }: any) {
      if (initialDirection != 'right') {
        screenRouter.reset(props.variant);
        return;
      }

      const width = backdrop.value.offsetParent.offsetWidth;
      const percent = deltaX / width * 100;

      if (percent >= 50) {
        _router.back();
      }
      // Reset
      else {
        screenRouter.reset(props.variant);
      }
    },

    cancel() {
      screenRouter.reset(props.variant);
    },
  });
});

onUnmounted(() => {
  ges && ges.destroy();
  screenRouter.removeAllScreen();
});
</script>

<template>
  <screen :ref="(el: any) => addScreenRef(index, el)"
    :style="{ zIndex: index + (index == screenRouter.screens.length - 1 ? 2 : 1) }"
    v-for="(screen, index) in screenRouter.screens" :key="index">
    <component :is="screen.component.default" />
  </screen>
  <div :class="{ 'toife-screen-router-backdrop': true }" ref="backdrop" :style="{ zIndex: screenRouter.screens.length }">
  </div>
</template>

<style lang="scss" scoped>
.toife-screen-router-backdrop {
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