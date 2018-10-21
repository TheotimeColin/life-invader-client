<template>
  <div class="WrapperMain">
    <div class="WrapperMain_column WrapperMain_column--left">
      <slot name="left"></slot>
    </div>
    <div class="WrapperMain_column WrapperMain_column--center">
      <slot name="center"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WrapperMain'
  }
</script>

<style scoped>
  .WrapperMain {
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
  }
  
  .WrapperMain_column--left {
    width: 250px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  
  .WrapperMain_column--center {
    flex-grow: 1;
  }
</style>