import tAlert from "../components/t-alert.vue"
import { createApp, h, ref } from 'vue'

export default (props:any = {}) => {
  return {
    open(): Promise<any> {
      return new Promise((resolve) => {
        let t = document.body.querySelector('.t-app');
        if (!t) return;

        const container = document.createElement('div')
        const instanceRef = ref();
        t.appendChild(container);

        const app = createApp({
          render() {
            return h(tAlert, {
              ...props,
              ref: instanceRef,
              onDismiss: (type:any, data?:any) => {
                setTimeout(() => {
                  app.unmount()
                  container.remove()
                }, 300);
                resolve({type, data})
              }
            })
          }
        });
        app.mount(container);

        setTimeout(() => {
          instanceRef.value?.open?.();
        }, 50);
      });
    }
  }
};
