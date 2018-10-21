<template>
  <Feed :posts="posts" />
</template>

<script>
  import Feed from '@/components/Feed'
  
  export default {
    name: 'HomeFeed',
    components: { Feed },
    props: {
      posts: { type: Array, default: () => [] }
    }
  }
</script>

<style scoped>
  .HomeFeed {
    
  }
</style>