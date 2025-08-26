<style lang="scss" scoped>
.t-tab{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <li class="t-tab" :class="{active: isActive}">
    <t-button variant="text" @click="handleClick" :color="isActive && tabs.variant == 'text' ? tabs.color : undefined"><slot/></t-button>
  </li>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue';
// import TButton './t-button.vue';

const props = defineProps<{
  value: String
}>();
const tabs:any = inject('tabsState');
const isActive = computed(() => tabs.active.value === props.value);

const handleClick = () => {
  tabs.setActive(props.value);
}
</script>