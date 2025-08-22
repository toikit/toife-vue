import { ref } from "vue"

const index = ref(1000);

export default {
  getNewIndex() {
    index.value += 2;
    return index.value;
  }
}