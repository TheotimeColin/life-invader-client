<template>
  <div class="AdSmall">
    <div class="AdSmall_image" :style="adStyle"></div>
    <div class="AdSmall_text">Stop and click now.</div>
  </div>
</template>

<script>
  import ad0 from '@/assets/img/tmp/adZero.png'
  import ad1 from '@/assets/img/tmp/adOne.png'
  import ad2 from '@/assets/img/tmp/adTwo.png'
  import ad3 from '@/assets/img/tmp/adThree.png'
  import ad4 from '@/assets/img/tmp/adFour.png'
  import ad5 from '@/assets/img/tmp/adFive.png'
  
  export default {
    name: 'AdSmall',
    data () {
      return {
        pool: [
          { image: ad0 },
          { image: ad1 },
          { image: ad2 },
          { image: ad3 },
          { image: ad4 },
          { image: ad5 }
        ]
      }
    },
    computed: {
      adStyle () {
        let random = Math.floor(Math.random() * this.$data.pool.length)
        
        return {
          backgroundImage: `url(${ this.$data.pool[random].image })`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .AdSmall_image {
    background-size: cover;
    width: 100%;
    padding-top: 50%;
    position: relative;
  }
  
  .AdSmall_text {
    font: var(--font-s);
    margin-top: 10px;
  }
</style>