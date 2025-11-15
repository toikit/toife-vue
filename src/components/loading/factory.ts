import { createApp, h, ref } from 'vue'
import Loading from './loading.vue';

export const createLoading = (props:any = {}, component?: any) => {
  const instanceRef = ref();
  const t = document.body.querySelector('.toife-app');
  let app:any = null;
  let container:any = null;

  return {
    open(): Promise<any> {
      return new Promise((resolve) => {
        if (!t) return;
        container = document.createElement('div');
        t.appendChild(container);
        app = createApp({
          render() {
            return h(component || Loading, {
              ...props,
              ref: instanceRef
            })
          }
        });
        app.mount(container);
        setTimeout(() => {
          instanceRef.value?.open?.();
          resolve(true);
        }, 50);
      });
    },

    close(): Promise<any> {
      return new Promise((resolve) => {
        instanceRef.value?.close?.();
        setTimeout(() => {
          app?.unmount?.()
          container?.remove?.()
          resolve(true);
        }, 300);
      });
    },
  }
};
