<style lang="scss" src="./tab.scss" scoped></style>
<template src="./tab.html"></template>
<script lang="ts" setup>
import { inject, computed } from 'vue';
import { Button as TButton } from '../button';
import { type TabProps } from './tab.type';

const props = withDefaults(defineProps<TabProps>(), {
  disabled: false
});

const tabs: any = inject('tabsState');
const isActive = computed(() => tabs.activeValue.value === props.value);
const handleClick = () => {
  if (props.disabled) return;
  tabs.setValue(props.value);
}
</script>