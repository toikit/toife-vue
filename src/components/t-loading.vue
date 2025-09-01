<style lang="scss" scoped>
.t-loading{
  padding: 1rem;
  line-height: 1rem;
  background-color: var(--t-color-surface);
  border-radius: 8px;
}
</style>

<template>
  <t-present placement="center" :backdrop="true" :keepalive="false" :visible="visible">
    <div class="t-loading">
      <slot><TLoadingIcon :type="props.type"/></slot>
    </div>
  </t-present>
</template>

<script lang="ts" setup>
import TPresent from './t-present.vue';
import TLoadingIcon from './t-loading-icon.vue';
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