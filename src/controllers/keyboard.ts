import { ref } from "vue";

const height = ref<any>(0);

export function useKeyboard(){
  return {
    height
  }
};
