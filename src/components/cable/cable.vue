<style lang="scss" src="./cable.scss" scoped></style>
<template src="./cable.html"></template>
<script lang="ts" setup>
import { provide } from 'vue';
import { useKeyboard } from '../keyboard-space';
import { type CableProps } from './cable.type';

const props = withDefaults(defineProps<CableProps>(), {
  keyboard: false,
  placement: 'bottom'
});


// State height of keyboard, which be setted from controller
// To use it, in app must get keyboard height and set
const { height } = useKeyboard();

// Provide tab sate for childrend component
provide('cableState', {
  placement: props.placement
});
</script>