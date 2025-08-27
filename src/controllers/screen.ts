import { computed, reactive } from "vue";

const screens = reactive<any>([]);

const addScreen = (screen:any) => {
  screens.push(screen);
}

const removeScreen = (index?:any) => {
  if (!index) screens.pop();
}

const removeAllScreen = () => {
  screens.splice(0, screens.length);
}

export default {
  screens,
  addScreen,
  removeScreen,
  removeAllScreen,
  hasPrevious: computed(() => {
    return screens.length > 1;
  }),
  currentScreen: computed(() => {
    return screens[screens.length - 1];
  }),
  lastScreen: computed(() => {
    let len = screens.length;
    if (len < 2) return;
    return screens[screens.length - 2];
  })
}