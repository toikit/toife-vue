<style lang="scss" scoped>
.toife-alert {
  border-radius: 8px;
  background-color: var(--t-color-surface);
  position: relative;
  width: 270px;
  overflow: hidden;

  // Header of alert
  .toife-alert-header {
    padding: var(--t-size-2);
    border-bottom: 0.55px solid var(--t-color-separate);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  // Content of alert
  .toife-alert-content {
    padding: var(--t-size-2);
  }

  // Footer of alert
  .toife-alert-footer {
    display: flex;
    flex-direction: row;
    border-top: 0.55px solid var(--t-color-separate);

    >* {
      flex: 1;
    }

    .toife-button {
      font-weight: 600;
    }
  }

  // Set effect with class
  &.pop {
    animation: pop 0.3s ease-in-out;
  }
}

@keyframes pop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  70% {
    transform: scale(1);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>

<template>
  <present placement="center" :backdrop="true" :keepalive="false" :visible="visible" @dismiss="onDismiss">
    <div :class="{ pop, 'toife-alert': true }" ref="container">
      <slot name="header">
        <div :class="{ 'toife-alert-header': true }" v-if="props.title">{{ props.title }}</div>
      </slot>
      <slot name="content">
        <div :class="{ 'toife-alert-content': true }">{{ props.message }}</div>
      </slot>
      <slot name="footer">
        <div :class="{ 'toife-alert-footer': true }">
          <custom-button v-for="btn in props.actions" :color="btn.color" :variant="btn.variant"
            @pointerup="choose(btn)">{{ btn.text }}</custom-button>
        </div>
      </slot>
    </div>
  </present>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Present } from '../present';
import { Button as CustomButton } from '../button';

// Define props, emit
const props = defineProps<{
  title?: string
  message?: string,
  actions?: Array<any>,
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
const choose = (btn: any) => {
  visible.value = false;
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}

// Event when dimiss alert from click backdrop
const onDismiss = (val: any) => {
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