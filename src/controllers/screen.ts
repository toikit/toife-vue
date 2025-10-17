import { computed, reactive, ref } from "vue";

const screens = reactive<any>([]);
const swipeable = ref(true);
const isBusy = ref(false);
const activeIndex = ref(-1);

const currentScreen = computed(() => {
  return screens[activeIndex.value];
});

const nextScreen = computed(() => {
  return screens[activeIndex.value + 1] || undefined;
});

const lastScreen = computed(() => {
  return screens[screens.length - 2];
});

const isSwipeable = computed(() => {
  return !isBusy.value && swipeable.value && lastScreen.value;
});

const getAppWidth = (px: boolean = true) => {
  let app = currentScreen.value.target.closest('.t-app');
  let width = app.offsetWidth;

  if (px) return width + 'px';
  return width;
}

const scaleHandler = {
  reset(){
    isBusy.value = true;
    const w = getAppWidth();
    const current = currentScreen.value.target;
    const last = lastScreen.value.target;
    current.style.transition = 'transform 0.35s ease';
    current.style.transform = `translateX(0px)`;

    last.style.transition = 'transform 0.35s ease';
    last.style.transform = `translateX(calc(${w} / 100 * 30 * -1)) scale(0.5) perspective(${w}) rotateY(30deg)`;

    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0.5');
    setTimeout(() => {
      isBusy.value = false;
    }, 400);
  },

  move(delta:any) {
    if (!isSwipeable.value) return;
    const _w = getAppWidth(false);
    const w = _w + 'px';
    const percent = delta / _w * 100;
    const current = currentScreen.value.target;
    const last = lastScreen.value.target;

    if (delta > 15 && delta <= _w) {
      current.style.transition = 'transform 0s ease';
      current.style.transform = `translateX(${delta}px)`;
      last.style.transition = 'transform 0s ease';

      document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0s');
      last.style.transform = `translateX(calc((${w} / 100 * 30 * -1) + ((${w} / 100 * 30) / 100 * ${percent}))) scale(${0.5 + (0.5 / 100 * percent)}) perspective(${w}) rotateY(${30 - (30 / 100 * percent)}deg)`;
      document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', `${0.5 - (0.5 / 100 * percent)}`);
    }
  },

  back(callback?:any){
    if (!lastScreen.value) return;

    const w = getAppWidth();
    currentScreen.value.target.style.transition = 'transform 0.35s ease';
    currentScreen.value.target.style.transform = `translateX(${w}) scale(1)`;

    lastScreen.value.target.style.transition = 'transform 0.35s ease';
    lastScreen.value.target.style.transform = `translateX(0px) scale(1) perspective(${w}) rotateY(0deg)`;

    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0');

    isBusy.value = true;
    setTimeout(() => {
      removeScreen();
      isBusy.value = false;
      activeIndex.value -= 1;
      callback && callback();
    }, 400);
  },

  next(callback?:any){
    if (!nextScreen.value) return;
    if (activeIndex.value == -1) {
      activeIndex.value += 1;
      callback && callback();
      return;
    }

    isBusy.value = true;
    const target = nextScreen.value.target;
    const w = getAppWidth();
    target.style.transform = `translateX(${w})`;
    target.transitionOrigin = 'center';
    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0');

    setTimeout(() => {
      target.style.transition = 'transform 0.35s ease';
      target.style.transform = 'translateX(0px)';
      document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
      document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0.5');

      if (currentScreen.value) {
        currentScreen.value.target.style.transitionOrigin = 'left center';
        currentScreen.value.target.style.transition = 'transform 0.35s ease';
        currentScreen.value.target.style.transform = `translateX(calc(${w} / 100 * 30 * -1)) scale(0.5) perspective(${w}) rotateY(30deg)`;
      }

      setTimeout(() => {
        isBusy.value = false;
        activeIndex.value += 1;
        callback && callback();
      }, 400);
    }, 100);
  }
};

