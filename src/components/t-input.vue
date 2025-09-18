<template>
  <div class="t-input" :class="{rounded: rounded, ['size-'+size]: true, ['variant-'+variant]: true, focus: isFocus, 'has-value': !!modelValue}">
    <label>
      <span class="t-input-label">{{ label }}</span>
      <div class="t-input-content">
        <slot name="start"/>
        <input :type="type" :placeholder="variant == 'default' ? placeholder : ''" :value="modelValue" @input="onInput" @focus="focus" @blur="blur"></input>
        <slot name="end"/>
      </div>
    </label>
    <t-text color="danger" v-if="error">{{ error }}</t-text>
    <t-text color="secondary" v-else-if="help">{{ help }}</t-text>
  </div>
</template>

<style lang="scss" scoped>
.t-input{
  position: relative;

  .t-input-content{
    display: flex;
    align-items: center;
  }

  input{
    background-color: transparent;
    color: var(--t-color-text);
    padding: 0;
    flex: 1;
  }

  &.size-small{
    .t-input-label{display: none;}
    .t-text{
      font-size: 0.7rem;
    }

    input{
      font-size: 1rem;
      height: 31px;
    }
  }

  &.size-standard{
    .t-input-label{
      font-size: 0.8rem;
    }

    .t-text{
      font-size: 0.7rem;
    }

    input{
      font-size: 1rem;
      height: 42px;
    }
  }

  &.size-large{
    .t-input-label{
      font-size: 1rem;
    }

    .t-text{
      font-size: 0.8rem;
    }

    input{
      font-size: 1.2rem;
      height: 50px;
    }
  }

  &.variant-default{
    label{
      display: block;
      width: 100%;
    }
  }

  &.variant-floating{
    input{
      padding-top: 1rem;
    }

    .t-input-label{
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      z-index: 0;
      transform: translateY(-50%);
      font-size: 1rem;
      line-height: 1rem;
      transition: all 0.2s ease;
    }

    &.focus, &.has-value{
      .t-input-label{
        transform: translateY(-120%);
        font-size: 0.7rem;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import TText from './t-text.vue';
const props = withDefaults(defineProps<{
  size?:string
  rounded?: boolean,
  label?:string,
  placeholder?:string,
  type?:string,
  help?:string,
  error?:string,
  modelValue?:any,
  variant?:any
}>(), {
  size: 'standard',
  rounded: false,
  label:'',
  placeholder:'',
  type:'text',
  modelValue:'',
  variant: 'default'
});
const emit = defineEmits(['update:modelValue']);
const isFocus = ref(false);

const onInput = (e:any) => {
  emit('update:modelValue', e.target.value);
}
const focus = () => {isFocus.value = true}
const blur = () => {isFocus.value = false}
</script>