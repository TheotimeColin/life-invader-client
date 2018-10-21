<template>
  <div class="Feed">
    <PostGeneric v-for="post in posts" :post="post"/>
  </div>
</template>

<script>
  import PostGeneric from '@/components/PostGeneric'
  
  export default {
    name: 'UserFeed',
    components: { PostGeneric },
    props: {
      posts: { type: Array, default: () => [] }
    }
  }
</script>

<style scoped>
  .UserFeed {
    
  }
</style>