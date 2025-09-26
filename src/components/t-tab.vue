<style lang="scss" scoped>
.t-tab{
  display: flex;
  justify-content: center;
  align-items: center;

  .t-button{
    padding: 0px !important;
  }
}
</style>

<template>
  <li class="t-tab" :class="{active: isActive}">
    <t-button variant="text" @click="handleClick" :size="tabs.size" :color="isActive && tabs.variant == 'text' ? tabs.color : undefined"><slot/></t-button>
  </li>
</template>

<script lang="ts" setup>
import { inject, computed, watch, nextTick } from 'vue';
import TButton from './t-button.vue';

const props = defineProps<{
  value: String
}>();
const tabs:any = inject('tabsState');
const isActive = computed(() => tabs.activeValue.value === props.value);

const handleClick = () => {
  tabs.setValue(props.value);
}

watch(() => isActive.value, async (val) => {
  if (val) {
    await nextTick();
    console.log('go here to active', props.value);
    tabs.actived();
  }
});
</script>