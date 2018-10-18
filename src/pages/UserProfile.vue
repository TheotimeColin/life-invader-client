<template>
  <div>
    <UserHeader />
    <UserFeed />
  </div>
</template>

<script>
  import UserHeader from '@/layout/UserProfile/UserHeader'
  import UserFeed from '@/layout/UserProfile/UserFeed'
  
  export default {
    name: 'UserProfile',
    components: { UserHeader, UserFeed }
  }
</script>

<style scoped>

</style>