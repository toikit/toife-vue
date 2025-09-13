type __VLS_Props = {
    actions: Array<any>;
    visible?: boolean;
    dismiss?: Array<any>;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    open: () => void;
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDismiss?: ((...args: any[]) => any) | undefined;
}>, {
    visible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
}, any>;
export default _default;
