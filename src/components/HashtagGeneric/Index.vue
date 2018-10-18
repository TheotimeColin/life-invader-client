<template>
  <div class="HashtagGeneric">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HashtagGeneric"
  }
</script>

<style scoped>
  .HashtagGeneric {
    display: inline;
    font-weight: bold;
    color: var(--crimson-red);
  }
</style>