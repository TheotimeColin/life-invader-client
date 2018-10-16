<template>
  <div id="app">
    <WrapperMain>
      <template slot="left">
          
      </template>

      <template slot="center">
        <router-view></router-view>
      </template>
    </WrapperMain>
  </div>
</template>

<script>
import WrapperMain from '@/components/WrapperMain'
  
export default {
  name: 'App',
  components: { WrapperMain }
}
</script>

<style lang="scss">
@import 'main.css';
  
#app {
  font: var(--font-m);
  color: var(--mineshaft-black);
  background-color: var(--pure-white);
}
</style>
