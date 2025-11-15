export type TabsProps = {
    placement?: string;
    variant?: string;
    color?: string;
    modelValue?: string;
    border?: number;
    size?: string;
    margin?: any;
    radius?: number;
};
export type TabsEmit = {
    (e: 'update:modelValue', value: string): void;
};
