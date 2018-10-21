<template>
  <div class="PostProfile">
    <ProfilePicture />
    <ButtonGeneric class="PostProfile_follow" :modifiers="[ 'tiny' ]">Suivre</ButtonGeneric>
  </div>
</template>


<script>
  import ProfilePicture from '@/components/ProfilePicture'
  import ButtonGeneric from '@/components/ButtonGeneric'
  
  export default {
    name: "PostBody",
    components: { ProfilePicture, ButtonGeneric }
  }
</script>

<style scoped>
  .PostProfile {
    flex-grow: 0;
    flex-shrink: 0;
  }
  
  .PostProfile_follow {
    margin-top: 22px;
  }
</style>