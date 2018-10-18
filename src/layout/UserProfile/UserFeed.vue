<template>
  <WrapperColumnRight
    class="UserFeed"
  >
    <template slot="left">
      <Post v-for="post in posts" />
    </template>
    <template slot="right">
      sxwcwxcwxc
    </template>
  </WrapperColumnRight>
</template>

<script>
  import WrapperColumnRight from '@/components/WrapperGeneric/WrapperColumnRight'
  import Post from '@/layout/Post'
  
  export default {
    name: 'UserFeed',
    components: { WrapperColumnRight, Post },
    data () {
      return {
        posts: [
          {}, {}, {}, {}
        ]
      }
    }
  }
</script>

<style scoped>
  .UserFeed {
    
  }
</style>