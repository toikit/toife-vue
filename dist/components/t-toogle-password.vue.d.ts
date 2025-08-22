type __VLS_Props = {
    color?: any;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        on?(_: {}): any;
        off?(_: {}): any;
    };
    refs: {
        toogle: HTMLButtonElement;
    };
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    color: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    toogle: HTMLButtonElement;
}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
