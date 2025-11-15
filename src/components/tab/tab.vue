<style lang="scss" scoped>
.toife-tab {
  display: flex;
  justify-content: center;
  align-items: center;

  .toife-button {
    padding: 0px !important;
    cursor: pointer;
  }
}
</style>

<template>
  <li :class="{ 'toife-tab': true, active: isActive }">
    <t-button variant="text" @pointerup="handleClick" :size="tabs.size" :color="isActive ? tabs.color.text : undefined">
      <slot />
    </t-button>
  </li>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue';
import { Button as TButton } from '../button';

const props = withDefaults(defineProps<{
  value?: String,
  disabled?: boolean
}>(), {
  disabled: false
});

const tabs: any = inject('tabsState');
const isActive = computed(() => tabs.activeValue.value === props.value);
const handleClick = () => {
  if (props.disabled) return;
  tabs.setValue(props.value);
}
</script>