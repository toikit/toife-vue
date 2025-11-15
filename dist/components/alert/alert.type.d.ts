export type AlertButton = {
    text?: string;
    color?: string;
    variant?: string;
    handler?: () => void;
    data?: unknown;
};
export type AlertProps = {
    title?: string;
    message?: string;
    actions?: AlertButton[];
    dismiss?: Array<string>;
};
export type AlertEmit = {
    (e: 'dismiss', type: string, data?: unknown): void;
};
