type __VLS_Props = {
    message: any;
    space?: any;
    placement?: string;
    duration?: number;
    color?: any;
    variant?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    open: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDismiss?: ((...args: any[]) => any) | undefined;
}>, {
    placement: string;
    color: any;
    variant: string;
    space: any;
    duration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
