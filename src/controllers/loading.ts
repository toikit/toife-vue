import TLoading from "../components/t-loading.vue"
import { createApp, h, ref } from 'vue'

export default (props:any = {}) => {
  const instanceRef = ref();
  const t = document.body.querySelector('.t-app');
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
            return h(TLoading, {
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
