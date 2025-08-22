<style lang="scss">
.t-collapse-header{
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem 0;

  > * {
    display: flex;
    align-items: center;
  }

  i{
    font-size: 1.2rem !important;
  }

  .icon {
    justify-content: flex-end;
    i{
      font-size: 1.5rem !important;
    }
  }

  .t-collapse-title{
    flex: 1
  }

  > *:first-child:not(.t-collapse-title) {
    margin-right: 0.25rem;
  }
}

.t-collapse{
  .t-collapse-content{
    height: var(--height);
    transition: height .2s ease;
    overflow: auto;
  }

  &:not(.open) .t-collapse-content{
    height: 0px !important;
  }
}
</style>

<template>
  <div class="t-collapse" :class="{open: isOpen}" :style="{'--height': height}">
    <div class="t-collapse-header" @click="onToogle">
      <slot name="icon"></slot>
      <div class="t-collapse-title"><slot name="title">{{ props.title }}</slot></div>
      <slot name="toogle">
        <div class="icon" v-if="isOpen"><i class="ri-arrow-up-s-line"></i></div>
        <div class="icon" v-else><i class="ri-arrow-down-s-line"></i></div>
      </slot>
    </div>
    <div class="t-collapse-content">
      <div ref="content">
        <slot name="content"><slot/></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  title?: string
}>();
const emit = defineEmits(['change']);
const isOpen = ref(false);
const height = ref('');
const content = ref();

const onToogle = () => {
  isOpen.value = !isOpen.value;
  height.value = `calc(${content.value.offsetHeight}px + 2rem)`;
  emit('change', isOpen.value);
}

emit('change', isOpen.value);
</script>