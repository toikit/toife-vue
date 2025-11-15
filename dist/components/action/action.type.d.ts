export type ActionButton = {
    text?: string;
    color?: string;
    size?: string;
    variant?: string;
    handler?: () => void;
    data?: unknown;
    key?: string | number;
};
export type ActionProps = {
    actions?: ActionButton[][];
    visible?: boolean;
    dismiss?: Array<string>;
};
export type ActionEmit = {
    (e: 'dismiss', type: string, data?: unknown): void;
};
