<template>
  <div id="app">
    <WrapperMain v-if="mode == ''">
      <template slot="left">
        <Sidebar />
      </template>

      <template slot="center">
        <router-view></router-view>
      </template>
    </WrapperMain>
    <div v-else-if="mode == 'landing'">
      Welcome
      <router-link to="/feed">Cheat link</router-link>
    </div>
  </div>
</template>

<script>
  import WrapperMain from '@/components/WrapperMain'
  import Sidebar from '@/layout/Sidebar'

  export default {
    name: 'App',
    components: { WrapperMain, Sidebar },
    computed: {
      mode () {
        return this.$route.meta.main ? this.$route.meta.main.mode : ''
      }
    }
  }
</script>

<style lang="scss">
  @import 'main.css';

  #app {
    font: var(--font-m);
    color: var(--mineshaft-black);
    min-height: 100vh;
    background-color: var(--pure-white);
  }
</style>
