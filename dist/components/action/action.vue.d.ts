import { ActionButton, ActionProps } from './action.type';
declare const _default: import('vue').DefineComponent<ActionProps, {
    open: () => void;
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: (type: string, data?: unknown) => any;
}, string, import('vue').PublicProps, Readonly<ActionProps> & Readonly<{
    onDismiss?: ((type: string, data?: unknown) => any) | undefined;
}>, {
    dismiss: Array<string>;
    visible: boolean;
    actions: ActionButton[][];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
