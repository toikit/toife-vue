// Define
export type CheckboxProps = {
  label?: string;
  modelValue?: any;
  variant?: any;
  type?: string;
  multiple?: boolean;
  value?: any;
  color?: string;
}

export type CheckboxEmit = {
  (e: 'update:modelValue', value: any): void;
}

