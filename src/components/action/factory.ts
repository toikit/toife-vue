import { createApp, h, ref } from 'vue'
import Action from './action.vue';

export const createAction = (props:any = {}, component?: any) => {
  return {
    open(): Promise<any> {
      return new Promise((resolve) => {
        let t = document.body.querySelector('.toife-app');
        if (!t) return;

        const container = document.createElement('div')
        const instanceRef = ref();
        t.appendChild(container);

        const app = createApp({
          render() {
            return h(component || Action, {
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
