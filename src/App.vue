<template>
  <div id="app">
    <WrapperMain>
      <template slot="left">
        <Sidebar />
      </template>

      <template slot="center">
        <router-view></router-view>
      </template>
    </WrapperMain>
  </div>
</template>

<script>
  import WrapperMain from '@/components/WrapperMain'
  import Sidebar from '@/layout/Sidebar'

  export default {
    name: 'App',
    components: { WrapperMain, Sidebar }
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
