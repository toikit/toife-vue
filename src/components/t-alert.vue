<style lang="scss" scoped>
.t-alert{
  border-radius: 8px;
  background-color: var(--t-color-default-2);
  position: relative;
  width: 270px;
  overflow: hidden;

  .t-alert-footer{
    display: flex;
    flex-direction: row;
    border-top: 0.55px solid var(--t-color-default-4);

    > * {
      flex: 1;
    }
  }

  .t-alert-content{
    padding: var(--t-size-2);
  }

  .t-alert-header{
    padding: var(--t-size-2);
    border-bottom: 0.55px solid var(--t-color-default-4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .t-alert-footer{
    .t-button{
      font-weight: 600;
    }
  }

  &.pop{
    animation: pop 0.3s ease-in-out;
  }
}

@keyframes pop {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  70% { transform: scale(1); }
  80% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>

<template>
  <t-present placement="center" :backdrop="true" :keepalive="false" :visible="visible" @dismiss="onDismiss">
    <div class="t-alert" :class="{pop}" ref="container">
      <slot name="header">
        <div class="t-alert-header" v-if="props.title">{{ props.title }}</div>
      </slot>
      <slot name="content">
        <div class="t-alert-content">{{ props.message }}</div>
      </slot>
      <slot name="footer">
        <div class="t-alert-footer">
          <t-button v-for="btn in props.actions" :color="btn.color" :variant="btn.variant" @click="choose(btn)">{{ btn.text }}</t-button>
        </div>
      </slot>
    </div>
  </t-present>
</template>

<script lang="ts" setup>
import { onUnmounted, ref, watch } from 'vue';
import TPresent from './t-present.vue';
import TButton from './t-button.vue';
import { gesture } from '@toife/gesture';
import { blurCurrentActive, isFormElement } from '../utils';

const props = defineProps<{
  title?:string
  message:string,
  actions: Array<any>
}>();
const visible = ref(false);
const emit = defineEmits(['close']);
const container = ref();
let ges:any;
const pop = ref(false);

const open = () => {
  visible.value = true;
}

const choose = (btn:any) => {
  visible.value = false;
  btn.handler && btn.handler();
  emit('close', btn?.data);
}

const onDismiss = (val:any) => {
  if (val == 'backdrop') {
    pop.value = true;
    setTimeout(() => {
      pop.value = false;
    }, 300);
  }
}

defineExpose({
  open
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