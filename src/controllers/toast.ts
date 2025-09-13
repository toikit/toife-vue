import TToast from "../components/t-toast.vue"
import { createApp, h, ref } from 'vue'

export default (props:any = {}) => {
  return {
    open(){
      let t = document.body.querySelector('.t-app');
      if (!t) return;

      const container = document.createElement('div')
      const instanceRef = ref();
      t.appendChild(container);

      const app = createApp({
        render() {
          return h(TToast, {
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
        }, props.duration + 10);
      }, 50);
    }
  }
};
