declare const _default: {
    screens: any;
    addScreen: (screen: any) => void;
    removeScreen: (index?: any) => void;
    removeAllScreen: () => void;
    lockSwipe: () => void;
    unlockSwipe: () => void;
    swipeable: import('vue').Ref<boolean, boolean>;
    hasPrevious: import('vue').ComputedRef<boolean>;
    currentScreen: import('vue').ComputedRef<any>;
    lastScreen: import('vue').ComputedRef<any>;
};
export default _default;
