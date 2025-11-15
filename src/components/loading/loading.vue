<style lang="scss" scoped>
.toife-loading {
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
  <present placement="center" :backdrop="true" :keepalive="false" :visible="visible">
    <div :class="{ 'toife-loading': true }">
      <slot><icon-spinner v-if="type === 'spinner'" /></slot>
    </div>
  </present>
</template>

<script lang="ts" setup>
import { Present } from '../present';
import { IconSpinner } from '../icon-spinner';
import { ref } from 'vue';
withDefaults(defineProps<{
  type?: string
}>(), {
  type: 'spinner'
});
const visible = ref(false);
const emit = defineEmits(['dismiss']);

let ges: any;

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