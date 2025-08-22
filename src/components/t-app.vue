<template>
  <div class="t-app"><slot/></div>
</template>

<style>
.t-app{
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>