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
    <div class="t-loading" ref="container">
      <slot><TLoadingIcon :type="props.type"/></slot>
    </div>
  </t-present>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watch } from 'vue';
import TPresent from './t-present.vue';
import TLoadingIcon from './t-loading-icon.vue';
import { blurCurrentActive, isFormElement } from '../utils';
import { gesture } from '@toife/gesture';

const props = withDefaults(defineProps<{
  type?: string
}>(), {
  type: 'spinner'
});
const visible = ref(false);
const container = ref();
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

watch(() => container.value, (val) => {
  if (val) {
    ges = gesture(container.value, {
      beforeEvent(e:any){
        e.stopPropagation();
        if (!isFormElement(e.target)) {
          e.preventDefault();
          blurCurrentActive();
        }
        return false;
      }
    })
  }
});

onUnmounted(() => {
  ges && ges.destroy();
});
</script>