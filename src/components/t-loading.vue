<style lang="scss" scoped>
.t-loading{
  padding: 1rem;
  line-height: 1rem;
  background-color: var(--t-color-surface);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <t-present placement="center" :backdrop="true" :keepalive="false" :visible="visible">
    <div class="t-loading">
      <slot><TIconSpinner v-if="type === 'spinner'"/></slot>
    </div>
  </t-present>
</template>

<script lang="ts" setup>
import TPresent from './t-present.vue';
import TIconSpinner from './t-icon-spinner.vue';
import { ref } from 'vue';
const props = withDefaults(defineProps<{
  type?: string
}>(), {
  type: 'spinner'
});
const visible = ref(false);
const emit = defineEmits(['dismiss']);
let ges:any;

const open = () => {
  visible.value = true;
}

const close = () => {
  visible.value = false;
}

defineExpose({
  open,
  close
});
</script>