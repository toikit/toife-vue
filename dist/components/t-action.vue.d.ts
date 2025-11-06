type ActionButton = {
    text: string;
    color?: string;
    size?: string;
    variant?: string;
    handler?: () => void;
    data?: unknown;
    key?: string | number;
};
type __VLS_Props = {
    actions: ActionButton[][];
    visible?: boolean;
    dismiss?: Array<string>;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    open: () => void;
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: (type: string, data?: unknown) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDismiss?: ((type: string, data?: unknown) => any) | undefined;
}>, {
    visible: boolean;
    dismiss: Array<string>;
    actions: ActionButton[][];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
}, any>;
export default _default;
