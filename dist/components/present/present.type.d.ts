export type PresentProps = {
    keepalive?: boolean;
    visible?: boolean;
    backdrop?: boolean;
    placement?: string;
    style?: any;
    class?: any;
    bounce?: any;
    duration?: number;
};
export type PresentEmit = {
    (e: 'dismiss', type: string): void;
};
