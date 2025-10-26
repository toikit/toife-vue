<style lang="scss" scoped>
.t-action {
  width: var(--t-app-width);
  max-width: var(--t-app-max-width);
  margin-bottom: var(--t-safe-area-bottom);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background-color: var(--t-color-surface);
    max-width: var(--t-overlay-max-width);

    &:last-child {
      margin-bottom: 1rem !important;
    }
  }

  &.pop {
    animation: pop 0.3s ease-in-out;
  }
}

// Effect when click outside action modal
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
  <t-present placement="bottom" :backdrop="true" :keepalive="false" :visible="_visible" @dismiss="onDismiss">
    <div class="t-action" :class="{ pop }" ref="container">
      <div v-for="buttons in props.actions">
        <t-button v-for="btn in buttons" :color="btn.color" :size="btn.size" :variant="btn.variant" @click="choose(btn)"
          block>{{ btn.text }}</t-button>
      </div>
    </div>
  </t-present>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import TPresent from './t-present.vue';
import TButton from './t-button.vue';

// Define
const props = withDefaults(defineProps<{
  actions: Array<any>, // Array of button in footer
  visible?: boolean, // Visible state
  dismiss?: Array<any> // Array if dismiss name can be close when have event dismiss
}>(), {
  visible: false
});
const emit = defineEmits(['dismiss']);

// State visible OPEN/CLOSE action modal
const _visible = ref(false);

// Ref of action element
const container = ref();

// State of pop or not
const pop = ref(false);

// Open action modal
const open = () => {
  _visible.value = true;
}

// Select option on action modal
const choose = (btn: any) => {
  _visible.value = false;
  btn.handler && btn.handler();
  emit('dismiss', 'choose', btn?.data);
}

// When click outside modal
const onDismiss = (val: any) => {
  if (props.dismiss && props.dismiss.includes(val)) {
    _visible.value = false;
    emit('dismiss', val);
  }
  else if (val == 'backdrop') {
    pop.value = true;
    setTimeout(() => {
      pop.value = false;
    }, 300);
  }
}

// Listen event when value of visible change
// If true then open modal, else close modal
watch(() => props.visible, (value) => {
  if (value) {
    open();
  } else {
    close();
  }
});

// Define then method can access from out of component
defineExpose({
  open,
  close
});
</script>