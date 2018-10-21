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
  
  export default {
    name: 'MainFeed',
    components: { HomeFeed, WrapperColumnRight, AdSection, NewPost },
    data () {
      return {
        posts: [
          { content: "@lifeInvader My way with words is a shadow, and I want to watch Star Wars. For all casual bag, I say. #minipop #randomtweet" },
          { content: "My game is glorious, bro. #somebabe" },
          { content: "@GJames My dog is a #disaster, and I want to punch someone. Slow dancing for way huge weirdness, bro. A path towards more style. Unlikely faster style, for the win. #grimism" },
          { content: "My job is a different story, and I want to cut back. #this2u" }
        ]
      }
    }
  }
</script>

<style scoped>

</style>