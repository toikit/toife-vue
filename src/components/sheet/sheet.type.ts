// Define
export type SheetProps = {
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
  duration?: number;
  bounce?: any;
  style?: any;
}

export type SheetEmit = {
  (e: 'dismiss', type: string): void;
}

