<style lang="scss" scoped>
.t-content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<template>
  <t-content>
    <t-loading-icon type="spinner"/>
  </t-content>
</template>

<script lang="ts" setup>
import TContent from './t-content.vue';
import TLoadingIcon from './t-loading-icon.vue';
</script>