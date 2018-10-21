<template>
  <WrapperColumnRight
    class="UserFeed"
  >
    <template slot="left">
      <Feed :posts="posts" />
    </template>
    <template slot="right">

    </template>
  </WrapperColumnRight>
</template>

<script>
  import WrapperColumnRight from '@/components/WrapperGeneric/WrapperColumnRight'
  import Feed from '@/components/Feed'
  
  export default {
    name: 'UserFeed',
    components: { WrapperColumnRight, Feed },
    props: {
      posts: { type: Array, default: () => [] }
    }
  }
</script>

<style scoped>
  .UserFeed {
    
  }
</style>