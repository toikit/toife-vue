type __VLS_Props = {
    threshold?: number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            offset: number;
            refreshing: boolean;
        }): any;
    };
    refs: {
        container: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    cancel: (...args: any[]) => void;
    refresh: (...args: any[]) => void;
    move: (...args: any[]) => void;
    start: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
    onMove?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
}>, {
    threshold: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
