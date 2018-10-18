<template>
  <div class="WrapperColumnRight" :class="modifierClasses">
    <div class="WrapperColumnRight_column WrapperColumnRight_column--left">
      <slot name="left"></slot>
    </div>
    <div class="WrapperColumnRight_column WrapperColumnRight_column--right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import Classes from '@/mixins/Classes'
  
  export default {
    name: 'WrapperColumnRight',
    mixins: [ Classes ],
    props: {
      modifiers: { type: Array, default: () => [] }
    }
  }
</script>

<style lang="scss" scoped>
  .WrapperColumnRight {
    height: 100%;
    display: flex;
    width: 100%;
  }
  
  .WrapperColumnRight_column {
    flex-grow: 1;
    border-right: 1px solid var(--mercury-grey);
  }
  
  .WrapperColumnRight_column--right {
    width: 280px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  
  .WrapperColumnRight--no-borders {
    
    .WrapperColumnRight_column {
      border: none;
    }
  }
</style>