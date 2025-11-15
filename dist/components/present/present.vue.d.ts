import { PresentProps } from './present.type';
declare const _default: import('vue').DefineComponent<PresentProps, {
    render: (value: any) => void;
    open: () => void;
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: (type: string) => any;
}, string, import('vue').PublicProps, Readonly<PresentProps> & Readonly<{
    onDismiss?: ((type: string) => any) | undefined;
}>, {
    keepalive: boolean;
    visible: boolean;
    backdrop: boolean;
    placement: string;
    duration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
