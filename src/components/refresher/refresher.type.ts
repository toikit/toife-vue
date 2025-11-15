// Define
export type RefresherProps = {
  threshold?: number;
  safe?: boolean;
  variant?: string;
}

export type RefresherEmit = {
  (e: 'refresh', close: () => void): void;
  (e: 'move', offset: number): void;
  (e: 'cancel'): void;
  (e: 'start'): void;
}

