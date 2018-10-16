<template>
  <div class="WrapperMain">
    <div class="WrapperMain_column">
      <slot name="left"></slot>
    </div>
    <div class="WrapperMain_column">
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

</style>