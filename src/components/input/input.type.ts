// Define
export type InputProps = {
  size?: string;
  rounded?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  help?: string;
  error?: string;
  modelValue?: any;
  variant?: any;
  readonly?: boolean;
}

export type InputEmit = {
  (e: 'update:modelValue', value: any): void;
}

