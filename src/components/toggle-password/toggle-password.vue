<style lang="scss" src="./toggle-password.scss" scoped></style>
<template src="./toggle-password.html"></template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { type TogglePasswordProps, type TogglePasswordEmit } from './toggle-password.type';

const props = withDefaults(defineProps<TogglePasswordProps>(), {
  color: 'warning'
});
const emit = defineEmits<TogglePasswordEmit>();

const isShow = ref(false);
const toggle = ref();
const style = computed(() => {
  let color = props.color;

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    color = `var(--toife-color-status-${props.color})`;
  }

  return {
    '--color': color
  }
});

const el = () => {
  return toggle.value?.parentElement?.querySelector?.('input');
}

onMounted(() => {
  let e = el();
  if (!e) return;
  isShow.value = e.type != 'password';
  emit('change', isShow.value);
});

const onClick = () => {
  let e = el();
  if (!e) return;
  isShow.value = !isShow.value;
  if (isShow.value) e.type = 'text';
  else e.type = 'password';
  emit('change', isShow.value);
}
</script>