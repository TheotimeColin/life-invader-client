<template>
  <div>
    <UserHeader />
    <UserFeed :posts="posts" />
  </div>
</template>

<script>
  import UserHeader from '@/layout/UserProfile/UserHeader'
  import UserFeed from '@/layout/UserProfile/UserFeed'
  
  export default {
    name: 'UserProfile',
    components: { UserHeader, UserFeed },
    mounted () {
      console.log(this.$route.params.user)
    },
    data () {
      return {
        posts: [
          { content: "@lifeInvader My way with words is a shadow, and I want to watch Star Wars. For all casual bag, I say. #minipop #randomtweet" },
          { content: "My game is glorious, bro. #somebabe" },
          { content: "@GJames My dog is a #disaster, and I want to punch someone. Slow dancing for way huge weirdness, bro. A path towards more style. Unlikely faster style, for the win. #grimism" },
          { content: "My job is a different story, and I want to cut back.#this2u" }
        ]
      }
    }
  }
</script>

<style scoped>

</style>