<template>
  <div class="PostProfile">
    <ProfilePicture :source="user.profile_picture" />
    <ButtonGeneric class="PostProfile_follow" :modifiers="[ 'tiny' ]">Suivre</ButtonGeneric>
  </div>
</template>


<script>
  import ProfilePicture from '@/components/ProfilePicture'
  import ButtonGeneric from '@/components/ButtonGeneric'
  
  export default {
    name: 'PostProfile',
    components: { ProfilePicture, ButtonGeneric },
    props: {
      user: { type: Object, default: () => { profile_picture: '' } }
    }
  }
</script>

<style scoped>
  .PostProfile {
    flex-grow: 0;
    flex-shrink: 0;
  }
  
  .PostProfile_follow {
    margin-top: 12px;
  }
</style>