import TAction from "../components/t-action.vue"
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
            return h(TAction, {
              ...props,
              ref: instanceRef,
              onClose: (value:any) => {
                setTimeout(() => {
                  app.unmount()
                  container.remove()
                }, 300);
                resolve(value)
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
