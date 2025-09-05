<template>
  <button class="t-button" :style="styles" :class="{'active-background': props.activeBackground, rounded: props.rounded, block: props.block, ['size-'+props.size]: true}">
    <span class="t-button-content" v-show="!props.loading"><slot></slot></span>
    <span class="loader" v-if="props.loading"><t-loading-icon color="var(--color)" :type="props.loadingType"/></span>
  </button>
</template>

<style lang="scss" scoped>
// CHANGE CSS
.t-button{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  line-height: 0;

  color: var(--color);
  background: var(--background);
  border: var(--border);
  white-space: nowrap;

  > * {
    z-index: 2;
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
        background-color: rgba(var(--t-color-backdrop-rgb), 0.1);
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

  .t-button-content{
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
  color?:any,
  size?:string,
  rounded?: boolean,
  block?:boolean,
  loading?:boolean,
  loadingType?:string,
  variant?:string,
  activeBackground?:boolean
}>(), {
  color: null,
  size: 'standard',
  rounded: false,
  block: false,
  loading: false,
  loadingType:'spinner',
  variant: 'default',
  activeBackground: false
});

const styles = computed(() => {
  let st:any;

  if (props.variant == 'default') {
    if (!props.color) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-text)',
        '--background': 'var(--t-color-surface)'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-status-'+props.color+'-text)',
        '--background': 'var(--t-color-status-'+props.color+')'
      };
    }
    else {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-text)',
        '--background': props.color
      };
    }
  }

  if (props.variant == 'text') {
    if (!props.color) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-text)',
        '--background': 'transparent'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': 'none',
        '--color': 'var(--t-color-status-'+props.color+')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': 'none',
        '--color': props.color,
        '--background': 'transparent'
      };
    }
  }

  if (props.variant == 'outline') {
    if (!props.color) {
      st = {
        '--border': '0.55px solid var(--t-color-text)',
        '--color': 'var(--t-color-text)',
        '--background': 'transparent'
      }
    }
    else if (['warning', 'info', 'danger', 'primary', 'secondary', 'success'].includes(props.color)) {
      st = {
        '--border': '0.55px solid var(--t-color-status-'+props.color+')',
        '--color': 'var(--t-color-status-'+props.color+')',
        '--background': 'transparent'
      };
    }
    else {
      st = {
        '--border': '0.55px solid '+props.color,
        '--color': props.color,
        '--background': 'transparent'
      };
    }
  }

  return st;
});
</script>