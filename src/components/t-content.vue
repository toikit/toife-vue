<style lang="scss" scoped>
.t-content{
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--t-color-background);
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<template>
  <div class="t-content"><slot/></div>
</template>