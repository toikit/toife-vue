// Define
export type SwitchProps = {
  modelValue?: boolean;
  color?: any;
}

export type SwitchEmit = {
  (e: 'update:modelValue', value: boolean): void;
}

