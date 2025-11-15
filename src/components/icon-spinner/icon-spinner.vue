<style lang="scss" scoped>
.toife-icon-spinner {
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: var(var(--t-color-text));
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <span :class="{ 'toife-icon-spinner': true }" :style="{
    width: size,
    height: size,
    borderTopColor: color
  }" role="status" aria-label="Loading..."></span>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: '24px'
  },
  color: {
    type: String,
    default: 'var(--t-color-text)'
  }
})

</script>