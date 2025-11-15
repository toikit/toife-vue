import { RefresherProps } from './refresher.type';
declare const _default: import('vue').DefineComponent<RefresherProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: () => any;
    refresh: (close: () => void) => any;
    move: (offset: number) => any;
    start: () => any;
}, string, import('vue').PublicProps, Readonly<RefresherProps> & Readonly<{
    onCancel?: (() => any) | undefined;
    onRefresh?: ((close: () => void) => any) | undefined;
    onMove?: ((offset: number) => any) | undefined;
    onStart?: (() => any) | undefined;
}>, {
    variant: string;
    threshold: number;
    safe: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
