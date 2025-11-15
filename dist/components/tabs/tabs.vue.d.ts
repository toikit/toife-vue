type __VLS_Props = {
    placement?: string;
    variant?: string;
    color?: string;
    modelValue?: string;
    border?: number;
    size?: string;
    margin?: any;
    radius?: number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        container: HTMLUListElement;
    };
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    placement: string;
    size: string;
    color: string;
    variant: string;
    radius: number;
    border: number;
    margin: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLUListElement;
}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
