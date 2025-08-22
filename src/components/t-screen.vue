<style lang="scss" scoped>
.t-screen{
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  background-color: var(--t-color-default-3);
  will-change: transform;
  overflow: hidden;
}
</style>

<template>
  <div class="t-screen"><slot/></div>
</template>