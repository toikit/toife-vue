import { ref } from "vue"

const index = ref(1000);

export const getNewPresentIndex = () => {
  index.value += 2;
  return index.value;
}