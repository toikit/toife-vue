// Define
export type ToastProps = {
  message?: any;
  space?: any;
  placement?: string;
  color?: any;
  variant?: string;
  visible?: boolean;
}

export type ToastEmit = { (e: 'dismiss'): void }

