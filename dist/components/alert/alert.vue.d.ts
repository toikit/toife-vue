import { AlertButton, AlertProps } from './alert.type';
declare const _default: import('vue').DefineComponent<AlertProps, {
    open: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: (type: string, data?: unknown) => any;
}, string, import('vue').PublicProps, Readonly<AlertProps> & Readonly<{
    onDismiss?: ((type: string, data?: unknown) => any) | undefined;
}>, {
    dismiss: Array<string>;
    actions: AlertButton[];
    title: string;
    message: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
