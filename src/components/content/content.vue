<style lang="scss" scoped>
.toife-content{
  overflow: auto;
  position: relative;
}
</style>

<template>
  <div :class="{'toife-content': true}"><slot/></div>
</template>