<template>
  <div class="ProfilePicture" :class="modifierClasses" :style="{ backgroundImage: `url(${assets.placeholder})` }"></div>
</template>

<script>
  import Classes from '@/mixins/Classes'
  
  import placeholder from '@/assets/img/tmp/profile.png'
  
  export default {
    name: 'ProfilePicture',
    mixins: [ Classes ],
    props: { 
      modifiers: { type: Array, default: () => [] }
    },
    data () {
      return {
        assets: { placeholder }
      }
    }
  }
</script>

<style scoped>
  .ProfilePicture {
    border-radius: 50%;
    background-size: cover;
    background-color: var(--mineshaft-black);
    width: 75px;
    height: 75px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  
  .ProfilePicture--small {
    width: 60px;
    height: 60px;
  }
  
  .ProfilePicture--large {
    width: 150px;
    height: 150px;
  }
</style>