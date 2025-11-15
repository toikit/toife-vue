<style lang="scss" scoped>
.toife-screen{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  background-color: var(--t-color-background);
  will-change: transform;
  overflow: hidden;
}
</style>

<template>
  <div :class="{'toife-screen': true}"><slot/></div>
</template>