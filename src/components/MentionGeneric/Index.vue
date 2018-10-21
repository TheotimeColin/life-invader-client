<template>
  <div class="MentionGeneric">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MentionGeneric"
  }
</script>

<style lang="scss" scoped>
  .MentionGeneric {
    display: inline;
    color: var(--cloud-grey);
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
</style>