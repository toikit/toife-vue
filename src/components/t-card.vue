<template>
  <div class="t-card" :style="styles"><slot/></div>
</template>

<style lang="scss">
.t-card{
  border-radius: 8px;
  background: var(--background);
  padding: var(--t-size-2);
  position: relative;
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  color?:any
}>(), {
  color: null
});

const styles = computed(() => {
  let st:any;

  if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--background': 'var(--t-color-status-'+props.color+')'
    };
  }
  else {
    st = {
      '--background': props.color
    };
  }

  return st;
});
</script>