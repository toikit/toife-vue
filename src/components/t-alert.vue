<style lang="scss" scoped>
.t-alert{
  border-radius: 8px;
  background-color: var(--t-color-surface);
  position: relative;
  width: 270px;
  overflow: hidden;

  // Header of alert
  .t-alert-header{
    padding: var(--t-size-2);
    border-bottom: 0.55px solid var(--t-color-separate);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  // Content of alert
  .t-alert-content{
    padding: var(--t-size-2);
  }

  // Footer of alert
  .t-alert-footer{
    display: flex;
    flex-direction: row;
    border-top: 0.55px solid var(--t-color-separate);

    > * {
      flex: 1;
    }

    .t-button{
      font-weight: 600;
    }
  }

  // Set effect with class
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
import { ref } from 'vue';
import TPresent from './t-present.vue';
import TButton from './t-button.vue';

// Define props, emit
const props = defineProps<{
  title?:string
  message:string,
  actions: Array<any>,
  dismiss?: Array<any>
}>();
const emit = defineEmits(['dismiss']);

// State visible or not
const visible = ref(false);

// Ref of container element
const container = ref();

// State effect or not
const pop = ref(false);

// Method set state visible to open modal
const open = () => {
  visible.value = true;
}

// Method choose selection to confirm alert
const choose = (btn:any) => {
  visible.value = false;
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}

// Event when dimiss alert from click backdrop
const onDismiss = (val:any) => {
  if (props.dismiss && props.dismiss.includes(val)) {
    visible.value = false;
    emit('dismiss', val);
  }
  else if (val == 'backdrop') {
    pop.value = true;
    setTimeout(() => {
      pop.value = false;
    }, 300);
  }
}

// Define methods can be call from outside
defineExpose({
  open
});
</script>