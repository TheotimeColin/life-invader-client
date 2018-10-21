<template>
  <div class="AdSection">
    <AdSmall class="AdSection_ad" />
    <AdSmall class="AdSection_ad" />
  </div>
</template>

<script>
  import AdSmall from './AdSmall'
  
  export default {
    name: 'AdSection',
    components: { AdSmall }
  }
</script>

<style scoped>
  .AdSection {
    padding: 20px 20px 0;
    background-color: var(--dreamy-grey);
  }
  
  .AdSection_ad {
    padding-bottom: 20px;
  }
</style>