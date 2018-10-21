<template>
  <div class="Sidebar">
    <div class="Sidebar_header">
      <IconGeneric class="Sidebar_logo" :source="assets.lifeInvader" />
    </div>
    <ProfileButton class="Sidebar_profile">Johnny Maggs</ProfileButton>
    <div class="Sidebar_nav">
      <router-link class="Sidebar_navItem" to="/feed">Accueil</router-link>
      <router-link class="Sidebar_navItem" to="/kelly.marland">Mon profil</router-link>
    </div>
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

<style lang="scss" scoped>
  .Sidebar {
    height: 100%;
    position: fixed;
    width: 250px;
    border: 1px solid var(--mercury-grey);
  }
  
  .Sidebar_header {
    padding: 25px 0;
    text-align: center;
  }
  
  .Sidebar_profile {
    margin: 0 -1px 0 -10px;
    position: relative;
    z-index: 1;
  }
  
  .Sidebar_logo {
    max-width: 100%;
    width: 150px;
  }
  
  .Sidebar_nav {
    margin-top: 15px;
  }
  
  .Sidebar_navItem {
    display: block;
    padding: 15px 10px;
    text-align: center;
    border-bottom: 1px solid var(--mercury-grey);
    font: var(--font-s);
    
    &:hover {
      background-color: var(--dreamy-grey);
    }
  }
</style>