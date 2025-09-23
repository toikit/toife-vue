<template>
  <div class="t-app"><slot/></div>
</template>

<style>
.t-app{
  height: var(--t-app-height);
  width: var(--t-app-width);
  max-height: var(--t-app-max-height);
  max-width: var(--t-app-max-width);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: var(--t-color-background);
}
</style>