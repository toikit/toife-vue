import { createApp, h, ref } from 'vue'
import Toast from './toast.vue';

export const createToast = (props:any = {}, component?: any) => {
  return {
    open(){
      let t = document.body.querySelector('.toife-app');
      if (!t) return;

      const container = document.createElement('div')
      const instanceRef = ref();
      t.appendChild(container);

      const app = createApp({
        render() {
          return h(component || Toast, {
            ...props,
            ref: instanceRef,
            onDismiss: () => {
              setTimeout(() => {
                app.unmount()
                container.remove()
              }, 300);
            }
          })
        }
      });
      app.mount(container);
      setTimeout(() => {
        instanceRef.value?.open?.();
        setTimeout(() => {
          instanceRef.value?.close?.();
        }, (props.duration || 2000) + 10);
      }, 50);
    }
  }
};
