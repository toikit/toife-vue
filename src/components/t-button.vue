<style lang="scss" scoped>
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

  // Case when button is not disbble
  // And have props active background, then trigger action, focus to change background
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

  // Case buton disable
  &:disabled{
    opacity: 0.5;
  }

  // Case have rounded props
  &.rounded{
    border-radius: 8px;
  }

  // Case is block, then display full width
  &.block{
    width: 100%;
  }

  /// ---------------
  /// SIZE
  /// ---------------
  // Case size is small
  &.size-small{
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    height: 31px;
  }

  // Case size is standard
  &.size-standard{
    padding: 0.75rem 1rem;
    font-size: 1rem;
    height: 42px;
  }

  // Case 
  &.size-large{
    padding: 1rem 1.1rem;
    font-size: 1.2rem;
    height: 50px;
  }

  // Style for loading icon
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

  // Style for content of button
  .t-button-content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <button class="t-button" :style="styles" :class="{'active-background': props.activeBackground, rounded: props.rounded, block: props.block, ['size-'+props.size]: true}">
    <span class="t-button-content" v-show="!props.loading"><slot></slot></span>
    <span class="loader" v-if="props.loading"><t-loading-icon color="var(--color)" :type="props.loadingType"/></span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import TLoadingIcon from './t-loading-icon.vue';

// Props
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

// Style varibble generate
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