type __VLS_Props = {
    keepalive?: boolean;
    visible?: boolean;
    backdrop?: boolean;
    placement?: string;
    style?: any;
    class?: any;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        present: HTMLDivElement;
        backdrop: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    render: (value: any) => void;
    open: () => void;
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDismiss?: ((...args: any[]) => any) | undefined;
}>, {
    keepalive: boolean;
    visible: boolean;
    backdrop: boolean;
    placement: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    present: HTMLDivElement;
    backdrop: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