const transformHandler = {
  reset(){
    isBusy.value = true;
    const w = getAppWidth();
    const current = currentScreen.value.target;
    const last = lastScreen.value.target;
    current.style.transition = 'transform 0.35s ease';
    current.style.transform = `translateX(0px)`;

    last.style.transition = 'transform 0.35s ease';
    last.style.transform = `translateX(calc(${w} / 100 * 30 * -1))`;

    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0.5');
    setTimeout(() => {
      isBusy.value = false;
    }, 400);
  },

  move(delta:any) {
    const _w = getAppWidth(false);
    const w = _w + 'px';
    const percent = delta / _w * 100;
    const current = currentScreen.value.target;
    const last = lastScreen.value.target;

    if (delta > 15 && delta <= _w) {
      current.style.transition = 'transform 0s ease';
      current.style.transform = `translateX(${delta}px)`;
      last.style.transition = 'transform 0s ease';

      document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0s');
      last.style.transform = `translateX(calc((${w} / 100 * 30 * -1) + ((${w} / 100 * 30) / 100 * ${percent})))`;
      document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', `${0.5 - (0.5 / 100 * percent)}`);
    }
  },

  back(callback?:any){
    if (!lastScreen.value) return;

    const w = getAppWidth();
    currentScreen.value.target.style.transition = 'transform 0.35s ease';
    currentScreen.value.target.style.transform = `translateX(${w}) scale(1)`;

    lastScreen.value.target.style.transition = 'transform 0.35s ease';
    lastScreen.value.target.style.transform = 'translateX(0px)';

    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0');

    isBusy.value = true;
    setTimeout(() => {
      removeScreen();
      isBusy.value = false;
      activeIndex.value -= 1;
      callback && callback();
    }, 400);
  },

  next(callback?:any){
    if (!nextScreen.value) return;
    if (activeIndex.value == -1) {
      activeIndex.value += 1;
      callback && callback();
      return;
    }
    isBusy.value = true;
    const target = nextScreen.value.target;
    const w = getAppWidth();
    target.style.transform = `translateX(${w})`;
    target.transitionOrigin = 'center';
    document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0s');
    document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0');

    setTimeout(() => {
      target.style.transition = 'transform 0.35s ease';
      target.style.transform = 'translateX(0px)';
      document.documentElement.style.setProperty('--t-screen-backdrop-duration', '0.35s');
      document.documentElement.style.setProperty('--t-swipe-backdrop-opacity', '0.5');

      if (currentScreen.value) {
        currentScreen.value.target.style.transitionOrigin = 'left center';
        currentScreen.value.target.style.transition = 'transform 0.35s ease';
        currentScreen.value.target.style.transform = `translateX(calc(${w} / 100 * 30 * -1))`;
      }

      setTimeout(() => {
        isBusy.value = false;
        activeIndex.value += 1;
        callback && callback();
      }, 400);
    }, 100);
  }
};

const addScreen = (screen:any) => {
  screens.push(screen);
}

const addScreenEl = (index:any, target:any) => {
  screens[index].target = target;
}

const removeScreen = (index?:any) => {
  if (!index) screens.pop();
}

const removeAllScreen = () => {
  screens.splice(0, screens.length);
}

const lockSwipe = () => {
  swipeable.value = false;
}

const unlockSwipe = () => {
  swipeable.value = true;
}

const next = (variant:any, callback?:any) => {
  if (variant == 'scale') scaleHandler.next(callback);
  if (variant == 'transform') transformHandler.next(callback);
}

const back = (variant:any, callback?:any) => {
  if (variant == 'scale') scaleHandler.back(callback);
  if (variant == 'transform') transformHandler.back(callback);
}

const move = (variant:any, delta:any) => {
  if (variant == 'scale') scaleHandler.move(delta);
  if (variant == 'transform') transformHandler.move(delta);
}

const reset = (variant:any) => {
  if (variant == 'scale') scaleHandler.reset();
  if (variant == 'transform') transformHandler.reset();
}

export default {
  isBusy,
  isSwipeable,
  reset,
  next,
  back,
  move,
  screens,
  addScreen,
  addScreenEl,
  removeScreen,
  removeAllScreen,
  lockSwipe,
  unlockSwipe,
  swipeable,
  currentScreen,
  lastScreen,
  nextScreen
}