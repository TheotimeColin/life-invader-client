<template>
  <div class="ProfileButton">
    <ProfilePicture :modifiers="[ 'small' ]" />
    <slot></slot>
    <IconGeneric class="ProfileButton_select" :source="assets.arrowShortDown" />
  </div>
</template>

<script>
  import IconGeneric from '@/components/IconGeneric'
  import ProfilePicture from '@/components/ProfilePicture'
  
  import arrowShortDown from '@/assets/img/icons/arrow-short-down.png'
  
  export default {
    name: 'ProfileButton',
    components: { IconGeneric, ProfilePicture },
    data () {
      return {
        assets: { arrowShortDown }
      }
    }
  }
</script>

<style scoped>
  .ProfileButton {
    display: flex;
    padding: 6px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font: var(--font-s);
    font-weight: bold;
    color: var(--pure-white);
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background: var(--main-gradient);
  }
  
  .ProfileButton_select {
    margin-right: 12px;
  }
</style>