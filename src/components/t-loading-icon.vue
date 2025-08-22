<style lang="scss" scoped>
.t-loading-icon {
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: var(var(--t-color-default-10));
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <span
    class="t-loading-icon"
    :style="{
      width: size,
      height: size,
      borderTopColor: color
    }"
    role="status"
    aria-label="Loading..."
  ></span>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: '24px'
  },
  color: {
    type: String,
    default: 'var(--t-color-default-10)'
  }
})
</script>