<template>
  <div class="NewPost">
    <div class="NewPost_left">
      <ProfilePicture />
    </div>
    <div class="NewPost_right">
      <InputTextarea />
    </div>
  </div>
</template>

<script>
  import ProfilePicture from '@/components/ProfilePicture'
  import InputTextarea from '@/components/Inputs/InputTextarea'
  
  export default {
    name: 'NewPost',
    components: { ProfilePicture, InputTextarea }
  }
</script>

<style scoped>
  .NewPost {
    display: flex;
    padding: 20px;
    background-color: var(--dreamy-grey);
    border-bottom: 1px solid var(--mercury-grey);
  }
  
  .NewPost_left {
    margin-right: 20px;
  }
  
  .NewPost_right {
    flex-grow: 1;
  }
</style>