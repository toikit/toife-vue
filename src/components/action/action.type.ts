// Define
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
  actions?: ActionButton[][]; // Array of button groups in footer
  visible?: boolean; // Visible state
  dismiss?: Array<string>; // Values that will close on dismiss
}

export type ActionEmit = { (e: 'dismiss', type: string, data?: unknown): void }