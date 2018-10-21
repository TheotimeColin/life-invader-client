<template>
  <div class="Sidebar">
    <div class="Sidebar_header">
      <IconGeneric class="Sidebar_logo" :source="assets.lifeInvader" />
    </div>
    <ProfileButton class="Sidebar_profile">Johnny Maggs</ProfileButton>
  </div>
</template>

<script>
  import ProfileButton from '@/components/ProfileButton'
  import IconGeneric from '@/components/IconGeneric'
  
  import lifeInvader from '@/assets/img/icons/life-invader.png'
  
  export default {
    name: 'Sidebar',
    components: { ProfileButton, IconGeneric },
    data () {
      return {
        assets: { lifeInvader }
      }
    }
  }
</script>

<style>
  .Sidebar {
    height: 100%;
    border: 1px solid var(--mercury-grey);
  }
  
  .Sidebar_header {
    padding: 25px 0;
    text-align: center;
  }
  
  .Sidebar_profile {
    margin: 0 0 0 -10px;
    position: relative;
    z-index: 1;
  }
  
  .Sidebar_logo {
    max-width: 100%;
    width: 150px;
  }
</style>