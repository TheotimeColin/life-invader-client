<template>
  <div class="PostActions">
    <div class="PostActions_separator"></div>
    <div class="PostActions_item">Suivre Kelly</div>
    <div class="PostActions_separator PostActions_separator--small"></div>
    <div class="PostActions_item">J'aime</div>
  </div>
</template>

<script>
  export default {
    name: "PostActions"
  }
</script>

<style lang="scss" scoped>
  .PostActions {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  
  .PostActions_separator {
    height: 1px;
    flex-grow: 1;
    background-color: var(--mercury-grey);
  }
  
  .PostActions_separator--small {
    flex-grow: 0;
    width: 10px;
  }
  
  .PostActions_item {
    margin: 0 8px;
    font: var(--font-s);
  }
</style>