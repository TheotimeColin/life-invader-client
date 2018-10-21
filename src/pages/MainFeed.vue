<template>
  <WrapperColumnRight>
    <template slot="left">
      <NewPost />
      
      <HomeFeed :posts="posts" />
      <HomeFeed :posts="posts" />
      <HomeFeed :posts="posts" />
    </template>
    <template slot="right">
      <AdSection />
    </template>
  </WrapperColumnRight>
</template>

<script>
  import NewPost from '@/components/NewPost'
  import HomeFeed from '@/layout/HomeFeed'
  import WrapperColumnRight from '@/components/WrapperGeneric/WrapperColumnRight'
  import AdSection from '@/components/AdSection'
  
  import PostService from '@/services/PostService'
  
  export default {
    name: 'MainFeed',
    components: { HomeFeed, WrapperColumnRight, AdSection, NewPost },
    data () {
      return {
        posts: []
      }
    },
    async mounted () {
      let posts = await PostService.fetchAllPosts()
      
      this.$data.posts = posts.data.posts
    }
  }
</script>

<style scoped>

</style>