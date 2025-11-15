import { ToastProps } from './toast.type';
declare const _default: import('vue').DefineComponent<ToastProps, {
    open: () => void;
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<ToastProps> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    visible: boolean;
    placement: string;
    color: any;
    variant: string;
    space: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
