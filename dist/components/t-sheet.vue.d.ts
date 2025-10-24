type __VLS_Props = {
    background?: string;
    class?: any;
    visible?: boolean;
    gesture?: boolean;
    fullscreen?: boolean;
    placement?: string;
    keepalive?: boolean;
    backdrop?: boolean;
    rounded?: boolean;
    indicator?: boolean;
    style?: any;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        present: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly keepalive?: boolean | undefined;
                readonly visible?: boolean | undefined;
                readonly backdrop?: boolean | undefined;
                readonly placement?: string | undefined;
                readonly style?: any;
                readonly class?: any;
                readonly bounce?: any;
                readonly duration?: number | undefined;
                readonly onDismiss?: ((...args: any[]) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                present: HTMLDivElement;
                backdrop: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "dismiss", ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<{
                keepalive?: boolean;
                visible?: boolean;
                backdrop?: boolean;
                placement?: string;
                style?: any;
                class?: any;
                bounce?: any;
                duration?: number;
            }> & Readonly<{
                onDismiss?: ((...args: any[]) => any) | undefined;
            }>, {
                render: (value: any) => void;
                open: () => void;
                close: () => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                dismiss: (...args: any[]) => void;
            }, string, {
                keepalive: boolean;
                visible: boolean;
                backdrop: boolean;
                placement: string;
                duration: number;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            keepalive: boolean;
            visible: boolean;
            backdrop: boolean;
            placement: string;
            duration: number;
        }> & Omit<Readonly<{
            keepalive?: boolean;
            visible?: boolean;
            backdrop?: boolean;
            placement?: string;
            style?: any;
            class?: any;
            bounce?: any;
            duration?: number;
        }> & Readonly<{
            onDismiss?: ((...args: any[]) => any) | undefined;
        }>, "close" | "render" | "open" | ("keepalive" | "visible" | "backdrop" | "placement" | "duration")> & import('vue').ShallowUnwrapRef<{
            render: (value: any) => void;
            open: () => void;
            close: () => void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
        sheet: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDismiss?: ((...args: any[]) => any) | undefined;
}>, {
    keepalive: boolean;
    visible: boolean;
    backdrop: boolean;
    placement: string;
    rounded: boolean;
    background: string;
    gesture: boolean;
    fullscreen: boolean;
    indicator: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    present: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly keepalive?: boolean | undefined;
            readonly visible?: boolean | undefined;
            readonly backdrop?: boolean | undefined;
            readonly placement?: string | undefined;
            readonly style?: any;
            readonly class?: any;
            readonly bounce?: any;
            readonly duration?: number | undefined;
            readonly onDismiss?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            present: HTMLDivElement;
            backdrop: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "dismiss", ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            keepalive?: boolean;
            visible?: boolean;
            backdrop?: boolean;
            placement?: string;
            style?: any;
            class?: any;
            bounce?: any;
            duration?: number;
        }> & Readonly<{
            onDismiss?: ((...args: any[]) => any) | undefined;
        }>, {
            render: (value: any) => void;
            open: () => void;
            close: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            dismiss: (...args: any[]) => void;
        }, string, {
            keepalive: boolean;
            visible: boolean;
            backdrop: boolean;
            placement: string;
            duration: number;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        keepalive: boolean;
        visible: boolean;
        backdrop: boolean;
        placement: string;
        duration: number;
    }> & Omit<Readonly<{
        keepalive?: boolean;
        visible?: boolean;
        backdrop?: boolean;
        placement?: string;
        style?: any;
        class?: any;
        bounce?: any;
        duration?: number;
    }> & Readonly<{
        onDismiss?: ((...args: any[]) => any) | undefined;
    }>, "close" | "render" | "open" | ("keepalive" | "visible" | "backdrop" | "placement" | "duration")> & import('vue').ShallowUnwrapRef<{
        render: (value: any) => void;
        open: () => void;
        close: () => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
        };
    }) | null;
    sheet: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
