<template>
  <WrapperColumnRight
    class="UserHeader"
    :style="{ backgroundImage: `url(${assets.cover})` }"
    :modifiers="[ 'no-borders' ]"
  >
    <template slot="left">
      
    </template>
    <template slot="right">
      <div class="UserHeader_right">
        <ProfilePicture :modifiers="[ 'large' ]" />
        <p class="UserHeader_name">Kelly Markland</p>
        <ButtonGeneric>Suivre</ButtonGeneric>
      </div>
    </template>
  </WrapperColumnRight>
</template>

<script>
  import WrapperColumnRight from '@/components/WrapperGeneric/WrapperColumnRight'
  import ProfilePicture from '@/components/ProfilePicture'
  import ButtonGeneric from '@/components/ButtonGeneric'
  
  import cover from '@/assets/img/tmp/cover.jpg'
  
  export default {
    name: 'UserHeader',
    components: { WrapperColumnRight, ProfilePicture, ButtonGeneric },
    data () {
      return {
        assets: { cover }
      }
    }
  }
</script>

<style scoped>
  .UserHeader {
    background-size: cover;
  }
  
  .UserHeader_right {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--mineshaft-black-60);
  }
  
  .UserHeader_name {
    color: var(--pure-white);
    font: var(--font-m);
    font-weight: bold;
  }
</style>