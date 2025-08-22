<template>
  <button class="t-button" :style="style" :class="{'active-background': props.activeBackground, rounded: props.rounded, block: props.block, ['size-'+props.size]: true, ['variant-'+props.variant]:true}">
    <span v-show="!props.loading"><slot></slot></span>
    <span class="loader" v-if="props.loading"><t-loading-icon color="var(--color)" :type="props.loadingType"/></span>
  </button>
</template>

<style lang="scss" scoped>
.t-button{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  > * {
    z-index: 2;
  }

  &.variant-default{
    color: var(--color);
    background-color: var(--background-color);
  }

  &.variant-text{
    background-color: transparent;
    color: var(--background-color);
  }

  &:not(:disabled){
    &.active-background:active, &.active-background:focus{
      &::after{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(var(--t-color-secondary-12-rgb), 0.1);
      }
    }
  }

  &:disabled{
    opacity: 0.5;
  }

  &.rounded{
    border-radius: 8px;
  }

  &.block{
    width: 100%;
  }

  &.size-small{
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    height: 31px;
  }

  &.size-standard{
    padding: 0.75rem 1rem;
    font-size: 1rem;
    height: 42px;
  }

  &.size-large{
    padding: 1rem 1.1rem;
    font-size: 1.2rem;
    height: 50px;
  }

  .loader{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
import TLoadingIcon from './t-loading-icon.vue';

const props = withDefaults(defineProps<{
  color?:string,
  size?:string,
  rounded?: boolean,
  block?:boolean,
  loading?:boolean,
  loadingType?:string,
  variant?:string,
  activeBackground?:boolean
}>(), {
  color: '',
  size: 'standard',
  rounded: false,
  block: false,
  loading: false,
  loadingType:'spinner',
  variant: 'default',
  activeBackground: false
});

const style = computed(() => {
  let st:any;

  if (!props.color) {
    st = {
      '--color': 'var(--t-color-default-10)',
      '--background-color': 'transparent'
    }
  }
  else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
    st = {
      '--color': 'var(--t-color-default-1)',
      '--background-color': 'var(--t-color-'+props.color+'-6)'
    };
  }
  else {
    st = {
      '--color': 'var(--t-color-default-1)',
      '--background-color': props.color
    };
  }

  return st;
});
</script>