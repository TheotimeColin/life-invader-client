<template>
  <img :src="source">
</template>

<script>
  export default {
    name: 'IconGeneric',
    props: {
      source: {
        required: true
      }
    }
  }
</script>

<style>

</style>