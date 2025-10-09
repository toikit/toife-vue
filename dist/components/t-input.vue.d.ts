type __VLS_Props = {
    size?: string;
    rounded?: boolean;
    label?: string;
    placeholder?: string;
    type?: string;
    help?: string;
    error?: string;
    modelValue?: any;
    variant?: any;
    readonly?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        start?(_: {}): any;
        end?(_: {}): any;
    };
    refs: {
        editable: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
    size: string;
    type: string;
    rounded: boolean;
    variant: any;
    placeholder: string;
    modelValue: any;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    editable: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
