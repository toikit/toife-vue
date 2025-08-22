<style lang="scss" scoped>
.t-toogle-password {
  // font-size: 1.5rem;
  background-color: transparent;
  width: fit-content;
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);
  font-size: 1.2rem;
}
</style>

<template>
  <button ref="toogle" class="t-toogle-password" :style="style" @click="onClick">
    <slot name="on" v-if="isShow">
      <i class="ri-eye-line"></i>
    </slot>
    <slot name="off" v-if="!isShow">
      <i class="ri-eye-off-line"></i>
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  color?: any
}>(), {
  color: 'warning'
});
const emit = defineEmits(['change']);
const isShow = ref(false);
const toogle = ref();
const style = computed(() => {
  let color = props.color;

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    color = `var(--t-color-status-${props.color})`;
  }

  return {
    '--color': color
  }
});

const el = () => {
  return toogle.value?.parentElement?.querySelector?.('input');
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